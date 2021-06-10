import React from "react";
import {withRouter} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import OrderLineForm from "./orderLineForm";
import Container from "@material-ui/core/Container";
import SideBar from "./SideBar";
import {CssBaseline} from "@material-ui/core";
import {GetOrderLines} from "../Action/getOrderLines";
import {CreateOrder} from "../Action/createOrder";
import {UpdateOrder} from "../Action/updateOrder";

class OrderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.location.data ? this.props.location.data.name : '',
            id: this.props.location.data ? this.props.location.data.id : null,
            lines: []
        }
        this.updateLines()
    }

    updateLines = () => {
        if (this.state.id) {
            GetOrderLines(this.state.id).then(r => {
                this.setState({lines: JSON.parse(localStorage.getItem('order_lines')).results})
            })
        }
    }

    handleUpdate = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.id === null || this.state.id === "null") {
            CreateOrder({name: this.state.name, client: localStorage.getItem('id')}).then(r => {
                let res = r.response
                this.setState({
                    name: res.name,
                    id: res.id,
                })
                this.props.history.push({
                    pathname: "/orders"
                })
            })
        } else {
            UpdateOrder({name: this.state.name, client: localStorage.getItem('id'), id: this.state.id}).then(r => {
                let res = r.response
                this.setState({
                    name: res.name,
                    id: res.id,
                })
                this.props.history.push({
                    pathname: "/orders"
                })
            })
        }
    }

    addLine = () => {
        if (this.state.id === null || this.state.id === "null") {
            CreateOrder({name: this.state.name, client: localStorage.getItem('id')}).then(r => {
                let res = r.response
                this.setState({
                    id: res.id,
                    name: res.name
                })
                this.updateLines()
                this.props.history.push({
                    pathname: '/order_line',
                    data: {id: this.state.id, name: this.state.name}
                })
            })
        } else {
            this.props.history.push({
                pathname: '/order_line',
                data: {id: this.state.id, name: this.state.name}
            })
        }
    }

    render() {
        return (
            <div>
                <div className="sideBar">
                    <SideBar/>
                </div>
                <div className="render-page">
                    <CssBaseline/>
                    <Container component="main" maxWidth="xs">
                        <form method="post"
                              onSubmit={event => {
                                  this.handleSubmit(event)
                              }}
                              className="list">
                            <Typography variant="h6" gutterBottom>
                                Order
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="name"
                                        name="name"
                                        label="Name"
                                        fullWidth
                                        value={this.state.name}
                                        onChange={this.handleUpdate}
                                    />
                                </Grid>
                            </Grid>
                            <Button fullWidth
                                    color="primary"
                                    variant="contained"
                                    onClick={this.addLine}>
                                Add line
                            </Button>
                            {/*add lignes ici*/}
                            {this.state.lines.map(line => (
                                <OrderLineForm data={line}/>
                            ))}
                            <Button type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary">
                                Update order
                            </Button>
                        </form>
                    </Container>
                </div>
            </div>
        );
    }
}

export default withRouter(OrderForm)