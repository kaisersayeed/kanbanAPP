import React from 'react';

export default class Editable extends React.Component {
  constructor() {
    super();
    this.handleValueClick = this.handleValueClick.bind(this);
    this.handleFinishEdit = this.handleFinishEdit.bind(this);
  }

  // assuming onValueClick & onEdit should be passed from top.

  handleValueClick() {
    this.props.onValueClick(this.props.id);
  }

  handleFinishEdit(e) {
    if (e.type === 'keypress' && e.key !== 'Enter') {
      return;
    }

    const value = e.target.value;

    if (this.props.onEdit && value.trim().length) {
      this.props.onEdit(this.props.id, value);
    }
  }

  renderEdit() {
    return (
      <input
        type="text"
        autoFocus
        className="editing"
        defaultValue={this.props.value}
        onBlur={this.handleFinishEdit}
        onKeyPress={this.handleFinishEdit}
      />
    );
  }

  renderValue() {
    return (
      <span>
        <input
          type="text"
          onClick={this.handleValueClick}
          defaultValue={this.props.value}
          readOnly
        />
      </span>
    );
  }

  render() {
    if (this.props.editing) {
      return this.renderEdit();
    }

    return this.renderValue();
  }
}
