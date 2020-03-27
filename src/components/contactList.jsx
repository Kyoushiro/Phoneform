import React, { Component } from "react";
import Phoneform from "./phoneform";


class ContactList extends Component {
    constructor(props) {
        super(props);
        console.log("props:" + this.props.items);



    }

    contactList(props) {
        return (
            <div>
                {props.contacts.map(c => <Phoneform name={c.name} phoneNumber={c.phoneNumber} email={c.email} />)}

            </div>
        )
    }




    render() {
        var content;



        if (this.props.listItems && this.props.listItems.length > 0) {
            var listItems = this.props.contacts.map(function (item) {
                return (<li>{item}</li>)
            });
            content = <ul>{listItems}</ul>

        }
        else {
            content = <p>No items matching this</p>;
        }
        return (
            <React.Fragment>
                <h1>ContactList</h1>



            </React.Fragment>



        );
    }

}
export default ContactList;