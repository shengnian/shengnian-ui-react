import React from 'react'
import { Breadcrumb } from 'shengnian-ui-react'

const BreadcrumbExampleLargeSize = () => (
  <Breadcrumb size='large'>
    <Breadcrumb.Section link>Home</Breadcrumb.Section>
    <Breadcrumb.Divider icon='right chevron' />
    <Breadcrumb.Section link>Registration</Breadcrumb.Section>
    <Breadcrumb.Divider icon='right chevron' />
    <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
  </Breadcrumb>
)

export default BreadcrumbExampleLargeSize
