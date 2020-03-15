import React, { Component } from 'react'
import Footer from '../MasterPage/Footer';
import Header from '../MasterPage/Header';
import Context from './context'

export default class Detail extends Component {
    render() {
        return (
            <div>
                <Header active=""/>
                <Context id={this.props.match.params.id}/>
                <Footer/>
            </div>
        )
    }
}
