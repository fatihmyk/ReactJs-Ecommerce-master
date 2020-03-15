import React, { Component } from 'react'
import Header from '../MasterPage/Header'
import Footer from '../MasterPage/Footer'
import Context from './context'

export default class index extends Component {
    render() {
        return (
            <div>
                <Header active="card"/>
                <Context/>
                <Footer/>
            </div>
        )
    }
}
