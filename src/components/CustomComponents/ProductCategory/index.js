import React from 'react';
import {Link} from "react-router-dom";
import styles from './index.css';
import GridView from "../../../images/gridsvg.svg";
import ListView from "../../../images/listsvg.svg";
// import myObj from '../../../Common/Filter';
// import productDetails from '../../../Common/ProductDetails';


type Props = {
  myObj: Array<Object>,
  productDetails: Array<Object>
}

export default class ProductCategory extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state={
     listView:true
    }
  }

  renderFilter = () => {
    return this.props.myObj && this.props.myObj.map((item, index) => {
      console.log("myObj", item);
      return (
        <div key={index}>
          <h2 className="">{item.heading}</h2>
          {this.renderItems(item.filterValue)}
        </div>
      )
    })
  }
  renderItems = (filterValue) => {
    return filterValue.map((item, index) => {
      return (
        <div key={index}>
          <input type="checkbox" id="myCheck"></input>
          <label className="pl-2">{item.name}({item.quantity})</label>
        </div>)
    })
  }
  renderProductDetails = (listView:boolean) => {
    return this.props.productDetails && this.props.productDetails.map( (detail,idx) => {
      return(
        <>
       <div className={`item col-xs-4 col-lg-4 ${listView ? "list-group-item" : "grid-group-item"}`}>
        <Link to={`${this.props.detailLink}${detail.productId}`}>
          <img alt=""
           src={detail.productImage} className="product-left-image px-5"/>
        </Link>
          <span className="product_heading">{detail.productName}</span>
          <span>{detail.rating}</span>
          <span>{detail.price} {detail.actualPrice}</span>
          <span>{detail.description}</span>   
          <span>{detail.deliveryType}</span>
      </div>
      </>
      )
    })
  }

  render() {
    const disabledListClass = ListView ? '' : "disabled";
    const disabledGridClass = ListView ? "disabled" : '';
    return (
      <div>
       <div className="row">
       <div className="offset-sm-10 col-sm-1 text-right">
        <button 
          variant="ghost"
          onKeyPress={() => false}
          onClick={() => this.setState({
            listView :true
          })}
        >
          <img
            className={`${disabledListClass}`}
            src={ListView}
            alt=" "
          />
        </button>
        </div>
        <div className="col-sm-1">
        <button
          variant="ghost"
          onKeyPress={() => false}
          onClick={() => this.setState({
            listView:false
          })}
        >
          <img
            className={`${disabledGridClass}`}
            src={GridView}
            alt=" "
          />
        </button>
        </div>
      </div>
       <div className="row">
        <div className="col-sm-3 px-4" >
          {this.renderFilter()}
        </div>
        <div className="col-sm-9">
        <div className="row list-group">
        {this.renderProductDetails(this.state.listView)}
        </div>
        </div> 
        </div>
      </div>)
  }
}




