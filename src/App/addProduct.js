import React from "react";
import SideBar from "../Component/SideBar";
import ProductForm from "../Component/productForm";
import Container from "@material-ui/core/Container";

class AddProduct extends React.Component {
    render() {
        return (
            <div>
                <div className="sideBar">
                    <SideBar/>
                </div>
                <div className="render-page">
                    <div className="list">
                        <Container component="main" maxWidth="xs">
                            <ProductForm/>
                        </Container>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddProduct