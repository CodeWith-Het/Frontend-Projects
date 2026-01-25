// --- DOM ELEMENTS ---
const canvas = document.getElementById('canvas');
const layersList = document.getElementById('layersList');
const shapeBtns = document.querySelectorAll('.shape-btn');
const clearBtn = document.getElementById('clearBtn');

// Global State
let layerCount = 1;
let activeEl = null;      // Jo element abhi select hai
let isDragging = false;
let isResizing = false;
let currentHandle = null;

// Dragging ke liye temporary variables
let startX, startY, startLeft, startTop, startW, startH;

// --- 1. SHAPE CREATE KARNE KA LOGIC ---
shapeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-shape');
        createShape(type);
    });
});

clearBtn.addEventListener('click', () => {
    canvas.innerHTML = '';
    layersList.innerHTML = '';
    layerCount = 1;
    resetPropertiesPanel();
});

function createShape(type) {
    const el = document.createElement('div');
    el.classList.add('element', 'selected');
    if (type !== 'rectangle') el.classList.add(type); // Rectangle default class hai
    
    el.id = `shape-${Date.now()}`;

    // Default Dimensions (JS se set karna zaroori hai taki drag logic kaam kare)
    let w = 150, h = 100;
    if (type === 'square' || type === 'circle' || type === 'triangle' || type === 'star') {
        w = 100; h = 100;
    } else if (type === 'line') {
        w = 200; h = 4;
    }

    // Styles apply karo
    el.style.width = `${w}px`;
    el.style.height = `${h}px`;
    el.style.left = '50px';  // Fixed start position
    el.style.top = '50px';
    el.style.backgroundColor = '#3b82f6'; // Default Blue

    // Resize Handles HTML
    el.innerHTML = `
        <div class="handle tl"></div>
        <div class="handle tr"></div>
        <div class="handle bl"></div>
        <div class="handle br"></div>
    `;

    // Mousedown event (Select aur Drag start karne ke liye)
    el.addEventListener('mousedown', (e) => {
        // Agar handle par click kiya hai toh drag mat samjho
        if (e.target.classList.contains('handle')) return;
        
        e.stopPropagation(); // Canvas click hone se roko
        selectElement(el);
        
        // Dragging Start
        isDragging = true;
        activeEl = el;
        
        // Current positions note karo
        startX = e.clientX;
        startY = e.clientY;
        
        // Note: getComputedStyle use kar rahe hain taki galti na ho
        const style = window.getComputedStyle(el);
        startLeft = parseInt(style.left) || 0;
        startTop = parseInt(style.top) || 0;
    });

    canvas.appendChild(el);
    addLayer(type, el.id);
    selectElement(el);
}

// --- 2. RESIZE LOGIC (Handles) ---
// Note: Handles dynamically ban rahe hain, isliye event delegation use karenge (Canvas pe listener)
canvas.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('handle')) {
        e.stopPropagation();
        e.preventDefault(); // Text selection roko
        
        isResizing = true;
        currentHandle = e.target;
        activeEl = e.target.parentElement;
        selectElement(activeEl);

        startX = e.clientX;
        startY = e.clientY;
        
        const style = window.getComputedStyle(activeEl);
        startW = parseInt(style.width) || 0;
        startH = parseInt(style.height) || 0;
        startLeft = parseInt(style.left) || 0;
        startTop = parseInt(style.top) || 0;
    }
});

// --- 3. GLOBAL MOUSE MOVE (Drag & Resize Actual Movement) ---
window.addEventListener('mousemove', (e) => {
    // Agar koi activity nahi ho rahi toh return ho jao
    if (!isDragging && !isResizing) return;
    if (!activeEl) return;

    const dx = e.clientX - startX; // Kitna mouse hila X me
    const dy = e.clientY - startY; // Kitna mouse hila Y me

    // Case A: Dragging
    if (isDragging) {
        activeEl.style.left = `${startLeft + dx}px`;
        activeEl.style.top = `${startTop + dy}px`;
        updatePanelValues(activeEl);
    } 
    // Case B: Resizing
    else if (isResizing) {
        const handle = currentHandle;

        if (handle.classList.contains('br')) { // Bottom Right
            activeEl.style.width = `${startW + dx}px`;
            activeEl.style.height = `${startH + dy}px`;
        } 
        else if (handle.classList.contains('bl')) { // Bottom Left
            activeEl.style.width = `${startW - dx}px`;
            activeEl.style.left = `${startLeft + dx}px`;
            activeEl.style.height = `${startH + dy}px`;
        } 
        else if (handle.classList.contains('tr')) { // Top Right
            activeEl.style.width = `${startW + dx}px`;
            activeEl.style.height = `${startH - dy}px`;
            activeEl.style.top = `${startTop + dy}px`;
        } 
        else if (handle.classList.contains('tl')) { // Top Left
            activeEl.style.width = `${startW - dx}px`;
            activeEl.style.height = `${startH - dy}px`;
            activeEl.style.left = `${startLeft + dx}px`;
            activeEl.style.top = `${startTop + dy}px`;
        }
        updatePanelValues(activeEl);
    }
});

// --- 4. MOUSE UP (Stop Everything) ---
window.addEventListener('mouseup', () => {
    isDragging = false;
    isResizing = false;
    currentHandle = null;
    // Active element null nahi karte taki properties panel me data dikhta rahe
});

// --- 5. SELECTION & UI HELPERS ---
function selectElement(el) {
    // Sabko Deselect karo
    document.querySelectorAll('.element').forEach(e => e.classList.remove('selected'));
    document.querySelectorAll('.layer-item').forEach(l => l.classList.remove('active'));

    // Isko Select karo
    el.classList.add('selected');
    activeEl = el;

    // Layer Highlight
    const layer = document.getElementById(`layer-${el.id}`);
    if (layer) layer.classList.add('active');

    updatePanelValues(el);
}

// Canvas ke khali hisse pe click karne se Deselect
canvas.addEventListener('mousedown', (e) => {
    if (e.target === canvas) {
        document.querySelectorAll('.element').forEach(e => e.classList.remove('selected'));
        document.querySelectorAll('.layer-item').forEach(l => l.classList.remove('active'));
        activeEl = null;
        resetPropertiesPanel();
    }
});

function updatePanelValues(el) {
    if (!el) return;
    document.getElementById('prop-w').value = parseInt(el.style.width);
    document.getElementById('prop-h').value = parseInt(el.style.height);
    document.getElementById('prop-x').value = parseInt(el.style.left);
    document.getElementById('prop-y').value = parseInt(el.style.top);
    
    // Color Sync
    const hex = rgbToHex(el.style.backgroundColor);
    document.getElementById('prop-color').value = hex;
    document.getElementById('prop-hex').value = hex.toUpperCase();
}

function resetPropertiesPanel() {
    document.getElementById('prop-w').value = 0;
    document.getElementById('prop-h').value = 0;
    document.getElementById('prop-x').value = 0;
    document.getElementById('prop-y').value = 0;
}

// --- 6. PROPERTIES PANEL INPUTS (Two-way binding) ---
const inputs = ['prop-w', 'prop-h', 'prop-x', 'prop-y'];
inputs.forEach(id => {
    document.getElementById(id).addEventListener('input', (e) => {
        if (!activeEl) return;
        const val = e.target.value + 'px';
        if (id === 'prop-w') activeEl.style.width = val;
        if (id === 'prop-h') activeEl.style.height = val;
        if (id === 'prop-x') activeEl.style.left = val;
        if (id === 'prop-y') activeEl.style.top = val;
    });
});

// Color Input Logic
const colorPicker = document.getElementById('prop-color');
const hexInput = document.getElementById('prop-hex');

colorPicker.addEventListener('input', (e) => {
    if (activeEl) {
        activeEl.style.backgroundColor = e.target.value;
        hexInput.value = e.target.value.toUpperCase();
    }
});

hexInput.addEventListener('change', (e) => {
    if (activeEl) {
        // Basic validation agar user galat hex dale
        let val = e.target.value;
        if(!val.startsWith('#')) val = '#' + val;
        activeEl.style.backgroundColor = val;
        colorPicker.value = val;
    }
});

// --- 7. LAYERS PANEL ---
function addLayer(type, id) {
    const li = document.createElement('li');
    li.className = 'layer-item';
    li.id = `layer-${id}`;
    li.innerHTML = `
        <i class="ri-shape-line"></i> 
        <span>${type.charAt(0).toUpperCase() + type.slice(1)} ${layerCount++}</span>
    `;
    
    li.addEventListener('click', (e) => {
        e.stopPropagation();
        const el = document.getElementById(id);
        if (el) selectElement(el);
    });
    
    layersList.prepend(li);
}

// Helper: RGB se HEX convert karna (Browser RGB return karta hai)
function rgbToHex(rgb) {
    if (!rgb || rgb === 'transparent') return '#ffffff';
    if (rgb.startsWith('#')) return rgb;
    
    const sep = rgb.indexOf(",") > -1 ? "," : " ";
    const rgbValues = rgb.substr(4).split(")")[0].split(sep);
    
    let r = (+rgbValues[0]).toString(16),
        g = (+rgbValues[1]).toString(16),
        b = (+rgbValues[2]).toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    return "#" + r + g + b;
}