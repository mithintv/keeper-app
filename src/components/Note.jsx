import React, { useState, useEffect, useRef } from 'react';


function Note(props) {

  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);
  const headerRef = useRef(null);
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = '0px';
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + 35 + "px";
    }
  }, [textAreaRef, content]);

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
      <div>
        <input
          ref={headerRef}
          onChange={updateTitle}
          placeholder='Title'
          value={title}
        />
        <textarea
          ref={textAreaRef}
          onChange={updateNote}
          placeholder='Empty Note'
          value={content}
        />
      </div>
      <div className="button">
        <button onClick={onDelete}><span className="material-symbols-outlined">
          delete
        </span></button>
      </div>

    </div>
  );
}

export default Note;
