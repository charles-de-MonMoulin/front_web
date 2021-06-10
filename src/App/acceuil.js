import React from "react";
import {withRouter} from "react-router-dom";
import SideBar from "../Component/SideBar";

class FirstPage extends React.Component {
    render() {
        this.props.history.push("/login")
        return (
            <div>
                <div className="sideBar">
                    <SideBar/>
                </div>
                <div className="render-page">
                    <p>Welcome</p>
                </div>
            </div>
        )
    }
}

export default withRouter(FirstPage)