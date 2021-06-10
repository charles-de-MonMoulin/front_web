import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {withRouter} from "react-router-dom";
import {CreatePicture} from "../Action/createPicture";
import {updateUser} from "../Action/updateUser";
import {UpdatePicture} from "../Action/updatePicture";

class ProfilePictureForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data.id,
            username: this.props.data.username,
            email: this.props.data.email,
            first_name: this.props.data.first_name,
            last_name: this.props.data.last_name,
            address: this.props.data.address,
            image: this.props.data.image
        }
    }

    handleUpdate = event => {
        this.setState({
            [event.target.name]: event.target.files[0],
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        let formData = new FormData()
        formData.append('image', this.state.image)
        formData.append('title', this.state.image.name)
        formData.append('slug', 'slug' + Math.round(Math.random() * 10000))
        if (localStorage.getItem('image') === 'null' || localStorage.getItem('image') === 'null') {
            CreatePicture(formData).then(r => {
                console.log(localStorage.getItem('image_actual'))
                localStorage.setItem('image', localStorage.getItem('image_actual'))
                localStorage.setItem('image_url', localStorage.getItem('image_url_actual'))
                this.setState({
                    id: localStorage.getItem('id'),
                    username: localStorage.getItem('username'),
                    email: localStorage.getItem('email'),
                    first_name: localStorage.getItem('first_name'),
                    last_name: localStorage.getItem('last_name'),
                    image: localStorage.getItem('image')
                })
                if (localStorage.getItem('address') !== 'null') {
                    this.setState({
                        address: parseInt(localStorage.getItem('address')),
                    })
                }
                updateUser(this.state)
            })
        } else {
            UpdatePicture(formData).then(r => {
                localStorage.setItem('image', localStorage.getItem('image_actual'))
                localStorage.setItem('image_url', localStorage.getItem('image_url_actual'))
            })
        }
    }

    render() {
        return (
            <form method="post"
                  onSubmit={event => {
                      this.handleSubmit(event)
                  }}>
                <Typography variant="h6" gutterBottom>
                    Profile picture
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="image"
                            name="image"
                            label="Picture"
                            type="file"
                            fullWidth
                            onChange={this.handleUpdate}
                        />
                    </Grid>
                </Grid>
                <Button type="submit"
                        fullWidth
                        variant="contained"
                        color="primary">
                    Update picture
                </Button>
            </form>
        )
    }
}

export default withRouter(ProfilePictureForm)