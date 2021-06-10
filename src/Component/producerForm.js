import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {withRouter} from "react-router-dom";
import {TextField} from "@material-ui/core";

class ProducerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: this.props.data.description,
            first_name: this.props.data.first_name,
            last_name: this.props.data.last_name,
            email: this.props.data.email,
        }
    }

    render() {
        return (
            <form className="form_producer" method="post">
                <Typography variant="h6" gutterBottom>
                    Producer
                </Typography>
                <Grid container className="grid_producer" spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            id="standard-read-only-input"
                            label="First name"
                            defaultValue={this.state.first_name}
                            InputProps={{
                                readOnly: true,
                            }}
                            className="text_field"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="standard-read-only-input"
                            label="Last name"
                            defaultValue={this.state.last_name}
                            InputProps={{
                                readOnly: true,
                            }}
                            className="text_field"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="standard-read-only-input"
                            label="Email"
                            defaultValue={this.state.email}
                            InputProps={{
                                readOnly: true,
                            }}
                            className="text_field"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Description"
                            defaultValue={this.state.description}
                            InputProps={{
                                readOnly: true,
                            }}
                            className="text_field"
                        />
                    </Grid>
                </Grid>
            </form>
        );
    }
}

export default withRouter(ProducerForm)