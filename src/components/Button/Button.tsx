import React from 'react'
import styles from './Button.module.scss'

export interface ButtonProps {
  children: string
  variant?: 'primary' | 'default'
  size?: 'sm' | 'md' | 'lg'
}

const Button = ({
  children,
  variant = 'default',
  size = 'md',
}: ButtonProps) => {
  return (
    <button className={`${styles.base} ${styles[variant]} ${styles[size]}`}>
      <span>{children}</span>
    </button>
  )
}

export default Button
