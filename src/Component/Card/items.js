import React, { Component } from 'react'
import axios from 'axios'
import { API_CARDS } from '../../paths'

export default class items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: {},
            searchText: '',
            errorMessage: undefined,
            loading: true
        }

        this.handleClick = this.handleClick.bind(this);
        this.reflesh = this.reflesh.bind(this);
    }

    handleClick(id) {
        axios.delete(`${API_CARDS}/${id}`)
            .then(res => {
                this.reflesh()
            })
    }

    reflesh() {
        axios.get(API_CARDS)
            .then(res => {
                this.setState({ products: res.data, loading: false });
            })
    }

    componentDidMount() {
        axios.get(API_CARDS)
            .then(res => {
                this.setState({ products: res.data, loading: false });
                console.log(res.data)
            })
    }

    buy(){
        
    }

    render() {
        if (this.state.loading) {
            return null;
        }
        return (
            <div>
            <section id="cart_items">
                <div className="container">
                    <div className="breadcrumbs">
                        <ol className="breadcrumb">
                            <li><a href="/">Home</a></li>
                            <li className="active">Sepet</li>
                        </ol>
                    </div>
                    <div className="table-responsive cart_info" style={{marginTop:-50}}>
                        <table className="table table-condensed">
                            <thead>
                                <tr className="cart_menu">
                                    <td className="image">Resim</td>
                                    <td className="description">Ürün İsmi</td>
                                    <td className="price">Fiyat</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.products.map(p =>

                                        <tr>
                                            <td className="cart_product">
                                                <a href={`products/${p.id}`}><img src={`images/home/${p.imageURL}.jpg` } alt="" {...{width:80}}/></a>
                                            </td>
                                            <td className="cart_description">
                                                <h4><a href={`products/${p.id}`}>{p.name}</a></h4>
                                            </td>
                                            <td className="cart_price">
                                                <p>{p.price} TL</p>
                                            </td>
                                            <td className="cart_delete" onClick={() => { this.handleClick(p.id) }}>
                                                <a href="#" onClick={(e) => { e.preventDefault(); }} className="cart_quantity_delete" href=""><i className="fa fa-times"></i></a>
                                            </td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section id="do_action">
                <div className="container">
                    <div className="heading">
                        <h3>Ne yapmak istiyorsunuz?</h3>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="chose_area">
                                <ul className="user_option">
                                    <li>
                                        <input type="checkbox" />
                                        <label>Kredi Kartı</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        <label>Havale / EFT</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        <label>Kupon</label>
                                    </li>
                                </ul>
                                <ul className="user_info">
                                    <li className="single_field">
                                        <label>Ülke:</label>
                                        <select>
                                            <option>Türkiye</option>
                                        </select>

                                    </li>
                                    <li className="single_field">
                                        <label>il</label>
                                        <select>
                                            <option>İstanbul</option>
                                            <option>İzmir</option>
                                            <option>Ankara</option>
                                            <option>Tekirdağ</option>
                                            <option>Denizli</option>
                                            <option>Kastamonu</option>
                                            <option>Antalya</option>
                                            <option>Iğdır</option>
                                            <option>Muğla</option>
                                        </select>

                                    </li>
                                    <li className="single_field zip-field">
                                        <label>Posta Kodu:</label>
                                        <input type="text" />
                                    </li>
                                </ul>
                                <button className="btn btn-default update" onClick={() => { this.buy() }}>Onayla</button>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="total_area">
                                <ul>
                                    <li>Toplam <span>{this.state.products.totalPrice}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        )
    }
}
