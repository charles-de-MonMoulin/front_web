import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {withRouter} from "react-router-dom";
import {MenuItem, Select} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {GetProducts} from "../Action/getProducts";
import {CreateOrderLine} from "../Action/createOrderLine";

class OrderLineForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data ? this.props.data.id : null,
            number: this.props.data ? this.props.data.number : '',
            product: this.props.data ? this.props.data.product : '',
            order: this.props.data ? this.props.data.id : '',
            product_list: []
        }
        this.getProducts()
    }

    getProducts = () => {
        GetProducts().then(r => {
            this.setState({
                product_list: JSON.parse(localStorage.getItem('products')).results
            })
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = event => {
        if (this.state.id === null) {
            CreateOrderLine(this.state).then(r => {
                this.props.history.push({
                    pathname: "/order_list",
                    data: {name: this.props.data.name, id: this.state.order}
                })
            })
        }
    }

    render() {
        return (
            <div>
                <form method="post"
                      className="list">
                    <Typography variant="h6" gutterBottom>
                        Order line
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="number"
                                name="number"
                                label="Number"
                                type="number"
                                fullWidth
                                value={this.state.number}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Select
                                labelId="product"
                                id="product"
                                fullWidth
                                value={this.state.product}
                                onChange={this.handleChange}
                            >
                                {/*ajouter les product*/}
                                {this.state.product_list.map(product => (
                                    <MenuItem value={product.id}>{product.name}</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <Button type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={event => (this.handleSubmit(event))}>
                        Update order line
                    </Button>
                </form>
            </div>
        );
    }
}

export default withRouter(OrderLineForm)