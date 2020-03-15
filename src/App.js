import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./Component/Home";
import Card from "./Component/Card";
import Add from "./Component/Add";
import Contact from "./Component/Contact";
import Category from "./Component/Category/index";
import Detail from "./Component/Detail/index";
import Search from "./Component/Search/index";
import ErrorPage from './Component/ErrorPage'
import './App.css';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/card" component={Card} />
				<Route path="/add" component={Add} />
				<Route path="/contact" component={Contact} />
        		<Route path="/category/:id" component={Category} />
				<Route path="/products/:id" component={Detail} />
				<Route path="/search/:title" component={Search} />
				<Route path="*" component={ErrorPage} />
			</Switch>
		</BrowserRouter>
    );
  }
}

export default App;
