import React from "react";
function Product ({singleitem,deleteItem,addtoFav,addItemcart}){
    const { title,price,id}=singleitem;
    
  return (
     <div> 
    {id} - {title} - {price}
       <button onClick={() => deleteItem(id)}> <i className="fa fa-trash"/></button>
       <button onClick={()=> addtoFav(singleitem)}><i className="fa fa-star"/>  </button>
       <button  onClick={()=> addItemcart(singleitem)}><i className="fa fa-shopping-cart"/>  </button>
         </div>

  )


}
export default Product;