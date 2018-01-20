import React from 'react';
import Notes from './Notes.jsx';

export default class Lane extends React.Component {
  constructor() {
    super();
    this.handleCreateNote = this.handleCreateNote.bind(this);
  }

  handleCreateNote() {
    this.props.onCreateNote(this.props.lane.id);
  }

  render() {
    const lane = this.props.lane;
    const allNotes = this.props.allNotes;
    const laneNotes = lane.notes
        .map(id => allNotes.find(note => note.id === id))
        .filter(note => note);


    return (
        <div className="lane">
          <h2 className="lane__name">
            {lane.name}
            <button className="lane__delete">
              -
            </button>
          </h2>
          <Notes
              notes={laneNotes}
          />
          <button className="add-note" onClick={this.handleCreateNote}>
            + note
          </button>
        </div>
      )
  }
}
