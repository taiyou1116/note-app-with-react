import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { useEffect, useState } from 'react'
import uuid from "react-uuid"

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [activeNote, setActiveNote] = useState();
  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  useEffect(() => {
    setActiveNote(notes[0]?.id);
  }, [])

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "",
      content: "",
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
