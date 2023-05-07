import { useRef, useState } from 'react'
import EpubReader from './library/EpubReader';
// @ts-ignore
import styled from 'styled-components'
import { Rendition } from 'epubjs';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
`
export const ReaderContainer = styled.div`
  font-size: 16px;
  position: absolute;
  top: 20px;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;
  transition: all 0.6s ease;
  border: 1px solid rgb(221, 221, 221);
`

const storage = global.localStorage || null;

const App = () => {
  const renditionRef = useRef(null);
  const [location, setLocation] = useState(storage && storage.getItem('epub-location') ? storage.getItem('epub-location') : 2);

  const toggleFullscreen = () => {
    setTimeout(() => {
      // @ts-ignore
      renditionRef.current?.resize();
    }, 500);
  }

  const onLocationChanged = (location: string) => {
    setLocation(location)
    if (storage) storage.setItem('epub-location', location)
  };

  const getRendition = (rendition: Rendition) => {
    // @ts-ignore
    renditionRef.current = rendition
  };

  const onNavigation = (props: any) => {
    console.log(props)
  };

  return (
    <Container>
      <ReaderContainer>
        <EpubReader
          url={'https://gerhardsletten.github.io/react-reader/files/alice.epub'}
          location={location as string | number}
          locationChanged={onLocationChanged}
          getRendition={getRendition}
          onNavigation={onNavigation}
        />
      </ReaderContainer>
    </Container>
  )

};

export default App