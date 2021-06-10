import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {UpdateAddress} from "../Action/updateAddress";
import {CreateAddressForUser} from "../Action/createAddressForUser";
import Button from "@material-ui/core/Button";

class AddressForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: this.props.data.city,
            street: this.props.data.street,
            country: this.props.data.country,
            location: this.props.data.location,
            post_code: this.props.data.post_code,
            id: this.props.data.id,
            username: this.props.data.username,
            email: this.props.data.email,
            first_name: this.props.data.first_name,
            last_name: this.props.data.last_name,
            address: this.props.data.address,
        }
    }

    handleUpdate = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.address === 'null') {
            CreateAddressForUser(this.state).then(r => {
                this.setState({
                    address: localStorage.getItem('address'),
                    city: localStorage.getItem('city'),
                    street: localStorage.getItem('street'),
                    country: localStorage.getItem('country'),
                    location: localStorage.getItem('location'),
                    post_code: localStorage.getItem('post_code'),
                })
            });
        } else {
            UpdateAddress(this.state).then(r => {
                this.setState({
                    city: localStorage.getItem('city'),
                    street: localStorage.getItem('street'),
                    country: localStorage.getItem('country'),
                    location: localStorage.getItem('location'),
                    post_code: localStorage.getItem('post_code'),
                })
            })
        }
    }

    render() {
        return (
            <form method="post"
                  onSubmit={event => {
                      this.handleSubmit(event)
                  }}>
                <Typography variant="h6" gutterBottom>
                    Address
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="street"
                            name="street"
                            label="Street"
                            fullWidth
                            autoComplete="street"
                            value={this.state.street}
                            onChange={this.handleUpdate}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="city"
                            value={this.state.city}
                            onChange={this.handleUpdate}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="post_code"
                            name="post_code"
                            label="Zip / Postal code"
                            fullWidth
                            autoComplete="post_code"
                            value={this.state.post_code}
                            onChange={this.handleUpdate}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="location"
                            name="location"
                            label="Location"
                            fullWidth
                            autoComplete="location"
                            value={this.state.location}
                            onChange={this.handleUpdate}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="country"
                            value={this.state.country}
                            onChange={this.handleUpdate}
                        />
                    </Grid>
                </Grid>
                <Button type="submit"
                        fullWidth
                        variant="contained"
                        color="primary">
                    Update address
                </Button>
            </form>
        );
    }
}

export default AddressForm