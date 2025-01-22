import SidebarWrapper from '@/components/shared/sidebar/SidebarWrapper'
// import { ChildProcess } from 'child_process'

import React from 'react'

type Props = React.PropsWithChildren<{}>

const Layout = ({children}: Props) => {
  return (
    <SidebarWrapper>{children}</SidebarWrapper>
  )
}

export default Layout;