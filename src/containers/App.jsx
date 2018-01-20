import React, { PropTypes } from 'react';

import lanesActions from '../actions/lanes';
import { connect } from 'react-redux';
import Lanes from '../components/Lanes.jsx';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class App extends React.Component {
  render() {
    return (
      <div className="react-kanban">
        <h1 className="app-title">Kanban APP</h1>
        <button className="add-lane" onClick={this.props.onCreateLane}>
          + Lane
        </button>
        <Lanes
          lanes={this.props.lanes}
        />
      </div>
    );
  }
}

App.propTypes = {
  lanes: PropTypes.array.isRequired,
  onCreateLane: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  lanes: state.lanes,
});

const mapDispatchToProps = dispatch => ({
  onCreateLane() {
    dispatch(lanesActions.createLane('Active'));
  }
});

export default DragDropContext(HTML5Backend)(connect(mapStateToProps, mapDispatchToProps)(App));
