import React, { useState } from 'react'
import './App.css'

import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

import Editor from 'react-simple-code-editor'

import useLocalStorageState from './hooks/useLocalStorageState'

function App () {
  const [panelIsOpen, setPanelIsOpen] = useState(false)
  const [semscreen, setSemscreen] = useLocalStorageState('', 'semscreen')

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
        <Button
          size='sm'
          onClick={() => setPanelIsOpen(!panelIsOpen)}
          aria-controls='collapse-panel'
          aria-expanded={panelIsOpen}
        >
          Click
        </Button>
      </div>
    </div>
  )
}

export default App
