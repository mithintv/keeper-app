import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "../notes";

function App() {
  const [items, displayArray] = useState(notes);

  const addNote = (note) => {
    displayArray((prevItems) => {
      return [...prevItems, note];
    });
  };

  const updateNote = (index, value) => {
    displayArray(prevItems => {
      prevItems[index] = value;
      return prevItems[index];
    });
  };

  const deleteNote = (id) => {
    displayArray((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="keeper">
      <Header />
      <CreateArea addNote={addNote} />
      <div className="notes">
        {items.map((item, index) => {
          return (
            <Note
              updateNote={updateNote}
              deleteNote={deleteNote}
              key={index}
              id={index}
              title={item.title}
              content={item.content}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
