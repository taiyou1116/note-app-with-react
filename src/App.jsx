import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { useState } from 'react'
import uuid from "react-uuid"

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "ノート",
      content: "内容",
      modDate: Date.now(),
    }
    setNotes([...notes, newNote]);
  }
  return (
    <div className='App'>
      <Sidebar onAddNote={onAddNote} notes={notes}/>
      <Main />
    </div>
  )
}

export default App
