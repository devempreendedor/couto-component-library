import React from 'react'
import styles from './Heading.module.scss'

export interface HeadingProps {
  level?: 'h1' | 'h2' | 'h3'
  children: string
}

const Heading = ({ level = 'h2', children }: HeadingProps) => (
  <h1 className={`${styles.base} ${styles[level]}`}>{children}</h1>
)

export default Heading
