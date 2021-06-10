import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React from "react";
import Button from "@material-ui/core/Button";
import {CreateUser} from "../Action/createUser";
import {withRouter} from "react-router-dom";
import {Checkbox, FormControlLabel} from "@material-ui/core";
import Link from "@material-ui/core/Link";


class InscriptionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_producer: false,
            confirm: false,
        }
    }

    handleUpdate = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleCheck = event => {
        this.setState({
            [event.target.name]: event.target.checked,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        CreateUser(this.state).then(r => {
            this.props.history.push("/login")
        })
    }

    handleSamePassword = event => {
        if (event.target.value !== this.state.password) {
            this.setState({
                confirm: false
            })
        } else {
            this.setState({
                confirm: true
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
                            onChange={this.handleUpdate}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            fullWidth
                            autoComplete="password"
                            onChange={this.handleUpdate}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="confirm_password"
                            name="confirm_password"
                            label="Confirm password"
                            type="password"
                            fullWidth
                            autoComplete="confirm_password"
                            onChange={this.handleSamePassword}
                        />
                        {this.state.confirm === false ? <div className="text-danger">Password don't match</div> : ''}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="email"
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
                            onChange={this.handleUpdate}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel control={<Checkbox
                            color="primary"
                            id="is_producer"
                            name="is_producer"
                            label="Producer?"
                            value={this.state.is_producer}
                            onChange={this.handleCheck}
                        />} label="Producer"/>
                    </Grid>
                </Grid>
                <Button type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={!this.state.confirm}>
                    Sign Up
                </Button>
                <Grid container>
                    <Grid item>
                        <Link href="/login" variant="body2">
                            {"Sign in"}
                        </Link>
                    </Grid>
                </Grid>
            </form>
        )
    }
}

export default withRouter(InscriptionForm)