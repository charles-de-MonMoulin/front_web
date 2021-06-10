import React from "react";
import Products from "../Component/products";
import {withRouter} from "react-router-dom";
import Button from "@material-ui/core/Button";
import SideBar from "../Component/SideBar";

class ProductsListPage extends React.Component {

    handleRedirect = event => {
        this.props.history.push({
            pathname: '/product'
        })
    }

    render() {
        return (
            <div>
                <div className="sideBar">
                    <SideBar/>
                </div>
                <div className="render-page">
                    <div className="list">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleRedirect}
                            className="button_add">
                            Add product
                        </Button>
                        <Products/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ProductsListPage)