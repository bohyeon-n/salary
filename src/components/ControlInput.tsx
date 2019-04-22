import * as React from "react";
import { render } from "react-dom";

interface Props {
  Direction: any;
  onClickIcon: Function;
}

export default class ControlInput extends React.Component<Props, {}> {
  render() {
    const { Direction, onClickIcon } = this.props;
    return (
      <span className="control">
        <span className="up" onClick={e => onClickIcon(Direction.Up)}>
          up
        </span>
        <span className="down" onClick={e => onClickIcon(Direction.Down)}>
          down
        </span>
      </span>
    );
  }
}
