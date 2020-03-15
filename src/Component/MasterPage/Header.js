import React from 'react'
import Navbar from './Navbar'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.enterPressed = this.enterPressed.bind(this);
  }

  
  enterPressed(event) {
    var code = event.keyCode || event.which;
    if (code === 13) {
      window.location = `/search/${event.target.value}`
    }
  }

  render() {
    let active3 = this.props.active;
    let addbuton,card=null;

    if(active3==="add"){
      addbuton=(<li><a href="/add" className="active"><i className="fa fa-plus-square"></i> Ürün Ekle</a></li>)
    }else{
      addbuton=(<li><a href="/add"><i className="fa fa-plus-square"></i> Ürün Ekle</a></li>)
    }

    if(active3==="card"){
      card=(<li><a href="/card" className="active"><i className="fa fa-shopping-cart"></i> Sepet</a></li>)
    }else{
      card=(<li><a href="/card"><i className="fa fa-shopping-cart"></i> Sepet</a></li>)
    }


    return (
      <header id="header">
        <div className="header-middle">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="logo pull-left">
                  <a href="/"><img src="images/home/logo.png" alt="" /></a>
                </div>

              </div>
              <div className="col-sm-8">
                <div className="shop-menu pull-right">
                  <ul className="nav navbar-nav">
                    {addbuton}
                    {card}

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-9" style={{ paddingTop: 5 }}>
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse"
                    data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <Navbar active2={this.props.active} />
              </div>

              <div className="col-sm-3">
                <div className="search_box pull-right">
                  <input type="text"
                    placeholder='Search'
                    onChange={(e) => { this.setState({ search: e.target.value }) }}
                    value={this.state.search}
                    onKeyPress={this.enterPressed.bind(this)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header