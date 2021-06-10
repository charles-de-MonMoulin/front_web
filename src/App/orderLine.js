import React from "react";
import {CssBaseline} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import {withRouter} from "react-router-dom";
import OrderLineForm from "../Component/orderLineForm";
import SideBar from "../Component/SideBar";

class OrderLine extends React.Component {

    render() {
        return (
            <div>
                <div className="sideBar">
                    <SideBar/>
                </div>
                <div className="render-page">
                    <Container component="main" maxWidth="xs">
                        <CssBaseline/>
                            <OrderLineForm data={this.props.location.data}/>
                    </Container>
                </div>
            </div>
        );
    }
}

export default withRouter(OrderLine)