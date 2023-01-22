import { Box, BoxProps, Text } from '@galaxy-ui/react'
import { StoryObj, Meta } from '@storybook/react'

// configuração global
export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando box</Text>
      </>
    )
  },
} as Meta<BoxProps>

// variações
export const Primary: StoryObj<BoxProps> = {
  args: {},
}