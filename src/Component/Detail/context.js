import React, { Component } from 'react'
import { API_PRODUCTS, API_CARDS, API_COMMENT } from '../../paths';
import axios from 'axios'

export default class contextDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            comment: '',
            product: {},
            comments: [],
            searchText: '',
            result: '',
            errorMessage: undefined,
            loading1: true,
            loading2: true
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleCommentClick = this.handleCommentClick.bind(this);
        this.reflesh = this.reflesh.bind(this);
    }

    handleClick(id) {
        axios.post(`${API_CARDS}/${id}`)
            .then(res => {
                console.log(res.data);
                this.setState({ result: res.data })
            })
    }

    handleCommentClick(id) {

        const { name,comment } = this.state;
        const tempComment = { 'name': name, 'comment': comment};

        axios.post(`${API_COMMENT}/${id}`,tempComment)
            .then(res => {
                console.log(res.data),
                    this.setState({ loading2: true })
                this.reflesh()
            })
    }

    reflesh() {
        axios.get(`${API_COMMENT}/${this.props.id}`)
            .then(res => {
                this.setState({ comments: res.data, loading2: false,name:"",comment:"" });
            })
    }

    componentDidMount() {
        axios.get(`${API_PRODUCTS}/${this.props.id}`)
            .then(res => {
                this.setState({ product: res.data, loading1: false });
            })

        axios.get(`${API_COMMENT}/${this.props.id}`)
            .then(res => {
                this.setState({ comments: res.data, loading2: false });
            })
    }

    render() {
        if (this.state.loading2 || this.state.loading1) {
            return null;
        }
        return (
            <section>
                <div className="container" style={{ paddingLeft: 100, paddingRight: 100 }}>
                    <div className="row">
                        <div style={{ height: 50 }}></div>
                        <div className="col-sm-12 padding-right">
                            <div className="product-details">
                                <div className="col-sm-5">
                                    <div className="view-product">
                                        <img src={`/images/home/${this.state.product.imageURL}.jpg`} alt="" />
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <div className="product-information">
                                        <div className="status alert alert-success" style={{ display: this.state.success ? 'block' : 'none' }}>{this.state.result}</div>
                                        <h2>{this.state.product.name}</h2>
                                        <p>{this.state.product.user.fullName}</p>
                                        <span>
                                            <span>{this.state.product.price}</span>
                                            <button onClick={() => { this.handleClick(this.state.product.id) }} className="btn btn-fefault cart">
                                                <i className="fa fa-shopping-cart"></i>
                                                Sepete ekle
                                </button>
                                        </span>
                                        <p>{this.state.product.desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="category-tab shop-details-tab" style={{ paddingBottom: -20 }}>
                                <div className="col-sm-12">
                                    <ul className="nav nav-tabs">
                                        <li><a href="#reviews"  className="active" data-toggle="tab">Yorumlar ({this.state.comments.length})</a></li>
                                    </ul>
                                </div>
                                <div className="tab-content">
                                   

                                    <div className="tab-pane fade active in" id="reviews" >
                                        <div className="col-sm-12">

                                            {
                                                this.state.comments.map(p =>
                                                    <div>
                                                        <ul>
                                                            <li style={{ marginTop: 10, marginBottom: -20 }}><label><i className="fa fa-user"></i>{p.name}</label></li>
                                                        </ul>
                                                        <p>{p.comment}</p>
                                                    </div>
                                                )
                                            }


                                            <p><b>Yorum yaz</b></p>
                                            <div action="#">
                                                <span>
                                                    <input type="text" placeholder="İsminiz" onChange={(e) => { this.setState({ name: e.target.value }); }} value={this.state.name} />
                                                </span>
                                                <textarea name="" onChange={(e) => { this.setState({ comment: e.target.value }); }} value={this.state.comment} ></textarea>
                                                <button onClick={() => { this.handleCommentClick(this.state.product.id) }} type="button" className="btn btn-default pull-right">
                                                    Gönder
                                                 </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
