import { Heading, HeadingProps } from '@galaxy-ui/react'
import { StoryObj, Meta } from '@storybook/react'

// configuração global
export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: 'Custom Title',
  },
} as Meta<HeadingProps>

// variações
export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o heading é `h2`, mas pode ser alterado com a propriedade `as`'
      }
    }
  }
}