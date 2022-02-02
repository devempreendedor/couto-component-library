import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Default Button',
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
}

export const Small = Template.bind({})
Small.args = {
  children: 'Small Button',
  size: 'sm',
}

export const Large = Template.bind({})
Large.args = {
  children: 'Large Button',
  size: 'lg',
}
