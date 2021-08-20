import React from "react";
import "./cart.css";
import Checkout from "./Checkout";
import Zerostate from "./Zerostate";
function Cart({cartitems ,addItemcart,removeItemcart}){
    let total =cartitems.reduce((a,c)=> a+c.price *c.qty,0);
        return(
            
            <div className="row first"> 
              <aside className="block col-4">
                  <h2>
                  Cart items 
              </h2>
                <div>
                    {cartitems.length ? `ItemsCount :${cartitems.length}`:""}
                    {cartitems.length ? cartitems.map((item )=> <div key ={item.id}>
                           {item.title}
                           {item.qty} x{item.price}
                           <button onClick={()=> addItemcart(item)} >+</button>
                           <button onClick={()=> removeItemcart(item)} >-</button>
                           
                         
                    </div>
                    )
                    :<Zerostate/>
                    }
                
                    {total !==0 ? `Total price ${total}`  : ""}
                    <Checkout/>
                           
                   
                </div>
            
              
              
      </aside>
            </div>
        )
    }

export default Cart;