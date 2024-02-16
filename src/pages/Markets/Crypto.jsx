import PageWrapperHOC from 'HOCs/PageWrapper/PageWrapperHOC'
import { PageContainer } from 'pages/PageStyles'
import React from 'react'

const Crypto = ({themeMode,themes}) => {
  return (
    <PageContainer>
     Crypto
    </PageContainer>
  )
}

export default PageWrapperHOC(Crypto)