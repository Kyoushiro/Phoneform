import React, { Component } from "react";

class Phoneform extends Component {
    constructor(props) {
        super(props);


        this.state = {
            contacts: [{
                name: "",
                phoneNumber: "",
                email: ""
            }]


        };
        const contacts = [{
            name: "name1",
            phoneNumber: "phonenumber",
            email: "email"
        }
        ];


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInputs = this.clearInputs.bind(this);

    }
    // allows text to be written in text fields
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    // stop page from reloading after submitting
    handleSubmit(event) {

        event.preventDefault();
        console.log(this.state.name);

        this.props.addContact(this.state.contacts);
        console.log(this.state.name);
    }
    // Cancel button function, clears all the fields
    clearInputs(event) {
        event.preventDefault();
        //this.nameInput.value = "";
        //this.phoneNumber.value = "";
        //this.email.value = "";
        this.refs.nameInput.value = "";
        this.refs.phoneNumberInput.value = "";
        this.refs.emailInput.value = "";

    }







    render() {
        let { contacts } = this.state

        return (

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
                            onChange={this.handleChange}
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
                            onChange={this.handleChange}
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
                            onChange={this.handleChange}
                            ref="emailInput"
                        />
                    </label>
                    <br />
                    <button onClick={this.clearInputs} > Cancel </button>
                    <button onClick={this.props.addContact}> Add </button>

                </form>

            </div>
        );
    }
}
export default Phoneform;