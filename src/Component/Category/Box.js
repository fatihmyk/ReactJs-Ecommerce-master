import React from 'react'
import axios from 'axios';
import { API_CARDS } from '../../paths';

class Box extends React.Component{
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    axios.post(`${API_CARDS}/${id}`)
    .then(res => {
        console.log(res.data)
    })
  }
    render(){
        return (
            <div className="col-sm-3">
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo text-center">
                  <a href={`/products/${this.props.data.id}`}>
                    <img src={`/images/home/${this.props.data.imageURL}.jpg`} alt="" />
                    <h2>{this.props.data.name}</h2>
                    <p>{this.props.data.price} TL</p>
                  </a>
                  <button onClick={() => { this.handleClick(this.props.data.id) }} className="btn btn-default add-to-cart" style={{color: 'lightslategray'}}><i
                    className="fa fa-shopping-cart"></i>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default Box;