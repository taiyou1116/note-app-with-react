import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { useState } from 'react'

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
      id: 1,
      title: "ノート",
      content: "内容",
      modDate: Date.now(),
    }
    setNotes([...notes, newNote]);
    // console.log(notes);
  }
  return (
    <div className='App'>
      <Sidebar onAddNote={onAddNote}/>
      <Main />
    </div>
  )
}

export default App
