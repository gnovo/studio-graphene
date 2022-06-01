import React from "react"

import { colors } from '../../styles'

const containerStyles = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.purple,
}

const textStyles = {
  fontSize: 24,
  color: colors.white,
}

const Community = () => {
  return (
    <div style={containerStyles} id="community">
      <h2 style={textStyles}>OUR COMMUNITY</h2>
    </div>
  )
}

export default Community
