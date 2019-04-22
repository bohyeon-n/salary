import * as React from "react";
import { salary, salaryOption } from "./../data/salary";

import DropdownCC from "./../containers/DropdownCC";
export default class EnterInfoPage extends React.Component {
  state = {
    salaryValue: salaryOption[20].value
  };

  changeValue = (value: number, label: string) => {
    console.log(label);
    if (label === "salaryValue") {
      this.setState({
        salaryValue: value
      });
    }
  };
  render() {
    const { salaryValue } = this.state;
    return (
      <div>
        <div>EnterInfo Page</div>
        <div className="salary">
          저의 연봉은
          <DropdownCC
            options={salaryOption}
            value={salaryValue}
            changeState={this.changeValue}
            label="salaryValue"
            unit={100}
          />
          입니다.
        </div>
        <div className="work-hour">저는 하루에 몇 시간 일합니다.</div>
      </div>
    );
  }
}
