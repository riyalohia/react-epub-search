"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EpubReaderStyle = void 0;
var EpubReaderStyle = {
  container: {
    overflow: 'hidden',
    position: 'relative',
    height: '100%'
  },
  readerArea: {
    position: 'relative',
    zIndex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    transition: 'all .3s ease'
  },
  reader: {
    position: 'absolute',
    top: 50,
    left: 50,
    bottom: 20,
    right: 50
  },
  tocArea: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 0,
    overflowY: 'auto',
    background: '#f2f2f2',
    padding: '10px 0'
  }
};
exports.EpubReaderStyle = EpubReaderStyle;