import React, { useState } from 'react'
import './App.css'

import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

import Editor from 'react-simple-code-editor'

import useLocalStorageState from './hooks/useLocalStorageState'

function App () {
  const [open, setOpen] = useState(false)
  const [code, setCode] = useLocalStorageState('', 'semscreen')

  return (
    <div className='App'>
      <div className='SemscreenPane'>
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
      </div>
    </div>
  )
}

export default App
