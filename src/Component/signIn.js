import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {handleLogin} from "../Action/login";
import {loginError} from "./loginError";
import {withRouter} from 'react-router-dom';
import {getCurrentUser} from "../Action/currentUser";
import {GetImage} from "../Action/getImage";
import {GetAddress} from "../Action/getAddress";
import Typography from "@material-ui/core/Typography";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        localStorage.clear();
        this.state = {
            error: false
        }
    }

    state = {
        username: ``,
        password: ``,
    }

    handleUpdate = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        localStorage.clear()
        handleLogin(this.state).then(r => {
            this.setState(r)
            if (this.state.error === false) {
                getCurrentUser().then(r => {
                    if (localStorage.getItem('image') !== null && localStorage.getItem('image') !== "null") {
                        GetImage(localStorage.getItem('image')).then(r => {
                            localStorage.setItem('image_url', localStorage.getItem('image_url' + localStorage.getItem('image')))
                            if (localStorage.getItem('address') !== null && localStorage.getItem('address') !== "null") {
                                GetAddress(localStorage.getItem('address')).then(r => {
                                    this.props.history.push('/profil')
                                })
                            } else {
                                this.props.history.push('/profil')
                            }
                        })
                    } else if (localStorage.getItem('address') !== null && localStorage.getItem('address') !== "null") {
                        GetAddress(localStorage.getItem('address')).then(r => {
                            this.props.history.push('/profil')
                        })
                    } else {
                        this.props.history.push('/profil')
                    }
                })
            }
        });
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className="paper">
                    <form noValidate method="post"
                          onSubmit={event => {
                              this.handleSubmit(event)
                          }}>
                        <Typography variant="h6" gutterBottom>
                            Connection
                        </Typography>
                        {this.state.error ? loginError() : ''}
                        <TextField variant="outlined"
                                   margin="normal"
                                   required
                                   fullWidth
                                   id="username"
                                   label="Username"
                                   name="username"
                                   autoComplete="username"
                                   onChange={this.handleUpdate}/>
                        <TextField variant="outlined"
                                   margin="normal"
                                   required
                                   fullWidth
                                   name="password"
                                   label="Password"
                                   type="password"
                                   id="password"
                                   autoComplete="current-password"
                                   onChange={this.handleUpdate}/>
                        <Button type="submit"
                                fullWidth
                                variant="contained"
                                color="primary">
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    {"Register"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        )
    }
}

export default withRouter(SignIn)