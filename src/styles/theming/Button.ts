import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const CSButton = defineStyle({
  background: 'transparent',
  color: 'white',
  height: '100%',
  borderRadius: '0',
  fontSize: '14px',
  _hover: {
    background: '#ffffff40',
  },
})

const variants = {
  CSButton: CSButton,
}

const baseStyle = {
  borderRadius: '20px',
}

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    colorScheme: 'brand',
  },
})
