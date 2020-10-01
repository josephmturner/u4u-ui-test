import React from "react";

const MessageList = (props: {
  //TODO: fix types
  messageList: any[];
}) => {
  if (!props.messageList) return <span>No Messages!</span>;
  console.log(props.messageList.map(m => Object.values(m.points).flat()));
 console.log("focus._id " + props.messageList.map(m => m.focus._id));
 //  console.log(props.messageList.map(m => Object.values(m.points).flat().filter(p => p._id === m.main).map(p => p)));
 //  return <ul>{props.messageList.map((m) => `<li>${m.focus._id}</li>`)}</ul>;
  const list = props.messageList.map(m => 
  <li>{m.focus._id}</li>
  );
 return <ul>{list}</ul>
};

export default MessageList;
