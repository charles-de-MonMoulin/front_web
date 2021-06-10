import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from "react";
import SearchAppBar from "./Component/navbar";
import Profil from "./App/profil";
import Login from "./App/login";
import Inscription from "./App/inscription";
import FirstPage from "./App/acceuil";
import ProducerList from "./App/producerList";
import ProducerDetails from "./App/producerDetails";
import ProductsListPage from "./App/productsListPage";
import AddProduct from "./App/addProduct";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import OrderForm from "./Component/orderForm";
import OrderList from "./Component/orderList";
import OrderLine from "./App/orderLine";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#216d28'
        }
    }
});

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="App">
                <BrowserRouter>
                    <div className="menu-option">
                        <div>
                            <div className="navBar">
                                {SearchAppBar()}
                            </div>
                        </div>
                        <div className="page-content">
                            <div className="content">
                                <Switch>
                                    <Route exact path="/" component={FirstPage}/>
                                    <Route path="/login" component={Login}/>
                                    <Route path="/profil" component={Profil}/>
                                    <Route path="/register" component={Inscription}/>
                                    <Route path="/producers" component={ProducerList}/>
                                    <Route path="/producer" component={ProducerDetails}/>
                                    <Route path="/products" component={ProductsListPage}/>
                                    <Route path="/product" component={AddProduct}/>
                                    <Route path="/order" component={OrderForm}/>
                                    <Route path="/orders" component={OrderList}/>
                                    <Route path="/order_line" component={OrderLine}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
