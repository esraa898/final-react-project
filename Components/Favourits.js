import React, { Component } from "react";
class Favourites extends Component{
    render(){ 
         const {favourites}=this.props;
         console.log (favourites)
    return (
      
        <div>
            {favourites.length ?
             favourites.map((item)=>(
        <div key={item.id}>
            {item.id}-{item.title}
            <button>  Remove from favourite</button>
        </div> 
         
    ))
    :"thereis no items" }
    </div>
    );
}}
export default Favourites;