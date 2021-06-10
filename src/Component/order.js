import React from "react";
import {withRouter} from "react-router-dom";
import {ListItem, TextField} from "@material-ui/core";

class Order extends React.Component {
    handleRedirect = event => {
        this.props.history.push({
            pathname: "/order",
            data: {name: this.props.data.name, id:this.props.data.id}
        })
    }

    render() {
        return (
            <div onClick={this.handleRedirect}>
                <ListItem button>
                    <TextField
                        id="standard-read-only-input"
                        label="Name"
                        defaultValue={this.props.data.name}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="standard-read-only-input"
                        label="Creation date"
                        defaultValue={this.props.data.date}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </ListItem>
            </div>
        );
    }
}

export default withRouter(Order)