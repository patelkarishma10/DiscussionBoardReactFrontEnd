import React, { Component } from 'react';
import _ from "lodash";
import {Table} from "reactstrap";

import axios from "axios";


export class Item extends Component {

    makeRequest = () => {
        //e.preventDefault();

        let newItem = {
            email: "anemail@email.com",
            _id: this.props.id
        }
        axios
            .delete("http://localhost:5000/item/deleteItem", { data: newItem })
            .then(response => {
                console.log("deleted post")

                this.props.passedFunction();
            });
    };

    render() {
        return (
            <div>
                <Table>
                    <tbody>
                            
                            <tr>
                                <td>{this.props.username}</td>
                                <td> {this.props.content}</td>
                                <td><button class="btn btn-primary" onClick={this.makeRequest}>Delete</button></td>
                            </tr>

                    </tbody>
                </Table>
            </div>

        );
    }
}
