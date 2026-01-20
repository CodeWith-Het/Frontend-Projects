import React from "react";

const accessoiesCard = [
  {
    "name": "White Plimsolls",
    "currentPrice": "$36.00",
    "originalPrice": null,
    "badge": "Hot",
    "reviews": "No reviews",
    "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=500&q=60"
  },
  {
    "name": "Striped Faux Fur Scarf",
    "currentPrice": "$26.00",
    "originalPrice": null,
    "badge": "New",
    "reviews": "No reviews",
    "image": "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?auto=format&fit=crop&w=500&q=60"
  },
  {
    "name": "Contrasting Beaded Bracelet",
    "currentPrice": "$10.99",
    "originalPrice": "$12.99",
    "badge": "-15%",
    "reviews": "No reviews",
    "image": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=500&q=60"
  },
  {
    "name": "Mini Split Suede Bag",
    "currentPrice": "$56.00",
    "originalPrice": null,
    "badge": "Hot",
    "reviews": "No reviews",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=60"
  },
  {
    "name": "Contrast Sunglasses",
    "currentPrice": "$30.00",
    "originalPrice": null,
    "badge": "New" ,
    "reviews": "No reviews",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=500&q=60"
  },
  {
    "name": "Maxi Sole Sneakers",
    "currentPrice": "$55.80",
    "originalPrice": null,
    "badge": "New",
    "reviews": "No reviews",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=60"
  },
  {
    "name": "Wide Polka Dot Tie",
    "currentPrice": "$12.99",
    "originalPrice": "$22.99",
    "badge": "-43%",
    "reviews": "No reviews",
    "image": "https://images.unsplash.com/photo-1533462506003-13c20d204b58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "Vintage Pearl Earrings",
    "currentPrice": "$10.00",
    "originalPrice": "$14.00",
    "badge": "-29%",
    "reviews": "No reviews",
    "image": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=60"
  },
  {
    "name": "Classic Leather Belt",
    "currentPrice": "$40.00",
    "originalPrice": null,
    "badge": "New",
    "reviews": "No reviews",
    "image": "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=500&q=60"
  },
  {
    "name": "Woolen Beanie Hat",
    "currentPrice": "$18.00",
    "originalPrice": null,
    "badge": "New",
    "reviews": "No reviews",
    "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=500&q=60"
  },
  {
    "name": "Chunky Chain Necklace",
    "currentPrice": "$25.00",
    "originalPrice": "$35.00",
    "badge": "-28%",
    "reviews": "No reviews",
    "image": "https://images.unsplash.com/photo-1721206624521-3393ded42e11?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "Patterned Ankle Socks",
    "currentPrice": "$8.00",
    "originalPrice": null,
    "badge": "New",
    "reviews": "No reviews",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=500&q=60"
  }
]

const Accessoies = () => {

  return (
    <div className="mt-2">
      <div className="w-full h-fit flex flex-col items-center">

      <h1 className="text-4xl font-medium">Accessories</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, fuga?</p>
      </div>
    <div className="flex flex-wrap gap-6 justify-center p-10">
    {accessoiesCard.map((elem,idx)=>{
      return <div key={idx} className="flex justify-between flex-wrap">
        <div className="w-[260px] bg-white rounded-md shadow-sm p-4">
         
          <div className="relative bg-gray-100 h-[200px] flex items-center justify-center">
            <img
              src={elem.image}
              alt="White Plimsolls"
              className="w-[80%] h-full object-cover object-top rounded-2xl"
            />

            <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
              {elem.badge}
            </span>
          </div>

    
          <div className="mt-3">
            <h4 className="font-medium text-gray-800">{elem.name}</h4>

            <span className="font-semibold mt-1">{elem.currentPrice}</span>

            <span className="font-semibold ml-1 line-through text-gray-300">{elem.originalPrice}</span>

            <div className="text-sm text-gray-400 mt-1">
              ⭐⭐⭐⭐⭐ <span className="ml-1">{elem.reviews}</span>
            </div>
          </div>
        </div>
      </div>
    })}
  </div>
  </div>
)
}

export default Accessoies;


 