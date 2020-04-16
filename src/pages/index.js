import React from 'react'
import { useDispatch } from 'react-redux'
import { pieDataUpdateAction } from '../redux/pieData/pieActions'
import { usePieData } from '../redux/pieData/usePieData'
import Pie from '../components/pie'

export default () => {
  const dispatch = useDispatch()
  const pieDataValues = usePieData()
  const pieDataUpdateActionFunction = pieDataUpdateAction
  return (
    <>
      <button onClick={() => dispatch(pieDataUpdateActionFunction())}>
        Update Data
      </button>
      <Pie
        data={pieDataValues}
        width={400}
        height={400}
        innerRadius={100}
        outerRadius={200}
        cornerRadius={15}
      />
    </>
  )
}
