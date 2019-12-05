import React, { Component } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import "./Friend.css";

class FriendCard extends Component {
  state = {
    loadingStatus: true
  };
  componentDidMount() {
    this.setState({ loadingStatus: false });
  }
  render() {
    return (
      <ListGroup.Item>
        <Card className="friend">
          <Card.Body className="friend__content">
            <Card.Text className="friend__name">
              Name: {this.props.friend.fullName}
            </Card.Text>
            <Card.Text className="friend__email">
              Email: {this.props.friend.email}
            </Card.Text>
          </Card.Body>
          <Button
            disabled={this.state.loadingStatus}
            type="button"
            className="btn-primary"
            onClick={() => this.props.deleteFriend(this.props.friend.id)}
            style={{ fontSize: ".8em" }}>
            Remove Friend
          </Button>
        </Card>
      </ListGroup.Item>
    );
  }
}

export default FriendCard;
