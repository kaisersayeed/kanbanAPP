import React from 'react';
import Note from '../containers/Note.jsx';

export default class Notes extends React.Component {
  render() {
    const notes = this.props.notes.map(note =>
      <Note id={note.id} key={note.id}>
        {note.text}
      </Note>
    );

    return (
      <ul className="notes-list">
        {notes}
      </ul>
    );
  }
}