import React from "react";
import {ListItem, TextField} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import {GetImage} from "../Action/getImage";

class LineProducer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: null
        }
        if (this.props.data.image !== null) {
            GetImage(this.props.data.image).then(r => {
                this.setState({
                    url: localStorage.getItem('image_url' + this.props.data.image)
                })
            })
        }
    }

    handleClick = event => {
        this.props.history.push({
            pathname: '/producer',
            state: {data: this.props.data}
        })
    }

    render() {
        return (
            <div className="product">
                <ListItem button onClick={this.handleClick}>
                    <div className="image_product_div">
                        {this.state.url ? <img alt="" className="image_product" src={this.state.url}/> : ''}
                    </div>
                    <div className="producer_name">
                        <TextField
                            id="standard-read-only-input"
                            label="First name"
                            defaultValue={this.props.data.first_name}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                    <div className="producer_name">
                        <TextField
                            id="standard-read-only-input"
                            label="Last name"
                            defaultValue={this.props.data.last_name}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                </ListItem>
            </div>
        );
    }
}

export default withRouter(LineProducer)