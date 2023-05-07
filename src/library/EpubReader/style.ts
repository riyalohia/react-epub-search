import * as React from 'react';

type IPosition = React.CSSProperties['position'];

export const EpubReaderStyle = {
    container: {
      overflow: 'hidden',
      position: 'relative' as IPosition,
      height: '100%'
    },
    readerArea: {
      position: 'relative' as IPosition,
      zIndex: 1,
      height: '100%',
      width: '100%',
      backgroundColor: '#fff',
      transition: 'all .3s ease'
    },
    reader: {
      position: 'absolute' as IPosition,
      top: 50,
      left: 50,
      bottom: 20,
      right: 50
    },
    tocArea: {
      position: 'absolute' as IPosition,
      left: 0,
      top: 0,
      bottom: 0,
      zIndex: 0,
      overflowY: 'auto' as React.CSSProperties['overflowY'],
      background: '#f2f2f2',
      padding: '10px 0'
    },
  }