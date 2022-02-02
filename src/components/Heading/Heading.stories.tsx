import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Heading from './Heading'

export default {
  title: 'Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default Heading',
}

export const Title1 = Template.bind({})
Title1.args = {
  children: 'Default Heading',
  level: 'h1',
}

export const Title3 = Template.bind({})
Title3.args = {
  children: 'Default Heading',
  level: 'h3',
}
