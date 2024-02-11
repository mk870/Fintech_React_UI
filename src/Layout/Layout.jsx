import AppInitHOC from 'HOCs/AppInitialization/AppInitHOC'
import React from 'react'

const Layout = ({children,themeMode,screenSize, mobileMenu}) => {
  console.log(themeMode,mobileMenu,screenSize);
  return (
    <div>
      {children}
    </div>
  )
}

export default AppInitHOC(Layout)