import React ,{Component}from "react";
import {BrowserRouter,Route,Redirect}from "react-router-dom"
import data from "./data";
import Products from "./Components/products";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import CreateProduct from "./Components/Create";
import Favourites from "./Components/Favourits";
import Cart from "./Components/cart";
import "./myapp.css";




let allItems = localStorage.getItem("data")? JSON.parse(localStorage.getItem("data")): data;
localStorage.setItem("data",JSON.stringify(allItems));

class MyApp extends Component{

  // create products comp and list All items
  //create single product
  state={
    products: allItems,
    newtitle:"",
    newprice:"",
    redirect:false,
    favourites:[],
    cartitems:[],
  }
  
  handelChangeInput=(e)=>{
   this.setState({
   [e.target.id]:e.target.value
   })};

   addItem=(e)=>{
      e.preventDefault()
 this.setState({
   products:[...this.state.products,{
  id:this.state.products.length +1,
  title:this.state.newtitle,
  price:this.state.newprice
}
],
newtitle:"",
newprice:""
 },()=>{
   localStorage.setItem("data",JSON.stringify(this.state.products));
   this.setState({redirect:true})
 }
 )};

 deleteItem =(id)=>{
   let products =[...this.state.products];
   let newproducts =products.filter((product )=> product.id !== id);
   this.setState({
     products: newproducts,
   },()=>{
    localStorage.setItem("data",JSON.stringify(this.state.products));
   })
 }
 addtoFav=(item)=>{
  let {favourites}=this.state;
  if (!favourites.some((existitem)=> existitem.id === item.id
))
  this.setState({
    favourites:[...favourites ,item]
  })
 }
 removefromFav=(id)=>{
   let favourites=[...this.state.favourites];
   let newfavourites= favourites.filter((fav)=> fav.id !== id);
   this.setState({
     favourites:newfavourites
   })
 }
addItemcart=(prd)=>{
let existeditem=this.state.cartitems.find((item)=> item.id === prd.id);
if (existeditem){
  let cartitems=this.state.cartitems.map((item)=> item.id ===prd.id ?{...existeditem,qty: existeditem.qty +1} :item);
 this.setState({cartitems})
}else{
  this.setState({
    cartitems:[...this.state.cartitems,{...prd,qty:1}],
  })
}
}
removeItemcart=(prd)=>{
  let existeditem =this.state.cartitems.find((item)=> item.id ===prd.id);
  if(existeditem.qty === 1){
    let cartitems =this.state.cartitems.filter((item)=> item.id !== prd.id);
    this.setState({cartitems})

  }else{
    let cartitems=this.state.cartitems.map((item)=>item.id === prd.id ? 
     {...existeditem,qty: existeditem.qty -1}:item);
     this.setState({cartitems})
  }

}
  render(){
   
    return (
      <BrowserRouter>
     
      <Navbar/>
       {this.state.redirect && <Redirect to="/products"/>}
      
      <Route path="/" exact component={Home}/>
        <Route  path="/products" render={(props)=>{
          return <Products items={this.state.products}{...props} deleteItem={this.deleteItem}  addtoFav={this.addtoFav}  addItemcart={this.addItemcart} />
        }}/>
          <Route  path="/create" render={(props)=>{
          return <CreateProduct handelChangeInput={this.handelChangeInput} addItem={this.addItem}
          newtitle={this.state.newtitle}  newprice={this.state.newprice}{...props}/>
          
          }}/>
          <Route path="/favourites" render={(props)=>{
            return <Favourites {...props}  favourites={this.state.favourites} removefromFav={this.removefromFav}/>;
          }}/>
        
        <Route path="/cart" render={(props)=>{
            return <Cart   cartitems={this.state.cartitems} addItemcart={this.addItemcart}removeItemcart={this.removeItemcart}{...props}  />;
          }}/>
        
          
         
           
        
      </BrowserRouter>
    
    
    )
  }
}

export default MyApp;
