import React from 'react'
import CustomChip from '@components/chip'

const chips = [
  {
    label: 'all status',
    color: 'gray',
    variant: 'filled'
  },
  {
    label: 'transporting',
    color: 'blue',
    variant: 'outlined'
  },
  {
    label: 'packaging',
    color: 'orange',
    variant: 'outlined'
  },
  {
    label: 'delivered',
    color: 'green',
    variant: 'outlined'
  },
  {
    label: 'canceled',
    color: 'red',
    variant: 'outlined'
  }
]

const ChipCollection = () => {
  return (
    <div className='flex gap-[10px]'>
      {chips.map(({ label, color, variant }, index) => (
        <CustomChip key={index} label={label} color={color} variant={variant} />
      ))}
    </div>
  )
}

export default ChipCollection
