import { RefObject } from 'react'

export interface PageProps {
    cursorRef: RefObject<HTMLDivElement>
}

export interface PanelProps {
    cursorRef?: RefObject<HTMLDivElement>
}
