import React from "react";
import {withRouter} from "react-router-dom";
import {List} from "@material-ui/core";
import {GetProducts} from "../Action/getProducts";
import LineProduct from "./lineProduct";
import Button from "@material-ui/core/Button";
import {ArrowBackIos, ArrowForwardIos} from "@material-ui/icons";

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            next: '',
            count: 0,
            previous: '',
            products: []
        }
        let id = this.props.data !== undefined ? this.props.data.id : localStorage.getItem('id');
        GetProducts(id).then(r => {
            let res = JSON.parse(localStorage.getItem('products'))
            this.setState({
                next: res.next,
                count: res.count,
                previous: res.previous,
                products: res.results
            })
        })
    }

    handleNext = event => {
        if (this.state.next) {
            let id = this.props.data !== undefined ? this.props.data.id : localStorage.getItem('id');
            GetProducts(id, this.state.next).then(r => {
                let res = JSON.parse(localStorage.getItem('products'))
                this.setState({
                    next: res.next,
                    count: res.count,
                    previous: res.previous,
                    products: res.results
                })
            })
        }
    }

    handlePrevious = event => {
        if (this.state.previous) {
            let id = this.props.data !== undefined ? this.props.data.id : localStorage.getItem('id');
            GetProducts(id, this.state.previous).then(r => {
                let res = JSON.parse(localStorage.getItem('products'))
                this.setState({
                    next: res.next,
                    count: res.count,
                    previous: res.previous,
                    products: res.results
                })
            })
        }
    }

    render() {
        return (
            <div>
                {/*<TextField id="filled-basic" label="Search" variant="filled" onChange={this.handleSearch}/>*/}
                <List component="nav" aria-label="products">
                    {this.state.products.map(product => (
                        <LineProduct data={product}/>
                    ))}
                </List>
                <Button onClick={this.handlePrevious}>
                    <ArrowBackIos/>
                </Button>
                <Button onClick={this.handleNext}>
                    <ArrowForwardIos/>
                </Button>
            </div>
        );
    }
}

export default withRouter(Products)