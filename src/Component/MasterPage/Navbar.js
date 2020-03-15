import React, { Component } from 'react'
import axios from 'axios';
import {API_CATEGORIES} from '../../paths'
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            searchText: '',
            errorMessage: undefined
        }
    }


    componentDidMount() {
        axios.get(API_CATEGORIES)
          .then(res => {
            this.setState({ categories:res.data });
          })
      }

    render() {
        let {active2}=this.props;
        let home,category,contact=null;

        if(active2==="home"){
           home= (<li><a href="/" className="active">Ana Sayfa</a></li>)
        }else{
            home= (<li><a href="/">Ana Sayfa</a></li>)
        }

        if(active2=="category"){
            category =(
            <li className="dropdown"><a href="#" className="active">Kategori<i className="fa fa-angle-down"></i></a>
            <ul role="menu" className="sub-menu">

                {
                    this.state.categories.filter(p => p.subCategories.length > 0).map(p =>
                        <li key={p.id} role="menu" className="sub-menu">
                            <a href={`/category/${p.id}`}>{p.name}</a>
                            {
                                p.subCategories.filter(p => p.subCategories.length > 0).map(p =>
                                    <ul key={p.id}>
                                        <a href={`/category/${p.id}`}>{p.name}</a>
                                        {
                                            p.subCategories.map(p =>
                                                <ul key={p.id}>
                                                    <a href={`/category/${p.id}`}>{p.name}</a>
                                                </ul>)
                                        }
                                    </ul>)
                            }
                            {
                                p.subCategories.filter(p => p.subCategories.length === 0).map(p =>
                                    <ul key={p.id}>
                                        <a href={`/category/${p.id}`}>{p.name}</a>
                                    </ul>)
                            }
                        </li>
                    )
                }

                {
                    this.state.categories.filter(p => p.subCategories.length == null).map(p =>
                        <li key={p.id}><a href="product-details.html">{p.name}</a></li>)
                }
            </ul>
        </li>
            )
        }else{
            category =(
                <li className="dropdown"><a href="#">Kategori<i className="fa fa-angle-down"></i></a>
                <ul role="menu" className="sub-menu">
    
                    {
                        this.state.categories.filter(p => p.subCategories.length > 0).map(p =>
                            <li key={p.id} role="menu" className="sub-menu">
                                <a href={`/category/${p.id}`}>{p.name}</a>
                                {
                                    p.subCategories.filter(p => p.subCategories.length > 0).map(p =>
                                        <ul key={p.id}>
                                            <a href={`/category/${p.id}`}>{p.name}</a>
                                            {
                                                p.subCategories.map(p =>
                                                    <ul key={p.id}>
                                                        <a href={`/category/${p.id}`}>{p.name}</a>
                                                    </ul>)
                                            }
                                        </ul>)
                                }
                                {
                                    p.subCategories.filter(p => p.subCategories.length === 0).map(p =>
                                        <ul key={p.id}>
                                            <a href={`/category/${p.id}`}>{p.name}</a>
                                        </ul>)
                                }
                            </li>
                        )
                    }
    
                    {
                        this.state.categories.filter(p => p.subCategories.length == null).map(p =>
                            <li key={p.id}><a href="product-details.html">{p.name}</a></li>)
                    }
                </ul>
            </li>
                )
        }

        if(active2==="contact"){
            contact=(<li><a href="/contact" className="active">Bize Ulaşın</a></li>);
        }else{
            contact=(<li><a href="/contact">Bize Ulaşın</a></li>);
        }


        
        return (
            <div className="mainmenu pull-left">
                <ul className="nav navbar-nav collapse navbar-collapse">
                    {home}
                    {category}
                    {contact}
                </ul>
            </div>
        )
    }
}

export default Navbar;