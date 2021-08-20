import React, { Component } from "react";
import Zerostate from "./Zerostate";
class Favourites extends Component{
    render(){ 
         const {favourites ,removefromFav}=this.props;
        
    return (
      
        <div>
            {favourites.length ?
             favourites.map((item)=>(
        <div key={item.id}>
            {item.id}-{item.title}
            <button onClick={()=>removefromFav(item.id)}>  <i className="fa fa-trash"/></button>
        </div> 
         
    ))
    :<Zerostate/> }
    </div>
    );
}}
export default Favourites;