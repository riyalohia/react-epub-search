import * as React from 'react';

const styles = {
  prev: {
    left: 1
  },
  next: {
    right: 1
  },
  arrow: {
    outline: 'none',
    border: 'none',
    background: 'none',
    position: 'absolute' as React.CSSProperties['position'],
    top: '50%',
    marginTop: -32,
    fontSize: 64,
    padding: '0 10px',
    color: '#E2E2E2',
    fontFamily: 'arial, sans-serif',
    cursor: 'pointer',
    userSelect: 'none' as React.CSSProperties['userSelect'],
    fontWeight: 'normal'
  },
  arrowHover: {
    color: '#777'
  },
};

export const NextButton = ({ next }: { next: () => void }) => {
  return (
    <button
      style={Object.assign({}, styles.arrow, styles.next)}
      onClick={next}
    >
      ›
    </button>
  );
};

export const PrevButton = ({ prev }: { prev: () => void }) => {
  return (
    <button
      style={Object.assign({}, styles.arrow, styles.prev)}
      onClick={prev}
    >
      ‹
    </button>
  );
};

