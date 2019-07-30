import React, { Component } from 'react';
import axios from "axios";
//import { ItemForm } from './item/itemForm';

export class Homepage extends Component {
    constructor() {
        super();
        this.state = {
            data: {}
        };
    }



    componentDidMount() {
        axios
            .get("http://localhost:5000/item/all")
            .then(response => {
                this.setState({
                    data: response.data
                });
                const containerDiv = document.getElementById('random');
                let tableHeading = document.createElement('h2');
                tableHeading.id = "tableHeading";
                tableHeading.innerHTML = "Posts";
                containerDiv.appendChild(tableHeading);
                if (document.contains(document.getElementById("table1"))) {
                    containerDiv.removeChild(document.getElementById("table1"));
                    containerDiv.removeChild(document.getElementById("tableHeading"));
                }
                let container = document.createElement('table');
                container.id = "table1";
                containerDiv.appendChild(container);

                let tableHeadingTitle = document.createElement('th');
                tableHeadingTitle.innerHTML = "Username";
                container.appendChild(tableHeadingTitle);

                let tableHeadingTitle2 = document.createElement('th');
                tableHeadingTitle2.innerHTML = "Content";
                container.appendChild(tableHeadingTitle2);

                let tableHeadingRemovePost = document.createElement('th');
                tableHeadingRemovePost.innerHTML = "Delete";
                container.appendChild(tableHeadingRemovePost);
                let p = this.state.data.length - 1;
                for (let i = p; i > -1; i--) {
                    let myRow = document.createElement('tr');

                    myRow.id = "row" + i;
                    container.appendChild(myRow);

                    let myUsername = document.createElement('td');
                    myUsername.innerHTML = String(this.state.data[i].username);
                    //myUsername.innerHTML = String(this.props.username);
                    myRow.appendChild(myUsername);

                    let myContent = document.createElement('td');
                    myContent.innerHTML = String(this.state.data[i].content);
                    myRow.appendChild(myContent);

                    let myRemovePost = document.createElement('td');
                    myRow.appendChild(myRemovePost);
                    let removePostbtn = document.createElement('input');
                    removePostbtn.type = "button";
                    removePostbtn.className = "btn btn-primary";
                    removePostbtn.value = "Remove Post";
                    let ItemID = this.state.data[i]._id;

                    // removePostbtn.onclick = function () {
                    //     removePost(ID, ItemID);
                    // };
                    myRemovePost.appendChild(removePostbtn);

                }

            });
    };

    render() {
        return (
            <div>
                <div id="random"> </div>

                {/* 
                <UserDetail userName={this.state.name} userLocation={this.state.location} /> */}
            </div>

        );
    }
}
