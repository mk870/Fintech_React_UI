import PageWrapperHOC from 'HOCs/PageWrapper/PageWrapperHOC'
import { PageContainer } from 'pages/PageStyles'
import React from 'react'

const Login = ({themeMode,themes}) => {
  return (
    <PageContainer themeMode={themeMode}>
      Login
    </PageContainer>
  )
}

export default PageWrapperHOC(Login)