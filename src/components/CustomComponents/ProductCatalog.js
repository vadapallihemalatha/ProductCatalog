import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class ProductRow extends Component {
    render() {
        const { cssClass, data } = this.props;
        console.log("data",data);
        return (
            <>
                <div className={`item col-xs-4 col-lg-4 ${cssClass === "list" ? "list-group-item" : "grid-group-item"}`}>
                    <div className="thumbnail">
                    <Link to={`${this.props.detailLink}${data.productId}`} 
                    >
                     <img alt="" className="group list-group-image imageheight" 
                    src={data.productImage} />
                    </Link>
                        {/* <img className="group list-group-image imageheight" src={data.productImage} alt="" /> */}
                        <div className="caption">
                            <h4 className="group inner list-group-item-heading">
                                {data.productName}</h4>
                            <p className= "group inner list-group-item-text">
                                {data.availability}
                            </p>
                            <p className= "group inner list-group-item-text">
                                {data.description}
                            </p>
                            <p className= "group inner list-group-item-text">
                                {data.price}
                            </p>
                            <p className= "group inner list-group-item-text">
                               Rating {data.rating}
                            </p>
                            <p className= "group inner list-group-item-text">
                                {data.deliveryType}
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProductRow
