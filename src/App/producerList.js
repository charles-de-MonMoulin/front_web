import React from "react";
import {List} from "@material-ui/core";
import {GetProducers} from "../Action/getProducers";
import LineProducer from "../Component/lineProducer";
import SideBar from "../Component/SideBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {ArrowBackIos, ArrowForwardIos} from "@material-ui/icons";

class ProducerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            next: '',
            count: 0,
            previous: '',
            producers: []
        }
        GetProducers().then(r => {
            let res = JSON.parse(localStorage.getItem('producers'))
            this.setState({
                next: res.next,
                count: res.count,
                previous: res.previous,
                producers: res.results
            })
        })
    }

    handleSearch = event => {
        GetProducers('http://localhost:8000/user_app/?is_producer=true+search=' + event.target.value).then(r => {
            let res = JSON.parse(localStorage.getItem('producers'))
            this.setState({
                next: res.next,
                count: res.count,
                previous: res.previous,
                producers: res.results
            })
        })
    }

    handleNext = event => {
        if (this.state.next) {
            GetProducers(this.state.next).then(r => {
                let res = JSON.parse(localStorage.getItem('producers'))
                this.setState({
                    next: res.next,
                    count: res.count,
                    previous: res.previous,
                    producers: res.results
                })
            })
        }
    }

    handlePrevious = event => {
        if (this.state.previous) {
            GetProducers(this.state.previous).then(r => {
                let res = JSON.parse(localStorage.getItem('producers'))
                this.setState({
                    next: res.next,
                    count: res.count,
                    previous: res.previous,
                    producers: res.results
                })
            })
        }
    }

    render() {
        return (
            <div>
                <div className="sideBar">
                    <SideBar/>
                </div>
                <div className="render-page">
                    <div className="list">
                        <Typography variant="h6" gutterBottom>
                            List of producers
                        </Typography>
                        <List component="nav" aria-label="producers">
                            {this.state.producers.map(producer => (
                                <LineProducer data={producer}/>
                            ))}
                        </List>
                        <Button onClick={this.handlePrevious}>
                            <ArrowBackIos/>
                        </Button>
                        <Button onClick={this.handleNext}>
                            <ArrowForwardIos/>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProducerList