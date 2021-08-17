import React ,{Component}from "react";

class CreateProduct extends Component{


    render(){
        return (
            <form onSubmit={this.props.addItem}>
                <input type="text" id ="newtitle"  value={this.props.newtitle}placeholder="Enter product Name" onChange={this.props.handelChangeInput} />
                <input type="Number" id ="newprice"  value={this.props.newprice}placeholder="Enter product Price" onChange={this.props.handelChangeInput}/>
                <input type="submit"/>
            </form>
        )
    }

}
export default CreateProduct;