import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import { ReactComponent as ChevronLeft } from "bootstrap-icons/icons/chevron-left.svg";

import SemanticScreen from "ushin-ui-components/dist/components/SemanticScreen";
import { messages } from "ushin-ui-components/dist/reducers/initialState";
import { MessageI } from "./dataModels";

import useLocalStorageState from "./hooks/useLocalStorageState";

function App() {
  const [message, setMessage] = useLocalStorageState(messages[0], "message");

  const [showPanel, setShowPanel] = useState(false);
  const handleShowPanel = () => setShowPanel(true);
  const handleClosePanel = () => setShowPanel(false);

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

      <div
        className="h-100"
        style={{ marginRight: "2rem" }}
      >
        <SemanticScreen
          message={message}
          onMessageChange={(m: MessageI) => {
            setMessage(m);
          }}
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
          <ul>
            <li>Mine</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePanel}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClosePanel}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
