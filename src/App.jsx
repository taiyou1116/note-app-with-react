import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { useState } from 'react'
import uuid from "react-uuid"

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState();

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "ノート",
      content: "内容",
      modDate: Date.now(),
    }
    setNotes([...notes, newNote]);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNoteArray = notes.map((note) => {
      if(note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    })

    setNotes(updatedNoteArray);
  }

  return (
    <div className='App'>
      <Sidebar 
        onAddNote={onAddNote} 
        deleteNote={deleteNote} 
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}/>
      <Main getActiveNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
    </div>
  )
}

export default App
