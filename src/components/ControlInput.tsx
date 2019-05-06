import * as React from "react";
import { render } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
interface Props {
  Direction: any;
  onClickIcon: Function;
}

export default class ControlInput extends React.Component<Props, {}> {
  render() {
    const { Direction, onClickIcon } = this.props;

    return (
      <div className="control">
        <div
          className="up"
          onClick={e => {
            onClickIcon(Direction.Up);
          }}
        >
          <FontAwesomeIcon icon={faSortUp} size={"lg"} />
        </div>
        <div className="down" onClick={e => onClickIcon(Direction.Down)}>
          <FontAwesomeIcon icon={faSortDown} size={"lg"} />
        </div>
      </div>
    );
  }
}
