import React from "react";

const MessageList = (props: {
  //TODO: fix types
  messageList: any[];
}) => {
  if (!props.messageList) return <span>No Messages!</span>;
  return <ul>{props.messageList.map((m) => `<li>${Object.keys(m)}</li>`)}</ul>;
};

export default MessageList;
