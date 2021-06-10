import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {NavLink, withRouter} from "react-router-dom";
import React from "react";
import {AccountCircle, Apple, ExitToApp, ShoppingBasket, Storefront} from "@material-ui/icons";

class SideBar extends React.Component {

    render() {
        let url = localStorage.getItem('image_url')
        return (
            <div className="sidebar">
                <img alt="" className="image_bar" src={url}/>
                <List component="nav" aria-label="main mailbox folders">
                    <NavLink className="active side-text" to="/profil">
                        <ListItem button>
                            <ListItemIcon>
                                <AccountCircle/>
                            </ListItemIcon>
                            <ListItemText primary="Profile"/>
                        </ListItem>
                    </NavLink>
                    <NavLink className="active side-text" to="/producers">
                        <ListItem button>
                            <ListItemIcon>
                                <Storefront/>
                            </ListItemIcon>
                            <ListItemText primary="Producer list"/>
                        </ListItem>
                    </NavLink>
                    {localStorage.getItem("is_producer") === "true" || localStorage.getItem("is_producer") === true ?
                        <NavLink className="active side-text" to="/products">
                            <ListItem button>
                                <ListItemIcon>
                                    <Apple/>
                                </ListItemIcon>
                                <ListItemText primary="Product list"/>
                            </ListItem>
                        </NavLink> : ''
                    }
                    {localStorage.getItem("is_producer") === "false" || localStorage.getItem("is_producer") === false ?
                        <NavLink className="active side-text" to="/orders">
                            <ListItem button>
                                <ListItemIcon>
                                    <ShoppingBasket/>
                                </ListItemIcon>
                                <ListItemText primary="Order list"/>
                            </ListItem>
                        </NavLink> : ''
                    }
                    <NavLink className="active side-text" to="/login">
                        <ListItem button>
                            <ListItemIcon>
                                <ExitToApp/>
                            </ListItemIcon>
                            <ListItemText primary="Logout"/>
                        </ListItem>
                    </NavLink>
                </List>
            </div>
        );
    }
}

export default withRouter(SideBar)