import React, { Component } from 'react';
import _ from "lodash";
import {Table} from "reactstrap";

import axios from "axios";


export class Homepage extends Component {

    makeRequest = (e) => {
        //e.preventDefault();

        let newItem = {
            email: "anemail@email.com",
            _id: this.props.dataSent[0]._id
        }
        console.log(newItem);
        axios
            .delete("http://localhost:5000/item/deleteItem", { data: newItem })
            .then(response => {
                console.log("deleted post")

                this.props.passedFunction();
            });
    };

    render() {
        return (
            <div class="formDiv">
                <div id="random"> </div>
                <Table>
                    <tbody>
                        <tr>
                            <th>Username</th>
                            <th>Content</th>
                            <th>Delete</th>
                        </tr>
                        {_.reverse(this.props.dataSent).map((item) => (
                            <tr>
                                <td>{item.username}</td>
                                <td> {item.content}</td>
                                <td><button class="btn btn-primary" onClick={this.makeRequest}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

        );
    }
}
