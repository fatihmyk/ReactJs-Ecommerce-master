import React, { Component } from 'react'
import Box from "./Box";
import axios from 'axios'
import { API_CATEGORIES } from '../../paths';

export default class contextCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            searchText: '',
            errorMessage: undefined
        }
    }

    componentDidMount() {
        axios.get(`${API_CATEGORIES}/${this.props.id}/products`)
          .then(res => {
            this.setState({ products:res.data });
            console.log(res.data)
          })
      }

    render() {
        return (
            <section>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 padding-right">
                        <div className="features_items">
                            <h2 className="title text-center">Features Itemss{this.props.id2}</h2>
                            {
                                this.state.products.map(p=>
                                    <Box key={p.id }data={p}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
