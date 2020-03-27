import React, { Component } from "react";
import Phoneform from "./components/phoneform";
import ContactList from "./components/contactList";

const contacts = [
    {
        name: "name",
        phoneNumber: "fsdfds",
        email: "oskari.ilkka@hotmail.com"
    }
]



class App extends Component {

    addContact = (event) => {
        console.log(event);
        let newContact = {
            name: event.target.value,
            phoneNumber: event,
            email: event
        }

        this.setState({
            contacts: [...contacts, newContact]

        })
        console.log(this.state.contacts);
    }


    render() {
        return (
            <React.Fragment>

                <Phoneform
                    addContact={this.addContact}

                />
                <ContactList
                    contacts={contacts}
                />
            </React.Fragment>
        );
    }
}

export default App;