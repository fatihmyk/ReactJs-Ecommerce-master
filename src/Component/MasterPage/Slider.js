import React from 'react'

class Slider extends React.Component {
    render() {
        return (
            <section id="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#slider-carousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#slider-carousel" data-slide-to="1"></li>
                                    <li data-target="#slider-carousel" data-slide-to="2"></li>
                                </ol>

                                <div className="carousel-inner">
                                    <div className="item active">
                                        <img src="images/home/slider1.jpg" className="girl img-responsive" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="images/home/slider2.jpg" className="girl img-responsive" alt="" />
                                    </div>

                                    <div className="item">
                                        <img src="images/home/slider3.jpg" className="girl img-responsive" alt="" />
                                    </div>

                                </div>

                                <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
                                    <i className="fa fa-angle-left"></i>
                                </a>
                                <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Slider