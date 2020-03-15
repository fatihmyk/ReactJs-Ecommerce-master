import React from 'react'
import Header from '../MasterPage/Header'
import Slider from '../MasterPage/Slider'
import Footer from '../MasterPage/Footer'
import Content from './context'

class index extends React.Component {
    render() {
        return (
            <div>
                <Header active="home" />
                <Slider />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default index;