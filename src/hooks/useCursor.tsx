import { RefObject, useCallback, useRef } from 'react'

export default function useCursor(
  wrapperRef: RefObject<HTMLDivElement> | null = null
) {
  const cursorRef = useRef<HTMLDivElement>(null)

  const isCursorInsideWrapper = useCallback(() => {
    return wrapperRef?.current?.contains(cursorRef.current)
  }, [])

  const changePosition = (
    e: any,
    fixedTopValue: number | null = null,
    fixedLeftValue: number | null = null
  ) => {
    if (cursorRef.current) {
      cursorRef.current.style.top = `${
        fixedTopValue ? fixedTopValue : e.clientY
      }px`
      cursorRef.current.style.left = `${
        fixedLeftValue ? fixedLeftValue : e.clientX
      }px`
    }
  }

  return {
    cursorRef,
    changePosition,
    isCursorInsideWrapper,
  }
}
