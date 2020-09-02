import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import { ReactComponent as ChevronRight } from "bootstrap-icons/icons/chevron-right.svg";

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
      <SemscreenPane>
        <button
          style={{ backgroundColor: "white" }}
          onClick={handleShowPanel}
          role="button"
          aria-label="Activate panel"
        >
          <ChevronRight
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-chevron-right"
            fill="#000"
          />
        </button>
        <SemanticScreen
          message={message}
          onMessageChange={(m: MessageI) => {
            setMessage(m);
          }}
        />
      </SemscreenPane>

      <div className="SemscreenListPane">
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
      </div>
    </>
  );
}

const SemscreenPane = styled.div`
  display: flex;
  height: 100%;
`;

export default App;
