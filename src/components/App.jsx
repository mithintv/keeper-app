import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, displayArray] = useState([]);

  const addNote = (note) => {
    displayArray((prevItems) => {
      return [...prevItems, note];
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
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {items.map((item, index) => {
        return (
          <Note
            deleteNote={deleteNote}
            key={index}
            id={index}
            title={item.title}
            content={item.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
