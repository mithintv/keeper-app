import React, { useState, useEffect, useRef } from 'react';


function Note(props) {

  const textAreaRef = useRef();
  const [content, setContent] = useState(props.content);

  const updateNote = event => {
    setContent(event.target.value);
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = '0px';
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + 1 + "px";
    }
  }, [content]);

  const onDelete = () => {
    props.deleteNote(props.id);
  };

  return (
    <div className="note">
      <div>
        <h1>{props.title}</h1>
        <textarea
          ref={textAreaRef}
          rows={1}
          onChange={updateNote}
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
