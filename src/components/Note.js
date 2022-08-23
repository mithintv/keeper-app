import React, { useState, useRef } from 'react';

import useTextAreaResize from '../hooks/useTextAreaResize';


function Note(props) {

  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);
  const headerRef = useRef(null);
  const textAreaRef = useRef(null);

  useTextAreaResize(headerRef, title, 12);
  useTextAreaResize(textAreaRef, content, 25);

  const updateTitle = event => {
    setTitle(event.target.value);
  };

  const updateNote = event => {
    setContent(event.target.value);
  };

  const onDelete = () => {
    props.deleteNote(props.id);
  };

  return (
    <div className="note">
      <div className='noteBody'>
        <textarea
          className='noteTitle'
          ref={headerRef}
          onChange={updateTitle}
          placeholder='Untitled'
          value={title}
          rows={1}
        />
        <textarea
          className="noteContent"
          ref={textAreaRef}
          onChange={updateNote}
          placeholder='Empty Note'
          value={content}
        />
      </div>
      <div className="buttonWrapper">
        <button onClick={onDelete}><span className="material-symbols-outlined">
          delete
        </span></button>
      </div>

    </div>
  );
}

export default Note;
