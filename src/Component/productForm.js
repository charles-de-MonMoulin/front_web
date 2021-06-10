import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {CreatePicture} from "../Action/createPicture";
import {CreateProduct} from "../Action/createProduct";
import {withRouter} from "react-router-dom";

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            name: '',
            image: null,
            producer: localStorage.getItem('id')
        }
    }

    handleUpdate = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleUpdateFile = event => {
        this.setState({
            [event.target.name]: event.target.files[0],
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.image !== null) {
            let formData = new FormData()
            formData.append('image', this.state.image)
            formData.append('title', this.state.image.name)
            formData.append('slug', 'slug' + Math.round(Math.random() * 10000))
            CreatePicture(formData).then(r => {
                this.setState({
                    image: localStorage.getItem('image_actual'),
                })
                let formData2 = new FormData()
                if (this.state.image !== null) {
                    formData2.append('image', this.state.image)
                }
                formData2.append('name', this.state.name)
                formData2.append('description', this.state.description)
                formData2.append('producer', localStorage.getItem('id'))
                CreateProduct(formData2).then(r => {
                    this.props.history.push('/products')
                })
            })
        } else {
            let formData2 = new FormData()
            formData2.append('name', this.state.name)
            formData2.append('description', this.state.description)
            formData2.append('producer', localStorage.getItem('id'))
            CreateProduct(formData2).then(r => {
                this.props.history.push('/products')
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
                    Product
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="name"
                            name="name"
                            label="Name"
                            fullWidth
                            value={this.state.name}
                            onChange={this.handleUpdate}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="description"
                            name="description"
                            label="Description"
                            fullWidth
                            value={this.state.description}
                            onChange={this.handleUpdate}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="image"
                            name="image"
                            label="Picture"
                            type="file"
                            fullWidth
                            onChange={this.handleUpdateFile}
                        />
                    </Grid>
                </Grid>
                <Button type="submit"
                        fullWidth
                        variant="contained"
                        color="primary">
                    Add product
                </Button>
            </form>
        );
    }
}

export default withRouter(ProductForm)