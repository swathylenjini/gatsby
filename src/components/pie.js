import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const colors = d3.scaleOrdinal(d3.schemeCategory10)
const format = d3.format('.2f')

const Arc = ({ index, pieData, colors, innerRadius, outerRadius }) => {
  const arcGenerator = d3
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .padRadius(outerRadius)
    .cornerRadius(15)
  const progressArc = pieData =>
    arcGenerator({
      startAngle: pieData.startAngle,
      endAngle: pieData.endAngle,
    })
  return (
    <g key={index} className="arc">
      <path
        className="arc"
        d={progressArc(pieData)}
        fill={colors(index)}
        stroke="white"
      />
      <text
        transform={`translate(${arcGenerator.centroid(pieData)})`}
        textAnchor="middle"
        alignmentBaseline="middle"
        fill="white"
        fontSize="10"
      >
        {pieData.data.label}
      </text>
    </g>
  )
}

const Pie = props => {
  const createPie = d3
    .pie()
    .value(d => d.value)
    .sort(null)
  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius)

  const data = createPie(props.data)

  return (
    <svg width={props.width} height={props.height}>
      <g transform={`translate(${props.outerRadius} ${props.outerRadius})`}>
        {data.map((d, i) => (
          <Arc
            innerRadius={props.innerRadius}
            outerRadius={props.outerRadius}
            key={i}
            index={i}
            pieData={d}
            createArc={createArc}
            colors={colors}
            format={format}
            cornerRadius={15}
          />
        ))}
      </g>
    </svg>
  )
}

export default Pie
