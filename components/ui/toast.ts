import { createToast, type UseToastReturn } from "@radix-ui/react-toast"

export const useToast = (): UseToastReturn => {
  return createToast()
}

export type ToastProps = {}
export type ToastActionElement = {}
export const ToastProvider = () => null
export const ToastViewport = () => null
export const Toast = () => null
export const ToastTitle = () => null
export const ToastDescription = () => null
export const ToastClose = () => null
export const ToastAction = () => null
