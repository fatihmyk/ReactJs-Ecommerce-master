import React, { Component } from 'react'
import Box from "./Box";
import axios from 'axios'
import { API_PRODUCTS } from '../../paths';

export default class contextHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            searchText: '',
            errorMessage: undefined,
            pageNumber: 0,
            totalPages: 0,
            loading: true,
        }
        this.pagination = this.pagination.bind(this);
    }
    componentDidMount() {
        axios.get(API_PRODUCTS)
            .then(res => {
                this.setState({
                    products: res.data.content, pageNumber: res.data.pageable.pageNumber,
                    totalPages: res.data.totalPages, loading: false
                });
            })
    }
    pagination(pageNumber) {
        console.log(pageNumber)
        axios.get(API_PRODUCTS, {
            params: {
                page: pageNumber
            }
        })
            .then(res => {
                this.setState({
                    products: res.data.content, pageNumber: res.data.pageable.pageNumber,
                    totalPages: res.data.totalPages, loading: false
                });
            })
    }

    render() {
        if (this.state.loading) {
            return null;
        }

        let pagination = [];
        for (let i = 0; i < this.state.totalPages; i++) {
            if (this.state.pageNumber === i) {
                pagination.push(<li key={i}  className="page-item active" onClick={() => { this.pagination(i) }}><a href="#" onClick={(e) => { e.preventDefault(); }} className="page-link" >{i + 1}</a></li>);
            } else {
                pagination.push(<li key={i} className="page-item" onClick={() => { this.pagination(i) }}><a href="#" onClick={(e) => { e.preventDefault(); }} className="page-link" >{i + 1}</a></li>);
            }
        }
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 padding-right">
                            <div className="features_items">
                                <h2 className="title text-center">Öne Çıkanlar</h2>
                                {
                                    this.state.products.map(p =>
                                        <Box data={p} />)
                                }
                            </div>
                        </div>

                        <nav aria-label="Page navigation example" style={{float:"right"}}>
                            <ul className="pagination justify-content-end">
                               {pagination}
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        )
    }
}
