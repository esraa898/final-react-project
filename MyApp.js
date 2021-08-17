import React ,{Component}from "react";
import {BrowserRouter,Route,Redirect}from "react-router-dom"
import data from "./data";
import Products from "./Components/products";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import CreateProduct from "./Components/Create";
import Favourites from "./Components/Favourits";



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
 removefromFav=()=>{
   let favourites=[...this.state.favourites]
 }
  render(){
    console.log(this.state.products)
    return (
      <BrowserRouter>
     
      <Navbar/>
       {this.state.redirect && <Redirect to="/products"/>}
      
      <Route path="/" exact component={Home}/>
        <Route  path="/products" render={(props)=>{
          return <Products items={this.state.products}{...props} deleteItem={this.deleteItem}  addtoFav={this.addtoFav} />
        }}/>
          <Route  path="/create" render={(props)=>{
          return <CreateProduct handelChangeInput={this.handelChangeInput} addItem={this.addItem}
          newtitle={this.state.newtitle}  newprice={this.state.newprice}{...props}/>
          
          }}/>
          <Route path="/favourites" render={(props)=>{
            return <Favourites {...props}  favourites={this.state.favourites}/>;
          }}/>
   
        
      </BrowserRouter>
    
    
    )
  }
}

export default MyApp;
