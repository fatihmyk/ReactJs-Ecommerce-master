import React, { Component } from 'react'
import axios from 'axios'

export default class contextHome extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageURL: '',
            price: '',
            desc: '',
            category: '',
            result: '',
            response: false,
            success: false
        }
        //this.handleClick = this.handleClick.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    addProduct() {
        const { imageURL, name, price, desc, category } = this.state;
        const product = { 'imageURL': imageURL, 'name': name, 'price': price, 'desc': desc, 'category': category };
        console.log(product);

        axios.post(`http://localhost:8080/products`, product)
            .then(res => {
                this.setState({ response: true, success: true, result: res.data });

                console.log(res.data);
            }).catch(e => {
                this.setState({ response: true, success: false, result: 'Girdiğiniz değerleri kontrol ediniz.' });
            });
    }

    //handleClick() {
    //this.setState({ count: this.state.count + 1, title: 'Homepage' });
    //}


    render() {
        return (
            <div>
                <div id="contact-page" className="container">
                    <div className="bg">
                        <div style={{ height: 100 }}>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="contact-form">
                                    <h2 className="title text-center">Ürün Ekle</h2>
                                    <div className="status alert alert-success" style={{ display: this.state.response && this.state.success ? 'block' : 'none' }}>{this.state.result}</div>
                                    <div className="status alert alert-danger" style={{ display: this.state.response && this.state.success === false ? 'block' : 'none' }}>{this.state.result}</div>
                                    <div id="main-contact-form" className="contact-form row" name="contact-form">
                                        <div className="form-group col-md-6">
                                            <input type="text" name="name" className="form-control" required="required" placeholder="Ürün İsmi" value={this.state.name}
                                                onChange={(e) => { this.setState({ name: e.target.value }); }} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="text" name="price" className="form-control" required="required" placeholder="Fiyat" value={this.state.price}
                                                onChange={(e) => { this.setState({ price: e.target.value }); }} />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <select type="text" name="imageURL" className="form-control" required="required" placeholder="Resim" value={this.state.imageURL}
                                                onChange={(e) => { this.setState({ imageURL: e.target.value }); }} >
                                                <option value="casper_small">Casper</option>
                                                <option value="huawei_small">Huawei</option>
                                                <option value="samsung_small">Samsung</option>
                                                <option value="hp_small">Hp</option>
                                                <option value="dell_small">Dell</option>
                                                <option value="acer_small">Acer</option>
                                                <option value="eclipse_ile_java_small">Eclipse ile Java</option>
                                                <option value="android_small">Android</option>
                                                <option value="robotik_small">Arduino ile Robotik</option>
                                                <option value="broke_and_light_small">Broke and Light</option>
                                                <option value="kirpilmayi_sevmeyen_koyun_small">Kırpılmayı Sevmeyen Koyun</option>
                                                <option value="bilim_tavsani_sarlot_small">Bilim Tavşanı Şarlot</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <select type="text" name="category" className="form-control" required="required" placeholder="Kategori" value={this.state.category}
                                                onChange={(e) => { this.setState({ category: e.target.value }); }} >
                                                <option value="Telefon">Telefon</option>
                                                <option value="Bilgisayar">Bilgisayar</option>
                                                <option value="Ders Kitapları">Ders Kitapları</option>
                                                <option value="Roman">Roman</option>
                                                <option value="Çizgi Roman">Çizgi Roman</option>
                                                
                                            </select>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <textarea name="desc" id="message" required="required" className="form-control" rows="8" placeholder="Detay" value={this.state.desc}
                                                onChange={(e) => { this.setState({ desc: e.target.value }); }}></textarea>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <button className="btn btn-primary pull-right" onClick={() => { this.addProduct() }}>Ekle</button>
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
