import * as React from 'react'
import { Dropdown } from 'semantic-ui-react'
import ControlInput from '../components/ControlInput'

interface Props {
  options: Array<any>
  value: number
  changeState: Function
  label: string
  unit: number
  width: number
}

enum Direction {
  Up = 'up',
  Down = 'down'
}

export default class DropdownCC extends React.Component<Props, {}> {
  handleChange = (e: any, { value }: any) => {
    const { changeState, label } = this.props

    changeState(value, label)
  }

  controlInput = (direction: string) => {
    const { value, options, changeState, label, unit } = this.props
    const lowest = options[0].value
    const highest = options[options.length - 1].value
    if (direction === Direction.Up) {
      value + unit <= highest && changeState(value + unit, label)
    } else {
      value - unit >= lowest && changeState(value - unit, label)
    }
  }
  render() {
    const { options, value, width } = this.props
    return (
      <React.Fragment>
        <div className="dropdown" style={{ width: `${width}px` }}>
          <Dropdown
            selection
            search
            compact
            options={options}
            value={Number(value)}
            onChange={this.handleChange}
            fluid
            type="number"
          />
        </div>
        <ControlInput Direction={Direction} onClickIcon={this.controlInput} />
      </React.Fragment>
    )
  }
}
