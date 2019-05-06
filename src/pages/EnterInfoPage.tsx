import * as React from "react";
import {
  salary,
  salaryOptions,
  workTimeOptions,
  lupineTimeOptions,
  convertTimeToMoney
} from "./../data/salary";

import DropdownCC from "./../containers/DropdownCC";
import { Card } from "semantic-ui-react";
export default class EnterInfoPage extends React.Component {
  state = {
    salaryValue: salaryOptions[20].value,
    workTimeValue: 8,
    lupineTimeValue: 60
  };

  changeValue = (value: number, label: string) => {
    console.log(label);
    if (label === "salaryValue") {
      this.setState({
        salaryValue: value
      });
    } else if (label === "workTimeValue") {
      this.setState({
        workTimeValue: value
      });
    } else if (label === "lupineTimeValue") {
      this.setState({
        lupineTimeValue: value
      });
    }
  };
  render() {
    const { salaryValue, workTimeValue, lupineTimeValue } = this.state;
    const lupines = convertTimeToMoney(
      salaryValue,
      workTimeValue,
      lupineTimeValue
    );
    return (
      <div className="info">
        <div className="info__item">
          <div className="line--1">내 연봉은</div>
          <div className="line--2">
            <DropdownCC
              options={salaryOptions}
              value={salaryValue}
              changeState={this.changeValue}
              label="salaryValue"
              unit={100}
              width={100}
            />
            이다.
          </div>
        </div>
        <div className="info__item">
          <div className="line--1">나는 하루에</div>
          <div className="line--2">
            <DropdownCC
              options={workTimeOptions}
              value={workTimeValue}
              changeState={this.changeValue}
              label="workTimeValue"
              unit={1}
              width={70}
            />
            시간 일한다.
          </div>
        </div>
        <div className="info__item">
          <div className="line--1">나는 하루에</div>
          <div className="line--2">
            <DropdownCC
              options={lupineTimeOptions}
              value={lupineTimeValue}
              changeState={this.changeValue}
              label="lupineTimeValue"
              unit={30}
              width={150}
            />
            월루한다.
          </div>
        </div>

        <div className="info__result">
          <div className="result day">
            나는 하루
            <div className="money">{lupines.lupineMoney.toLocaleString()}</div>
            원 루팡한다.
          </div>
          <div className="result month">
            나는 한달
            <div className="money">{lupines.monthLupine.toLocaleString()}</div>
            원 루팡한다.
          </div>
        </div>
      </div>
    );
  }
}
