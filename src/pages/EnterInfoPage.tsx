import * as React from 'react'
import {
  salary,
  salaryOptions,
  workTimeOptions,
  lupineTimeOptions,
  convertTimeToMoney
} from './../data/salary'

import DropdownCC from './../containers/DropdownCC'
export default class EnterInfoPage extends React.Component {
  state = {
    salaryValue: salaryOptions[20].value,
    workTimeValue: 8,
    lupineTimeValue: 60
  }

  changeValue = (value: number, label: string) => {
    console.log(label)
    if (label === 'salaryValue') {
      this.setState({
        salaryValue: value
      })
    } else if (label === 'workTimeValue') {
      this.setState({
        workTimeValue: value
      })
    } else if (label === 'lupineTimeValue') {
      this.setState({
        lupineTimeValue: value
      })
    }
  }
  render() {
    const { salaryValue, workTimeValue, lupineTimeValue } = this.state
    const lupines = convertTimeToMoney(
      salaryValue,
      workTimeValue,
      lupineTimeValue
    )
    return (
      <div>
        <div>EnterInfo Page</div>
        <div className="salary">
          저의 연봉은
          <DropdownCC
            options={salaryOptions}
            value={salaryValue}
            changeState={this.changeValue}
            label="salaryValue"
            unit={100}
            width={100}
          />
          입니다.
        </div>
        <div className="work-time">
          저는 하루에
          <DropdownCC
            options={workTimeOptions}
            value={workTimeValue}
            changeState={this.changeValue}
            label="workTimeValue"
            unit={1}
            width={70}
          />
          시간 일합니다.
        </div>
        <div className="lupine-time">
          저는 하루에
          <DropdownCC
            options={lupineTimeOptions}
            value={lupineTimeValue}
            changeState={this.changeValue}
            label="lupineTimeValue"
            unit={30}
            width={150}
          />
        </div>
        <div>저의 하루 월루 머니는{lupines.lupineMoney}</div>
        <div>저의 한달 월루 머니는{lupines.monthLupine}</div>
      </div>
    )
  }
}
