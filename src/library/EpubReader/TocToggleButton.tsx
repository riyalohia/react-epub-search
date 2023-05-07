import * as React from 'react';

type IPosition = React.CSSProperties['position'];

const styles = {
  tocButton: {
    background: 'none',
    border: 'none',
    width: 32,
    height: 32,
    position: 'absolute' as IPosition,
    top: 10,
    left: 10,
    borderRadius: 2,
    outline: 'none',
    cursor: 'pointer'
  },
  tocButtonExpanded: {
    background: '#f2f2f2'
  },
  tocButtonBar: {
    position: 'absolute' as IPosition,
    width: '60%',
    background: '#ccc',
    height: 2,
    left: '50%',
    margin: '-1px -30%',
    top: '50%',
    transition: 'all .5s ease'
  },
  tocButtonBarTop: {
    top: '35%'
  },
  tocButtonBottom: {
    top: '66%'
  },
};

const TocToggleButton = ({ toggleToc, expandedToc }: { toggleToc: () => void, expandedToc: boolean }) => {
  return (
    <button
        style={Object.assign(
          {},
          styles.tocButton,
          expandedToc ? styles.tocButtonExpanded : {}
        )}
        onClick={toggleToc}
      >
        <span
          style={Object.assign(
            {},
            styles.tocButtonBar,
            styles.tocButtonBarTop
          )}
        />
        <span
          style={Object.assign(
            {},
            styles.tocButtonBar,
            styles.tocButtonBottom
          )}
        />
      </button>
  );
};

export default TocToggleButton;