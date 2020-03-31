import React, { Component } from "react";
import "./contactList.css";


class ContactList extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log("contact list" + this.props.contacts);
        if (this.props.contacts) {


            return (
                <React.Fragment>
                    <h1>ContactList</h1>

                    <ul>
                        {this.props.contacts.map(contact => <li key={contact.phoneNumber} onClick={() => this.props.listOnClick(contact)} style={{ cursor: 'pointer' }}>{contact.name} <br /></li>)}
                    </ul>

                </React.Fragment>



            )
        };

        return (
            <React.Fragment>
                <h1>ContactList</h1>

            </React.Fragment>

        )

    }

}
export default ContactList;