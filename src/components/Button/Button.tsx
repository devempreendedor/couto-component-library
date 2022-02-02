import React from 'react'
import styles from './Button.module.scss'

export interface ButtonProps {
  children: string
}

const Button = (props: ButtonProps) => {
  return (
    <button className={styles.base}>
      <span>{props.children}</span>
    </button>
  )
}

export default Button
