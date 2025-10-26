import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

const Agence = () => {

  const imageDivRef=useRef(null);
  gsap.registerPlugin(ScrollTrigger)

 useGSAP(() => {
  gsap.to(imageDivRef.current, {
    scrollTrigger: {
      trigger: imageDivRef.current,
      markers: true,
      start:'top 30%',
      end:'top -1%',
      scrub: true,
    },
  });
});

  return (
    <>
      <div>

        {/* Here Section 1 */}
        <div className='section1'>
          <div ref={imageDivRef} className='absolute overflow-hidden rounded-3xl h-[20vw] w-[15vw] top-[30vh] left-[31vw]'>
            <img src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" className=' h-full w-full object-cover'/>
          </div>
          <div className=' relative font-[font2]'>
            <div className='mt-[55vh]'>
              <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Soixan7e <br />
              Douze</h1>
            </div>
            <div className='pl-[40%] mt-20 width-[60%] pr-10'>
              <p className='text-4xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
            </div>
          </div>
        </div>

        {/* Here Section 2 */}
        <div className='section2 h-screen'>

        </div>
      </div>
    </>
  )
};

export default Agence