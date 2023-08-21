import React from 'react'
import "./Main.css"

function Main({ getActiveNote }) {

  if (!getActiveNote)  {
    return <div className='no-active-note'>ノートが選択されていません</div>
  }

  return (
    <div className='app-main'>
      <div className='app-main-note-edit'>
        <input type='text' value={getActiveNote.title} />
        <textarea id='' placeholder='内容の入力' value={getActiveNote.content}></textarea>
      </div>
      <div className='app-main-note-preview'>
       <h1 className='preview-title'>{getActiveNote?.title}</h1>
       <div className='markdown-preview'>{getActiveNote?.content}</div>
      </div>
    </div>
  )
}

export default Main