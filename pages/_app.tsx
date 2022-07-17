import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createRef, FC, Fragment, useEffect } from 'react'
import Cursor from '../src/components/Cursor/Cursor'
import useCursor from '../src/hooks/useCursor'
import SceneLoader3D from '../src/components/SceneLoader3D/SceneLoader3D'

const SCENE_ID = 'three-3d-scene'

function MyApp({ Component, pageProps }: AppProps) {
  const { changePosition, cursorRef } = useCursor()

  useEffect(() => {
    // SceneLoader3D(SCENE_ID)
  }, [])

  const RenderFrontend: FC = () => {
    if (typeof window !== 'undefined') {
      return (
        <div className="main">
          <Cursor cursorRef={cursorRef} />
          <div id={SCENE_ID} />
          <Component cursorRef={cursorRef} {...pageProps} />
        </div>
      )
    }
    return (
      <div style={{ fontSize: 122, fontSmooth: 4, color: 'red' }}>
        undefined.... whatever)))
      </div>
    )
  }

  return (
    <Fragment>
      <div onMouseMove={changePosition}></div>
      <RenderFrontend />
    </Fragment>
  )
}

export default MyApp
