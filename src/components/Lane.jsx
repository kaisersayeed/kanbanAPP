import React from 'react';

export default class Lane extends React.Component {
  constructor() {
    super();
  }

  render() {
    const lane = this.props.lane;

    return (
        <div className="lane">
          <h2 className="lane__name">
            {lane.name}
          </h2>
        </div>
      )
  }
}
