import classNames from 'classnames'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label
} from 'recharts'

const BarChartComponent = ({
  data,
  width,
  height,
  xDataKey,
  xLabel,
  yDataKey,
  yLabel,
  barDataKey,
  barColor,
  className
}) => {
  return (
    <BarChart
      width={width}
      height={height}
      data={data}
      maxBarSize={36}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barGap={18}
      className={classNames('overflow-x-scroll', className)}
    >
      <CartesianGrid />
      <XAxis dataKey={xDataKey}>
        <Label value={xLabel} offset={0} position='insideBottomRight' />
      </XAxis>
      <YAxis dataKey={yDataKey} label={{ value: yLabel, angle: -90, position: 'left' }} />
      <Tooltip />
      {/* <Legend /> */}
      <Bar dataKey={barDataKey} fill={barColor} radius={[10, 10, 10, 10]} />
    </BarChart>
  )
}

export default BarChartComponent
