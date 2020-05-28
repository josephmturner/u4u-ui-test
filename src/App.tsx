import React, { useState } from 'react'
import './App.css'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'

import Editor from 'react-simple-code-editor'

import useLocalStorageState from './hooks/useLocalStorageState'

function App () {
  const [showPanel, setShowPanel] = useState(false)
  const [semscreen, setSemscreen] = useLocalStorageState('', 'semscreen')

  const handleShowPanel = () => setShowPanel(true)
  const handleClosePanel = () => setShowPanel(false)

  return (
    <div className='App'>

      <div className='SemscreenPane'>
        <Editor
          highlight={semscreen => semscreen}
          value={semscreen}
          onValueChange={semscreen => setSemscreen(semscreen)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12
          }}
        />
        <Button onClick={handleShowPanel}>Click</Button>
      </div>

      <div className='SemscreenListPane'>
        <Modal size='sm' show={showPanel} onHide={handleClosePanel} dialogClassName='modal-dialog-slideout'>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClosePanel}>
              Close
            </Button>
            <Button variant='primary' onClick={handleClosePanel}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

    </div>
  )
}

export default App
