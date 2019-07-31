import React, { Component } from 'react';
import _ from "lodash";
import {Table} from "reactstrap";
import { Item } from './item';


export class Homepage extends Component {

    render() {
        return (
            <div class="formDiv">
                <div id="random"> </div>
                <h2>Discussion Board</h2>
                <Table>
                    <tbody>
                        {_.reverse(this.props.dataSent).map((item) => (
                            <tr>
                                 <td><Item passedFunction={this.props.passedFunction} username={item.username} email={item.email} id={item._id} content={item.content}/></td> 
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

        );
    }
}
