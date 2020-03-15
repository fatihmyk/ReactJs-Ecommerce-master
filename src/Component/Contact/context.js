import React, { Component } from 'react'
export default class contextHome extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            result: 'Bizimle iletişime geçtiğiniz için teşekkürler.',
            sended: false
        }
        //this.handleClick = this.handleClick.bind(this);
        this.showMessage = this.showMessage.bind(this);
    }

    showMessage() {
        this.setState({ sended: true });
    }

    render() {
        return (
            <div>
                <div id="contact-page" className="container">
                    <div className="bg">
                        <div style={{ height: 100 }}>
                        </div>
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="contact-form">
                                    <h2 className="title text-center">Bize Ulaşın</h2>
                                    <div className="status alert alert-success" style={{ display: this.state.sended ? 'block' : 'none' }}>{this.state.result}</div>
                                    <div className="status alert alert-danger" style={{ display: 'none' }}>{this.state.result}</div>
                                    <div id="main-contact-form" className="contact-form row" name="contact-form">
                                        <div className="form-group col-md-6">
                                            <input type="text" name="name" className="form-control" required="required" placeholder="Ad Soyad" value={this.state.name}
                                                onChange={(e) => { this.setState({ name: e.target.value }); }} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="email" name="email" className="form-control" required="required" placeholder="Email" value={this.state.email}
                                                onChange={(e) => { this.setState({ email: e.target.value }); }} />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <textarea name="message" id="message" required="required" className="form-control" rows="8" placeholder="Mesajınız" value={this.state.message}
                                                onChange={(e) => { this.setState({ message: e.target.value }); }}></textarea>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <button className="btn btn-primary pull-right" onClick={() => { this.showMessage() }}>Gönder</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
