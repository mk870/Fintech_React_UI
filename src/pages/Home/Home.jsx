import PageWrapperHOC from 'HOCs/PageWrapper/PageWrapperHOC'
import { PageContainer } from 'pages/PageStyles'
import React from 'react'

const Home = ({themeMode,themes}) => {
  return (
    <PageContainer themeMode={themeMode}>
      homemememmeme{themeMode}
    </PageContainer>
  )
}

export default PageWrapperHOC(Home)