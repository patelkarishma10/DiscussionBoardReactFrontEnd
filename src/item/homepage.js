import React, { Component } from 'react';
import _ from "lodash";
import {Table} from "reactstrap";


export class Homepage extends Component {

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
                                <td><button class="btn btn-primary">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

        );
    }
}
