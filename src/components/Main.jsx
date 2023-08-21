import React from 'react'
import "./Main.css"

function Main({ getActiveNote }) {
  return (
    <div className='app-main'>
      <div className='app-main-note-edit'>
        <input type='text' />
        <textarea id='' placeholder='内容の入力'></textarea>
      </div>
      <div className='app-main-note-preview'>
       <h1 className='preview-title'>{getActiveNote?.title}</h1>
       <div className='markdown-preview'>{getActiveNote?.content}</div>
      </div>
    </div>
  )
}

export default Main