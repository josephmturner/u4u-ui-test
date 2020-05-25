import React, { useState } from 'react'
import './App.css'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import 'bootstrap/dist/css/bootstrap.min.css'

import Editor from 'react-simple-code-editor'

import useLocalStorageState from './hooks/useLocalStorageState'

function App () {
  const [open, setOpen] = useState(false)
  const [code, setCode] = useLocalStorageState('', 'semscreen')

  return (
    <div className='App'>
      <Row>
        <Collapse in={open} timeout={0}>
          <Col sm='3'>
            <div id='collapse-panel' className='SemscreensPane'>
              <Card>
                <Card.Body>
                  <p>List of Semscreens</p>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Collapse>
        <Col>
          <div className='SemscreenPane'>
            <Card>
              <Card.Body>
                <Editor
                  highlight={code => code}
                  value={code}
                  onValueChange={code => setCode(code)}
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12
                  }}
                />
                <Button
                  size='sm'
                  onClick={() => setOpen(!open)}
                  aria-controls='collapse-panel'
                  aria-expanded={open}
                >
                    Click
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default App
