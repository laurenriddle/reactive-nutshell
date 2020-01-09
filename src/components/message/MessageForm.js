import React, { Component } from "react"
import { createDateTimeToISO } from "../../modules/Utilities"
import APIManager from "../../modules/APIManager"
import "./Message.css"
import { Form, Button } from 'react-bootstrap';

class MessageForm extends Component {

    state = {
        message: ""
    }

    createNewMessage = async evt => {
        evt.preventDefault()

        if (this.state.message === "") {
            window.alert("Please enter a message")
        } else {
            const newMessage = {
                    "userId": Number(localStorage.getItem("userId")),
                    "message": this.state.message,
                    "timestamp": createDateTimeToISO()
            }

            const messagePosted = await APIManager.post("messages", newMessage)
            await this.props.updateMessageArray(messagePosted)
            this.setState({
                message: ""
            })
        }
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    render() {
        return (
            <Form id="newMessageForm" className="sticky">
                <label>New Message</label>
                <textarea className="form-control" onChange={this.handleFieldChange} required
                    id="message" value={this.state.message}></textarea>
                <Button className="messageFormButton" onClick={this.createNewMessage}>Submit</Button>
            </Form>
        )}

}

export default MessageForm