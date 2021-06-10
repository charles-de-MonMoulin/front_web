import React from "react";
import ProducerForm from "../Component/producerForm";
import {withRouter} from "react-router-dom";
import {CssBaseline} from "@material-ui/core";
import Products from "../Component/products";
import SideBar from "../Component/SideBar";
import Typography from "@material-ui/core/Typography";

class ProducerDetails extends React.Component {
    render() {
        return (
            <div>
                <div className="sideBar">
                    <SideBar/>
                </div>
                <div className="render-page">
                    <CssBaseline/>
                    <ProducerForm data={this.props.location.state.data}/>
                    <div className="list">
                        <Typography variant="h6" gutterBottom>
                            Article of this producer
                        </Typography>
                        <Products data={this.props.location.state.data}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ProducerDetails)