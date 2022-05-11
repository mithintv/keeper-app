import React, { useState } from "react";

function CreateArea(props) {
  const [note, newNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    newNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };

  const handleClick = (event) => {
    props.addNote(note, newNote);
    newNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          value={note.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={note.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
