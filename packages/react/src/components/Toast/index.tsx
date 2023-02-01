import { ComponentProps } from 'react'
import {
  ToastContainer,
  ToastTitle,
  ToastHeader,
  Provider,
  ToastDescription,
  ToastViewport,
  ToastClose,
} from './styles'
import { X } from 'phosphor-react'

// prettier-ignore
export interface ToastProps extends ComponentProps<typeof ToastContainer> { }

export function Toast() {
  return (
    <ToastContainer>
      <ToastHeader>
        <ToastTitle>Agendamento realizado</ToastTitle>
        <ToastClose>
          <X size={20} />
        </ToastClose>
      </ToastHeader>

      <ToastDescription>Quarta-feira, 23 de Outubro às 16h</ToastDescription>
    </ToastContainer>
  )
}

// prettier-ignore
interface ToastProviderProps extends ComponentProps<typeof Provider> { }

export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <Provider>
      {children}
      <ToastViewport />
    </Provider>
  )
}
