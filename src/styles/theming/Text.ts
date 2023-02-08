import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const primary = defineStyle({
  color: 'var(--colorElementPrimaryText)',
})

const regular = defineStyle({
  color: 'var(--colorElementRegularText)',
})

const secondary = defineStyle({
  color: 'var(--colorElementSecondaryText)',
})

const placeholder = defineStyle({
  color: 'var(--colorElementPlaceholderText)',
})

const variants = {
  primary: primary,
  regular: regular,
  secondary: secondary,
  placeholder: placeholder,
}

export const textTheme = defineStyleConfig({
  variants,
  baseStyle: {
    fontSize: '12px',
  },
})
