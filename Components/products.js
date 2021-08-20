import React, { Component } from "react";
import Product from "./product";
import Zerostate from "./Zerostate";
class Products extends Component{
    state={
        serchTerm:"",
        newfilterItems:this.props.items
    }
    static getDerivedStateFromProps(nextprops){
        return{
           newfilterItems:nextprops.items
        }
      }
    handelSearchTerm=(e)=>{
        this.setState({
serchTerm:e.target.value
        },()=>{
          this.setState({newfilterItems:this.handlefilter(this.props.items)})  
        })
    }
    handlefilter=(items)=>{
       return items.filter((item)=>item.title
        .toLowerCase()
        .trim()
        .indexOf(this.state.serchTerm.toLowerCase().trim())  !== -1)
    }
    render(){
        const{newfilterItems}=this.state;
        // let filteredItems=this.handlefilter(items);
        return (
         
         <div>
             <input type="text" placeholder="search..."onChange={this.handelSearchTerm}/>
            {newfilterItems.length? newfilterItems.map((item)=>(

                 <Product singleitem={item}
                  key={item.id} 
                   addtoFav= {this.props.addtoFav} 
                   deleteItem={this.props.deleteItem} 
                    addItemcart={this.props.addItemcart}/>
             ))
            : <Zerostate/>}
         </div>



        )
    };


};
export default Products;
