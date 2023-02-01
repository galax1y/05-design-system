import { Toast, ToastProps, ToastProvider } from '@lucas-galaxy-ui/react'
import { StoryObj, Meta } from '@storybook/react'

// configuração global
export default {
  title: "Test/Toast",
  component: Toast,
  args: {
  },
  decorators: [
    (Story) => {
      return (
        <ToastProvider swipeDirection='right'>
          {Story()}
        </ToastProvider>
      )
    }
  ],
} as Meta<ToastProps>

// variações
export const Primary: StoryObj<ToastProps> = {}
