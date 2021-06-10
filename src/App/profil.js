import {CssBaseline} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import UserForm from "../Component/userForm";
import React from "react";
import SideBar from "../Component/SideBar";


export default function Profil() {
    return (
        <div>
            <div className="sideBar">
                <SideBar/>
            </div>
            <div className="render-page">
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <UserForm/>
                </Container>
            </div>
        </div>
    )
}