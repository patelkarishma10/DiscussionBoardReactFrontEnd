import React, { Component } from 'react';
import axios from "axios";


export class ItemForm extends Component {
    makeRequest = (e) => {
        e.preventDefault();

        let newItem = {
            username: e.target[0].value,
            email: "anemail@email.com",
            content: e.target[1].value
        }

        axios
            .post("http://localhost:5000/item/createItem", newItem)

            .then(response => {
                console.log("created post")

                this.props.passedFunction();
            });
    };

    render() {

        return (
            <div class="formDiv">
                <form onSubmit={this.makeRequest}>
                    <label for="accUsername" id="accUsernameLabel">Username: </label>
                    <input type="text" id="accUsername" class="form-control" required />
                    <br />

                    <label for="accContent" id="accContentLable">content: </label>
                    <input type="content" id="accContent" class="form-control" required />
                    <br />

                    <input type="submit" class="btn btn-primary" value="create post" />
                </form>
            </div>

        );
    }
}