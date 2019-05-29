import React from "react";
import styles from './index.css';

type Props = {
    productObj:Array<Object>
  };

class ProductDetails extends React.Component<Props>{
     state = {
        productImg: "",
        open: false
     }

 showImg(item) {
    this.setState({ open: true, productImg: item });
  }
    renderProductDetails = () => {
        let { productObj } = this.props;
          return(
           <div className="row py-4">
           <div className= "col-sm-2">
               {productObj && productObj.productSubImages && productObj.productSubImages.map((item,index)=>
               {
                   return  <img className="pl-5 product" alt="" src={item} 
                   onMouseOver={()=>this.showImg(item)} 
                   onClick={()=>this.showImg(item)}/>
                   
               })}
            </div>
            <div className="col-sm-3" >
              <img alt=""
               src={this.state.productImg?this.state.productImg:productObj.productImage}
               className="px-5"
              />
            </div>
            <div className="col-sm-7">
              <h2>{productObj.productName}</h2>
              <div>{productObj.rating}</div>
              <h4>{productObj.price} {productObj.actualPrice}</h4>
              <div>{productObj.description}</div>
              <div>{productObj.deliveryType}</div>
              <div>{productObj.features}</div>
            </div>
          </div>
          )
         }
render(){
        return (
            <div>
            {this.renderProductDetails()}
            </div>
        )
    }    
}

export default ProductDetails;