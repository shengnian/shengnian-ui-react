import React from 'react'
import { Tab } from 'shengnian-ui-react'

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]

const TabExampleSecondary = () => (
  <Tab menu={{ secondary: true }} panes={panes} />
)

export default TabExampleSecondary
