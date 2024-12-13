'use client'
import classNames from 'classnames'
import React from 'react'

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'

const CustomReactSelectMap = ({
  className,
  markers = [],
  geoUrl,
  coordinatesRote,
  scale = 1000
}) => {
  return (
    <div className={classNames('relative h-[350px] w-full', className)}>
      <ComposableMap
        className='relative h-[100%] w-full'
        projection='geoAzimuthalEqualArea'
        projectionConfig={{
          rotate: coordinatesRote, // Gira para centrar la provincia deseada
          center: [0, 0], // Opcional: centra sobre el eje
          scale // Ajusta la escala para la vista deseada
        }}
      >
        <Geographies geography={geoUrl} fill='#F7FAFC' stroke='#CC5502' strokeWidth={0.5}>
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { municipality } = geo.properties
                    console.log(`Hovered on ${municipality}`)
                  }}
                  style={{
                    default: {
                      fill: '#F7FAFC',
                      outline: 'none'
                    }
                    // hover: {
                    //   fill: '#CC5502',
                    //   outline: 'none'
                    // },
                    // pressed: {
                    //   fill: '#CC5502',
                    //   outline: 'none'
                    // }
                  }}
                />
              )
            })}
        </Geographies>
        {markers?.map(({ coordinates, orderNumber }, index) => (
          <Marker key={index} coordinates={coordinates}>
            <circle r={15} fill='#cc5502' stroke='#FFF' strokeWidth={2} />
            <text
              textAnchor='middle'
              y={4}
              style={{
                fontFamily: 'system-ui',
                fill: '#fff',
                fontSize: '13px'
              }}
            >
              {orderNumber}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  )
}

export default CustomReactSelectMap
