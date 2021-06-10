import Container from "@material-ui/core/Container";
import {CssBaseline} from "@material-ui/core";
import InscriptionForm from "../Component/inscriptionForm";
import React from "react";

class Inscription extends React.Component {
    render() {
        return (
            <div className="page">
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <InscriptionForm/>
                </Container>
            </div>
        )
    }
}

export default Inscription