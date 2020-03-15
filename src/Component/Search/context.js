import React, { Component } from 'react'
import Box from "./Box";
import axios from 'axios'
import {  API_SEARCH } from '../../paths';

export default class contextHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            searchText: '',
            errorMessage: undefined,
            loading: true,
        }
    }
    
    componentDidMount() {
        axios.get(`${API_SEARCH}/${this.props.search}`)
            .then(res => {
                this.setState({
                    products: res.data, loading: false
                });
            })
    }

    render() {
        if (this.state.loading) {
            return null;
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
                   </div>
                </div>
            </section>
        )
    }
}
