import React from 'react'
import axios from 'axios';
import { API_CARDS } from '../../paths';

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      idProp: -1,
      result: ''
    }
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    axios.post(`${API_CARDS}/${id}`)
      .then(res => {
        console.log(res.data)
        this.setState({ idProp: id, result: res.data })
      })
  }

  render() {
    return (
      <div className="col-sm-3">
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="status alert alert-success" style={{ display: this.props.data.id === this.state.idProp ? 'block' : 'none' }}>{this.state.result}</div>
            <div className="productinfo text-center">
              <a href={`/products/${this.props.data.id}`}>
                <img src={`images/home/${this.props.data.imageURL}.jpg`} alt="" />
                <h2>{this.props.data.name.length > 10 ? this.props.data.name.substring(0, 10) + "..." : this.props.data.name}</h2>
                <p>{this.props.data.price} TL</p>
              </a>
              <button onClick={() => { this.handleClick(this.props.data.id) }} className="btn btn-default add-to-cart" style={{ color: 'lightslategray' }}><i
                className="fa fa-shopping-cart"></i>Sepete ekle</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Box;