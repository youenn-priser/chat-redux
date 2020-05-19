import React, { Component } from "react";
import MessageForm from "./message_form";
import Message from "../components/message";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchMessages } from "../actions";

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  };
  render() {
    return (
      <div className="message-list">
        <span>Channel #{this.props.selectedChannel}</span>
        <hr />
        <div
          className="channel-content"
          ref={(list) => {
            this.list = list;
          }}
        >
          {this.props.messages.map((message) => {
            return <Message key={message.id} message={message} />;
          })}
        </div>
        <MessageForm />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
