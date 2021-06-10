import React from "react";
import {GetOrders} from "../Action/getOrders";
import Order from "./order";
import {withRouter} from "react-router-dom";
import SideBar from "./SideBar";
import Button from "@material-ui/core/Button";
import {ArrowBackIos, ArrowForwardIos} from "@material-ui/icons";
import {List} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

class OrderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: '',
            next: '',
            previous: '',
            orders: []
        }
        GetOrders(localStorage.getItem('id')).then(r => {
            let res = JSON.parse(localStorage.getItem('orders'))
            this.setState({
                count: res.count,
                next: res.next,
                previous: res.previous,
                orders: res.results
            })
        })
    }

    handlePrevious = event => {

    }

    handleNext = event => {

    }

    handleRedirect = event => {
        this.props.history.push('/order')
    }

    render() {
        return (
            <div>
                <div className="sideBar">
                    <SideBar/>
                </div>
                <div className="render-page">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleRedirect}
                        className="button_add">
                        New order
                    </Button>
                    <Typography variant="h6" gutterBottom>
                        List of order
                    </Typography>
                    <List component="nav" aria-label="orders">
                        {this.state.orders.map(order => (
                            <Order data={order}/>
                        ))}
                    </List>
                    <Button onClick={this.handlePrevious}>
                        <ArrowBackIos/>
                    </Button>
                    <Button onClick={this.handleNext}>
                        <ArrowForwardIos/>
                    </Button>
                </div>
            </div>
        );
    }
}

export default withRouter(OrderList)