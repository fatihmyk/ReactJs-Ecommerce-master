import React from 'react'

class Footer extends React.Component{
    render(){
        return(
      <footer id="footer">
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="single-widget">
                  <h2>Servisler</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li><a href="#">Çevrimiçi Yardım</a></li>
                    <li><a href="#">Bize Ulaşın</a></li>
                    <li><a href="#">Sipariş Takip</a></li>
                    <li><a href="#">Adreslerim</a></li>
                    <li><a href="#">SSS</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="single-widget">
                  <h2>Sözleşmeler</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li><a href="#">Kullanıcı Sözleşmesi</a></li>
                    <li><a href="#">Gizlilik Sözleşmesi</a></li>
                    <li><a href="#">İade Şartları</a></li>
                    <li><a href="#">Faturalandırma</a></li>
                    <li><a href="#">Bilet Sistemi</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="single-widget">
                  <h2>Hakkında</h2>
                  <form action="#" className="searchform">
                    <input type="text" placeholder="Email" />
                    <button type="submit" className="btn btn-default"><i
                      className="fa fa-arrow-circle-o-right"></i></button>
                    <p>Son yeniliklerden <br />haberdar olun...</p>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>
        )
    }
}

export default Footer;