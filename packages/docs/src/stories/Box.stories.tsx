import { Box, BoxProps } from '@galaxy-ui/react'
import { StoryObj, Meta } from '@storybook/react'

// configuração global
export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <>
        <span>Testando box</span>
      </>
    )
  },
} as Meta<BoxProps>

// variações
export const Primary: StoryObj<BoxProps> = {
  args: {},
}