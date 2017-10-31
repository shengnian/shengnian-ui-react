import React from 'react'
import { Breadcrumb } from 'shengnian-ui-react'

const sections = [
  { key: 'home', content: 'Home', link: true },
  { key: 'registration', content: 'Registration', link: true },
  { key: 'info', content: 'Personal Information', active: true },
]

const BreadcrumbExampleDividerProps = () => (
  <Breadcrumb divider='/' sections={sections} />
)

export default BreadcrumbExampleDividerProps