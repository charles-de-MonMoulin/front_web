import React from "react";
import {ListItem, ListItemText, TextField} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import {GetImage} from "../Action/getImage";

class LineProduct extends React.Component {
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
        // this.props.history.push({
        //     pathname: '/product',
        //     state: {data: this.props.data}
        // })
    }

    render() {
        return (
            <div className="product">
                <ListItem button>
                    <div className="image_product_div">
                        {this.state.url ? <img alt="" className="image_product" src={this.state.url}/> : ''}
                    </div>
                    <ListItemText className="label_product" primary={this.props.data.name} onClick={this.handleClick}/>
                    {/*<div className="product_description">Description: {this.props.data.description}</div>*/}
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        defaultValue={this.props.data.description}
                        variant="outlined"
                        className="product_description"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </ListItem>
            </div>
        );
    }
}

export default withRouter(LineProduct)