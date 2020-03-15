import React from 'react'
import Header from '../MasterPage/Header'
import Footer from '../MasterPage/Footer'
import Content from './context'

class categoryIndex extends React.Component {
    render() {
        return (
            <div>
                <Header active="category"/>
                <Content id={this.props.match.params.id}/>
                <Footer />
            </div>
        )
    }
}

export default categoryIndex;