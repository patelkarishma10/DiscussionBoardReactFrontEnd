import React, { Component } from 'react';
import axios from "axios";

import { Homepage } from './homepage';

export class ItemForm extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            content: ""
        };
    }

    componentDidUpdate = () => {
        axios
            .get("http://localhost:5000/item/all")
            .then(response => {
                this.setState({
                    data: response.data
                });
                //{ this.componentDidMount }


            })
    }

    makeRequest = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:5000/item/createItem", {
                username: document.getElementById("accUsername").value,
                email: document.getElementById("accEmail").value,
                content: document.getElementById("accContent").value
            })

            .then(response => {
                { console.log("created webpage") }
                //componentDidUpdate();
                this.setState({
                    data: response.data
                });
            });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.makeRequest}>
                    <label for="accUsername" id="accUsernameLabel">Username: </label>
                    <input type="text" id="accUsername" class="form-control" name="accUsername" required />
                    <br />
                    <label for="accEmail" id="accEmailLable">Email: </label>
                    <input type="email" id="accEmail" class="form-control" name="accEmail" required />
                    <br />
                    <label for="accContent" id="accContentLable">content: </label>
                    <input type="content" id="accContent" class="form-control" name="accContent" required />
                    <br />

                    <input type="submit" class="btn btn-primary" value="create post" />
                </form>

                <Homepage username={this.state.username}
                    content={this.state.content}
                    email={this.state.email}
                />
            </div>

        );
    }
}