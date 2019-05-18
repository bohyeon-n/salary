import * as React from 'react'
import {
  salary,
  salaryOptions,
  workTimeOptions,
  lupineTimeOptions,
  convertTimeToMoney
} from './../data/salary'

import DropdownCC from './../containers/DropdownCC'
import { Card } from 'semantic-ui-react'
import { getRandomImage, images } from './../data/imgs'
import coin from './../coin.svg'
export default class EnterInfoPage extends React.Component {
  state = {
    salaryValue: salaryOptions[20].value,
    workTimeValue: 8,
    lupineTimeValue: 60,
    img: ''
  }

  componentDidMount() {
    const image = getRandomImage()
    this.setState({
      img: image
    })
  }
  changeValue = (value: number, label: string) => {
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

  getDisplayCoinNumber = (money: number) => {
    let coinCount
    if (money < 100000) {
      coinCount = 1
    } else {
      coinCount = Math.floor(money / 100000) * 2
    }
    return coinCount
  }

  render() {
    const { salaryValue, workTimeValue, lupineTimeValue } = this.state
    const lupines = convertTimeToMoney(
      salaryValue,
      workTimeValue,
      lupineTimeValue
    )
    return (
      <div className="info">
        {/* {new Array(this.getDisplayCoinNumber(lupines.monthLupine))
          .fill('')
          .map((c: any, index: number) => (
            <div key={index} className={`coin coin-${index}`}>
              <img src={coin} alt="" />
            </div>
          ))} */}
        <div className="info__item">
          <div className="line--1">내 연봉은</div>
          <div className="line--2">
            <DropdownCC
              options={salaryOptions}
              value={salaryValue}
              changeState={this.changeValue}
              label="salaryValue"
              unit={100}
              width={120}
            />
            이다.
          </div>
        </div>
        <div className="info__item">
          <div className="line--1">나는 하루</div>
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
          <div className="line--1">나는 하루</div>
          <div className="line--2">
            <DropdownCC
              options={lupineTimeOptions}
              value={lupineTimeValue}
              changeState={this.changeValue}
              label="lupineTimeValue"
              unit={30}
              width={130}
            />
            월루한다.
          </div>
        </div>
        <div className="info__result">
          <div className="overlay" />
          <div className="gif">
            {this.state.img && <img src={this.state.img} alt="" />}
          </div>
          <div className="result month">
            나는 한달
            <div className="money">
              {lupines.monthLupine.toLocaleString()}
              <span className="unit">원</span>
            </div>
            루팡한다.
          </div>
        </div>
      </div>
    )
  }
}
