import React, { Component } from "react";
import ContactList from "./components/contactList";
import "./App.css";



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

            contacts: [{
                name: "",
                phoneNumber: "",
                email: ""
            }],
            name: "",
            phoneNumber: "",
            email: "",
            isListItem: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.statusHandler = this.statusHandler.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
        //this.deleteItem = this.deleteItem.bind(this);




    }
    CancelButton(props) {
        return (
            <button onClick={this.clearInputs} > Cancel </button>
        );
    }

    handleSubmit(event) {

        event.preventDefault();
        var phoneRegex = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
        if (this.refs.phoneNumberInput.value.match(phoneRegex)) {
            const obj = { name: this.state.name, phoneNumber: this.state.phoneNumber, email: this.state.email };


            this.setState({

                contacts: [...this.state.contacts, obj]
            });
            this.clearInputs(event);
        }

        else {
            alert("please put better phone number");
        }




    }
    // Update status value
    statusHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    listOnClick(contact) {

        this.refs.nameInput.value = contact.name;
        this.refs.phoneNumberInput.value = contact.phoneNumber;
        this.refs.emailInput.value = contact.email;
        this.setState({
            isListItem: true
        })

    }
    // Cancel button method, clears all the fields
    clearInputs(event) {

        event.preventDefault();
        this.refs.nameInput.value = "";
        this.refs.phoneNumberInput.value = "";
        this.refs.emailInput.value = "";
        this.setState({
            isListItem: false
        })

    }

    deleteItem(event) {
        event.preventDefault();




        this.setState({

            isListItem: false,
            contacts: this.state.contacts.filter(function (contact) {
                return contact !== event.target.value
            })


        });



    }




    render() {


        //let button;

        const isListItem = this.state.isListItem;
        var cancelButton;
        if (!isListItem) {
            cancelButton = <button onClick={this.clearInputs} > Cancel </button>
        } else {
            cancelButton = <button onClick={this.deleteItem.bind(this)} > Delete </button>
        }

        return (


            <React.Fragment>

                <div>
                    <h1> Phonebook </h1>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                        <br />
                            <input
                                name="name"
                                type="text"
                                value={this.state.contacts.name}
                                onChange={this.statusHandler}
                                ref="nameInput"
                            />
                        </label>
                        <br />
                        <label>
                            Phonenumber:
                        <br />
                            <input
                                name="phoneNumber"
                                type="text"
                                value={this.state.contacts.phoneNumber}
                                onChange={this.statusHandler}
                                ref="phoneNumberInput"

                            />
                        </label>
                        <br />
                        <label>
                            Email:
                        <br />
                            <input
                                name="email"
                                type="email"
                                value={this.state.contacts.email}
                                onChange={this.statusHandler}
                                ref="emailInput"
                            />
                        </label>
                        <br />
                        {cancelButton}
                        <input type="submit" value="Add" />

                    </form>

                </div>
                <ContactList
                    contacts={this.state.contacts}
                    listOnClick={this.listOnClick.bind(this)}
                />

            </React.Fragment>
        );
    }
}

export default App;