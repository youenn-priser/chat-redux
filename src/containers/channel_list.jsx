import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectChannel } from "../actions";

class ChannelList extends Component {
  handleClick = (channel) => {
    this.props.selectChannel(channel);
  };
  render() {
    return (
      <div className="channel-list">
        <h1>Redux Channel</h1>
        <ul>
          {this.props.channels.map((channel) => {
            return (
              <li key={channel} onClick={() => this.handleClick(channel)}>
                #{channel}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel }, dispatch);
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
