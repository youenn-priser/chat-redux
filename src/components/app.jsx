import React from "react";
import ChannelList from "../containers/channel_list";
import MessageList from "../containers/message_list";

const App = () => {
  return (
    <div className="app">
      <div className="left-panel">
        <img
          src="../assets/images/bcircle-logo.png"
          alt="logo"
          className="logo"
        />
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
