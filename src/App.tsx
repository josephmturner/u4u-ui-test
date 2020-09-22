import React, { useEffect, useState } from "react";
import "./App.css";
import MessageList from "./components/MessageList";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import leveljs from "level-js";
import { USHINBase } from "ushin-db";

import { ReactComponent as ChevronLeft } from "bootstrap-icons/icons/chevron-left.svg";

import SemanticScreen from "ushin-ui-components/dist/components/SemanticScreen";
import { messages } from "ushin-ui-components/dist/constants/initialState";
import { MessageI } from "./dataModels";

import useLocalStorageState from "./hooks/useLocalStorageState";

//TODO: need type definitions for db
const searchAllMessages = async (db: any) => {
  try {
    const all = await db.searchMessages();
    return all;
  } catch (e) {
    console.log(e);
  }
};

function App() {
  const leveldown = leveljs;
  const authorURL = "hyper://example";
  const db = new USHINBase({ leveldown, authorURL });
  db.init();

  const addMessage = async (message: MessageI) => {
    try {
      const id = await db.addMessage(message);
      return id;
    } catch (e) {
      console.log(e);
    }
  };

  //  TODO: click on messages in list to getMessage and display it
  //  const getMessage = async (id: string) => {
  //    try {
  //      const message = await db.getMessage(id);
  //      return message;
  //    } catch (e) {
  //      console.log(e);
  //    }
  //  };

  const [message, setMessage] = useLocalStorageState(messages[0], "message");

  const [showPanel, setShowPanel] = useState(false);
  const handleShowPanel = () => setShowPanel(true);
  const handleClosePanel = () => setShowPanel(false);

  //TODO: fix types from messageList when ushin-db returns correctly
  //formatted dates - see github issue
  const [messageList, setMessageList] = useState<any[]>([]);

  //TODO: What is the best way to get the list of message mans points?
  //db.searchMessages doesn't seem to return objects with main or focus attributes
  useEffect(() => {
    const updateList = async () => {
      const msgs = await searchAllMessages(db);
      setMessageList(msgs);
    };
    updateList();
    //TODO: if db is included in deps array, this effect loops
  }, [showPanel]);

  return (
    <>
      <button
        style={{ top: 0, right: 0 }}
        onClick={handleShowPanel}
        aria-label="Activate panel"
        className="btn btn-sm border-left position-absolute h-100 rounded-0"
      >
        <ChevronLeft
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-chevron-left"
          fill="#000"
        />
      </button>

      <div className="h-100" style={{ marginRight: "2rem" }}>
        <SemanticScreen
          message={message}
          onMessageChange={(m: MessageI) => {
            setMessage(m);
          }}
          darkMode={true}
        />
      </div>

      <Modal
        size="sm"
        show={showPanel}
        onHide={handleClosePanel}
        dialogClassName="modal-dialog-slideout"
      >
        <Modal.Header closeButton>
          <Modal.Title>Screens</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MessageList messageList={messageList} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={async () => {
              const id = await addMessage(message);
              console.log("message added with id: " + id);
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
