import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {updateUser} from "../Action/updateUser";
import AddressForm from "./addressForm";
import ProfilePictureForm from "./profilePictureForm";


class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: localStorage.getItem('id'),
            username: localStorage.getItem('username'),
            email: localStorage.getItem('email'),
            first_name: localStorage.getItem('first_name'),
            last_name: localStorage.getItem('last_name'),
            address: localStorage.getItem('address'),
            image: localStorage.getItem('image'),
            city: localStorage.getItem('city'),
            street: localStorage.getItem('street'),
            country: localStorage.getItem('country'),
            location: localStorage.getItem('location'),
            post_code: localStorage.getItem('post_code'),
        }
    }

    handleUpdate = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        updateUser(this.state).then(r => {
            this.setState({
                username: localStorage.getItem('username'),
                email: localStorage.getItem('email'),
                first_name: localStorage.getItem('first_name'),
                last_name: localStorage.getItem('last_name'),
                address: localStorage.getItem('address'),
                image: localStorage.getItem('image'),
            })
        })
    }

    render() {
        return (
            <div>
                <form method="post"
                      onSubmit={event => {
                          this.handleSubmit(event)
                      }}>
                    <Typography variant="h6" gutterBottom>
                        User
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="username"
                                name="username"
                                label="Username"
                                fullWidth
                                autoComplete="username"
                                value={this.state.username}
                                onChange={this.handleUpdate}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                autoComplete="email"
                                value={this.state.email}
                                onChange={this.handleUpdate}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="first_name"
                                name="first_name"
                                label="First name"
                                fullWidth
                                autoComplete="first_name"
                                value={this.state.first_name}
                                onChange={this.handleUpdate}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="last_name"
                                name="last_name"
                                label="Last name"
                                fullWidth
                                autoComplete="last_name"
                                value={this.state.last_name}
                                onChange={this.handleUpdate}
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit"
                            fullWidth
                            variant="contained"
                            color="primary">
                        Update user
                    </Button>
                </form>
                <AddressForm data={this.state}/>
                <ProfilePictureForm data={this.state}/>
            </div>
        )
    }
}

export default UserForm