import React, { useState } from 'react'
import CustomDatePicker from '@components/date-picker'
import classNames from 'classnames'

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  return (
    <div
      className={classNames(
        'relative flex flex-row items-start justify-start gap-[10px]',
        'rounded-[4px] px-[12px] bg-white-100 border-[1px] border-solid border-white-300'
      )}
    >
      <CustomDatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat='dd/MM/yyyy'
        placeholderText='Inicio'
      />
      <div className='relative block h-[32px] w-[1px] bg-white-300' />
      <CustomDatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat='dd/MM/yyyy'
        placeholderText='Fin'
        showIcon
      />
    </div>
  )
}

export default DateRangePicker
