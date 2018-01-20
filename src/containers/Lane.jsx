import Lane from '../components/Lane.jsx';
import lanesActions from '../actions/lanes';
import { connect } from 'react-redux';
import { DragSource } from 'react-dnd';
import { DropTarget } from 'react-dnd';
import * as itemTypes from '../constants/itemTypes';

const laneSource = {
  beginDrag(props) {
    const item = {
      id: props.lane.id,
    };

    return item;
  },
  isDragging(props, monitor) {
    return props.id === monitor.getItem().id;
  },
};

const laneTarget = {
  hover(targetProps, monitor) {
    const targetId = targetProps.lane.id;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;
    const sourceType = monitor.getItemType();
  },
};

const collectDragSource = (DnDconnect, monitor) => ({
  connectDragSource: DnDconnect.dragSource(),
  connectDragPreview: DnDconnect.dragPreview(),
  isDragging: monitor.isDragging(),
});

const collectDropTarget = DnDconnect => ({
  connectDropTarget: DnDconnect.dropTarget(),
});

const mapStateToProps = state => ({
  allNotes: state.notes,
});

export default connect(mapStateToProps, null)(Lane);
