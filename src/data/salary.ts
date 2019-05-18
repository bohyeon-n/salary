type Dict = {
  [key: number]: number
}
const salary: Dict = {
  1000: 771033,
  1100: 847286,
  1200: 923500,
  1300: 998863,
  1400: 1073736,
  1500: 1148580,
  1600: 1223463,
  1700: 1297826,
  1800: 1372040,
  1900: 1446313,
  2000: 1520566,
  2100: 1594790,
  2200: 1669043,
  2300: 1743296,
  2400: 1817310,
  2500: 1890463,
  2600: 1963596,
  2700: 2036710,
  2800: 2109853,
  2900: 2179916,
  3000: 2248340,
  3100: 2316813,
  3200: 2384896,
  3300: 2451470,
  3400: 2515923,
  3500: 2580346,
  3600: 2656670,
  3700: 2723873,
  3800: 2788286,
  3900: 2852700,
  4000: 2917143,
  4100: 2981576,
  4200: 3045970,
  4300: 3110423,
  4400: 3174863,
  4500: 3239250,
  4600: 3303693,
  4700: 3362136,
  4800: 3425500,
  4900: 3488923,
  5000: 3552316,
  5100: 3615690,
  5200: 3679103,
  5300: 3742506,
  5400: 3805860,
  5500: 3869273,
  5600: 3932666,
  5700: 3993290,
  5800: 4056723,
  5900: 4120116,
  6000: 4183470,
  6100: 4246893,
  6200: 4310286,
  6300: 4373660,
  6400: 4437073,
  6500: 4500476,
  6600: 4562980,
  6700: 4618693,
  6800: 4674376,
  6900: 4730080,
  7000: 4785823,
  7100: 4841546,
  7200: 4869760,
  7300: 4925283,
  7400: 4980786,
  7500: 5036270,
  7600: 5091793,
  7700: 5147306,
  7800: 5202780,
  7900: 5258303,
  8000: 5313816,
  8100: 5369290,
  8200: 5424823,
  8300: 5480326,
  8400: 5535820,
  8500: 5591343,
  8600: 5646836,
  8700: 5702330,
  8800: 5757853,
  8900: 5813366,
  9000: 5868840,
  9100: 5924353,
  9200: 5979866,
  9300: 6035350,
  9400: 6090883,
  9500: 6146386,
  9600: 6201850,
  9700: 6257383,
  9800: 6312886,
  9900: 6368380,
  10000: 6423903,
  10100: 6479406,
  10200: 6534350,
  10300: 6589213,
  10400: 6644076
}

const salaryOptions = Object.keys(salary).map((key, index) => {
  let text = key
  if (Number(key) >= 10000) {
    const million = key.slice(0, 1)
    const remain = Number(key) - Number(million + '0000')
    text = `${million}억 ${remain === 0 ? '' : remain}`
  }

  return {
    key: index,
    text: text,
    value: Number(key)
  }
})

const workTimeOptions: Object[] = new Array(20).fill(0).map((time, index) => ({
  value: index + 1,
  text: index + 1,
  key: index + 1
}))

const convertMinutes = (min: number) => {
  const hour = Math.floor(min / 60)
  const minutes = min % 60
  return `${hour !== 0 ? `${hour}시간` : ''} ${
    minutes !== 0 ? `${minutes}분` : ''
  }`
}

const getLupinTimeOptions: Function = (limitTime: number) => {
  const lupinTimeOptions: Object[] = new Array(Math.ceil(limitTime * 2))
    .fill(0)
    .map((time, index) => {
      const min = (index + 1) * 30
      return {
        value: min,
        text: convertMinutes(min),
        key: min
      }
    })
  return lupinTimeOptions
}
const lupinTimeOptions: Object[] = new Array(20).fill(0).map((time, index) => {
  const min = (index + 1) * 30
  return {
    value: min,
    text: convertMinutes(min),
    key: min
  }
})

const convertTimeToMoney = (
  income: number,
  workTime: number,
  lupinTime: number
) => {
  const dayWage = salary[income] / 22
  const hourlyWage = dayWage / workTime // 시간당 버는 금액
  const lupinMoney = hourlyWage * (lupinTime / 60)
  return {
    lupinMoney: Math.floor(lupinMoney),
    monthlupin: Math.floor(lupinMoney * 22),
    yearlupin: Math.floor(lupinMoney * 22 * 12)
  }
}

export {
  salary,
  salaryOptions,
  workTimeOptions,
  lupinTimeOptions,
  convertTimeToMoney,
  getLupinTimeOptions
}
