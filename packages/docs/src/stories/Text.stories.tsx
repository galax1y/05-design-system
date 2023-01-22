import { Text, TextProps } from '@galaxy-ui/react'
import { StoryObj, Meta } from '@storybook/react'

// configuração global
export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sunt dignissimos, dolores voluptatibus officiis, amet ullam deserunt illo ipsam sed aliquam suscipit neque ea, possimus aliquid labore? Repellendus, inventore ratione.'

  },
} as Meta<TextProps>

// variações
export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  }
}