import React from "react";
function Product ({singleitem,deleteItem,addtoFav}){
    const { title,price,id}=singleitem;
    
  return (
     <div> 
    {id} - {title} - {price}
       <button onClick={() => deleteItem(id)}> Delete</button>
       <button onClick={()=> addtoFav(singleitem)}> Add to favourite </button>
         </div>

  )


}
export default Product;