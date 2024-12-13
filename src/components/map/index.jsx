'use client'

import React, { useEffect, useMemo, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
// import axios from 'axios'
import L, { Icon } from 'leaflet'
import CustomButton from '@components/button'
import { useStore } from '@hooks/store'
import { useOrdersModal } from '@hooks/use-orders-modal'

// Asegúrate de que los iconos de los marcadores se muestren correctamente
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

/**
 * Metodo que se encarga de recentrar el marcador si hay un cambio brusco
 * de direccion mediante la seleccion de una posicion
 * **/

/**
 * Variantes de mapas
 * OpenStreetMap
 <TileLayer
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
/>
 * Mapbox
<TileLayer
  url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=YOUR_MAPBOX_ACCESS_TOKEN"
  attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
  id="mapbox/streets-v11"
/>
* Stamen Maps
<TileLayer
  url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
  attribution='&copy; <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>'
/>
 * ***/
const ChangeView = ({ center }) => {
  const map = useMap()
  useEffect(() => {
    map.setView(center, map.getZoom())
  }, [center, map])
  return null
}

const Leaflet = ({
  searchLocationByCoordinates,
  address,
  setAddress,
  position,
  setPosition,
  setInputInfo
}) => {
  const { handleOpenModalOrders } = useOrdersModal()
  /**
   * variable de control de la posicion actual del marcador
   * **/
  const markerRef = useRef(null)
  /**
   * Variable de control de renderizado del mapa
   * **/
  const [isMounted, setIsMounted] = React.useState(false)

  const customIcon = new Icon({
    // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconUrl: '/assets/icons/marker.svg',
    iconSize: [32, 32] // size of the icon
    // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  })

  /**
   * Hook que controla si el componente de mapa se puede cargar
   * una vez termine de cargar el componente
   * **/
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // para hacer dragable el marcador
  /**
   * Metodo que controla el evento de arrastrar el marcador dentro del mapa
   * **/
  const eventDraggableHandlers = useMemo(
    () => ({
      dragend () {
        const marker = markerRef.current
        if (marker != null) {
          searchLocationByCoordinates(marker.getLatLng()?.lat, marker.getLatLng()?.lng).then(
            (data) => {
              setPosition(marker.getLatLng())
              setAddress(data?.direccion)
              setInputInfo(data)
            }
          )
        }
      }
    }),
    []
  )

  const { setView } = useStore()

  return (
    <div className='relative h-[100%] w-[100%] block z-[0]'>
      {isMounted && (
        <div className='relative h-[100%] w-full'>
          <MapContainer
            className='h-full w-full'
            ref={markerRef}
            center={position}
            zoom={10}
            scrollWheelZoom={false}
          >
            <TileLayer
              url='https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=O20fITMYefJnA8UBapiW'
              attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            <Marker
              position={position}
              icon={customIcon}
              draggable
              eventHandlers={eventDraggableHandlers}
              ref={markerRef}
            >
              <Popup>
                <div className='relative flex flex-col gap-[10px] items-start justify-start w-[265px] h-[155px] rounded-[5px] border-[1px] border-solid border-gray-600 p-[10px] bg-white-100'>
                  <span className='block font-sans font-normal text-left text-[14px] line-clamp-2 leading-[20px] text-[rgba(0, 0, 0, 0.36)] h-[40px] w-[100%]'>
                    {address ?? 'Calle 5 e/ 25 y 36 Siboney Playa #4578 '}
                  </span>
                  <div className='relative h-[43px] flex items-center justify-center w-[100%] py-[10px]'>
                    <span className='block truncate font-poppins font-normal text-left text-[14px] leading-[20px] text-[#4A5568)] uppercase w-[100%]'>
                      BOMBA DE AGUA UYUSTOOLS
                    </span>
                  </div>
                  <div className='relative h-[32px] flex items-start justify-start w-[100%] gap-[10px]'>
                    <CustomButton
                      className='flex-1 text-[14px] leading-[20px] px-[12px] rounded-full'
                      name='View Details'
                      cancel
                      action={() => setView({ view: 'Details' })}
                    />
                    <CustomButton
                      className='flex-1 text-[14px] leading-[20px] px-[12px] rounded-full'
                      name='Assign'
                      add
                      action={() => handleOpenModalOrders()}
                    />
                  </div>
                </div>
              </Popup>
            </Marker>
            <ChangeView center={position} />
            {/* Centrar el mapa en la posición del marcador */}
          </MapContainer>
        </div>
      )}
    </div>
  )
}

export default Leaflet
