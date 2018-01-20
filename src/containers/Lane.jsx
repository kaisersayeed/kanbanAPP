import Lane from '../components/Lane.jsx';
import lanesActions from '../actions/lanes';
import notesActions from '../actions/notes';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  allNotes: state.notes,
});

const mapDispatchToProps = dispatch => ({
  onCreateNote(laneId) {
    const newNote = notesActions.createNote('New note');
    dispatch(newNote);
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Lane);
