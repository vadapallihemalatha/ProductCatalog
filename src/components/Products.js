import React, { useState, useEffect } from "react";
import ProductRow from './CustomComponents/ProductCatalog';
import myProducts from '../ProductList';
import FilterData from '../Filter';

function Products () {

const [layout, setState] = useState("");
const changeUI = value => {
    setState(value);
  }
console.log("myProducts",myProducts);
console.log("FilterData",FilterData);
const renderFilter = () => {
        return FilterData && FilterData.map((item, index) => {
          return (
            <div key={index}>
              <h2 className="">{item.heading}</h2>
              {renderItems(item.filterValue)}
            </div>
          )
        })
      }

const renderItems = (filterValue) => {
        return filterValue.map((item, index) => {
          return (
            <div key={index}>
              <input key={index} type="checkbox" id="myCheck"  />
              <label className="pl-2">{item.name}({item.quantity})</label>
            </div>)
        })
      }
     
 return (
           <>
           <div className="container">
        <div className="well well-sm">
            <strong>Display</strong>
            <div className="btn-group">
              <a href="#" id="list" className="btn btn-default btn-sm" onClick={e => changeUI("list")}>
                <span className="glyphicon glyphicon-th-list"></span>
                  List
              </a>
              <a href="#" id="grid" className="btn btn-default btn-sm" onClick={e => changeUI("grid")}>
                <span className="glyphicon glyphicon-th"></span>
                  Grid
              </a>
            </div>
        </div>
        <div id="products" className="row list-group">
            {/* <Products data={myProducts} FilterData={FilterData.filterData} /> */}
            <div className="col-sm-3 px-4" >
          {renderFilter()}
           </div>
           <div className="col-sm-9 px-4" >
          {myProducts.map((data, index) => (
                    <ProductRow cssClass={layout}  data={data} detailLink="/product-details/" />
                ))}
           </div>
                
        </div>
    </div>
           
           </>
        )
}

export default Products;
