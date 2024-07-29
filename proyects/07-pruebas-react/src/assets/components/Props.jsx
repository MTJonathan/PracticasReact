import React from 'react'
import PropTypes from 'prop-types'
export const Props = ({titulo, subtitulo}) => {
  return (
    <>
      <h2>Props: </h2> 
      <p>{titulo}</p>
      <p>{subtitulo}</p>
    </>
  )
}

Props.prototypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string
}

