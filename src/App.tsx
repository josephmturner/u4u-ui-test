import React, { useState } from "react";
import "./App.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import { ReactComponent as ChevronRight } from "bootstrap-icons/icons/chevron-right.svg";

import Editor from "react-simple-code-editor";

import useLocalStorageState from "./hooks/useLocalStorageState";

function App() {
  const [showPanel, setShowPanel] = useState(false);
  const [semscreen, setSemscreen] = useLocalStorageState("{}", "semscreen");

  const handleShowPanel = () => setShowPanel(true);
  const handleClosePanel = () => setShowPanel(false);

  return (
    <div className="App">
      <div className="SemscreenPane position-relative">
        <Editor
          highlight={(semscreen) => semscreen}
          value={semscreen}
          onValueChange={(semscreen) => setSemscreen(semscreen)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            marginLeft: "2rem",
          }}
        />
        <Button
          variant="primary"
          size="sm"
          className="position-absolute h-100 rounded-0"
          style={{ top: 0, left: 0 }}
          onClick={handleShowPanel}
          role="button"
          aria-label="Activate panel"
        >
          <ChevronRight width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" />
        </Button>
      </div>

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
    </div>
  );
}

export default App;
