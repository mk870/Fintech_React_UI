import PageWrapperHOC from 'HOCs/PageWrapper/PageWrapperHOC'
import { PageContainer } from 'pages/PageStyles'
import React from 'react'

const Stocks = ({themeMode,themes}) => {
  return (
    <PageContainer>
     stocks
    </PageContainer>
  )
}

export default PageWrapperHOC(Stocks)