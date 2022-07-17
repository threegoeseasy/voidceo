import React, { CSSProperties, FC, HTMLAttributes, RefObject } from 'react'
import s from './Cursor.module.css'

interface CursorProps extends HTMLAttributes<FC> {
  cursorRef: RefObject<HTMLDivElement>
}

const Cursor: FC<CursorProps> = ({ cursorRef, style }) => {
  return <div ref={cursorRef} className={s.cursor} style={style} />
}

export default Cursor
