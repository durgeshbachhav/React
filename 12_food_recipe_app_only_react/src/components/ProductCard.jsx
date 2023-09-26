import React from "react";

const ProductCard = ({ recipe , loading}) => {
  return (
    loading ? <div className="grid place-content-center">
     <div class="w-16 flex items-center justify-between ">
    <div class="w-4 h-4 rounded-full bg-pink-500 animate-left-swing"></div>
    <div class="w-4 h-4 rounded-full bg-pink-500"></div>
    <div class="w-4 h-4 rounded-full bg-pink-500 animate-right-swing"></div>
  </div>
    </div>
  :

   <div>
     <h2 className="text-slate-800 text-center p-4 text-3xl px-4 py-8 font-bold">Exploring Flavors, One Recipe at a Time</h2>
     <div className="grid gap-x-8 gap-y-8 grid-cols-4">
     {
          recipe &&
          recipe.map((item, index) => {
            const { image, label, calories } = item.recipe;
            return (
              <div key={index} className="px-2 py-2 border-2 mx-8 w-80  rounded-md">
                <img className="w-full rounded-md" src={image} alt="" />
      
                <div>
                  <h3 className="font-bold">{label}</h3>
                  <p className="font-semibold">Calories :{calories}</p>
                  <div className="flex flex-wrap justify-between mt-4">
                    <button className="px-4 py-1 bg-slate-600 text-white rounded-md">
                      Add To Cart
                    </button>
                    <button className="px-4 py-1 bg-slate-600 text-white rounded-md">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })
     }
    </div>
   </div>
  );
};

export default ProductCard;
