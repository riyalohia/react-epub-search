import * as React from 'react';
import { TocItemProps } from '../../../types';

const styles = {
  tocAreaButton: {
    userSelect: 'none',
    background: 'none',
    border: 'none',
    display: 'block',
    fontFamily: 'sans-serif',
    width: '100%',
    fontSize: '.9em',
    textAlign: 'left',
    padding: '.9em 1em',
    borderBottom: '1px solid #ddd',
    color: '#aaa',
    boxSizing: 'border-box',
    outline: 'none',
    cursor: 'pointer'
  } as React.CSSProperties,
};

const TocItem = (props: TocItemProps) => {
  const { label, subitems, href, setLocation } = props;

  return (
    <>
      <button onClick={() => setLocation(href)} style={styles.tocAreaButton}>
        {label}
      </button>
      {subitems && subitems.length > 0 && (
        <div style={{ paddingLeft: 10 }}>
          {subitems.map((item, i) => (
            <TocItem key={i} {...props} {...item} />
          ))}
        </div>
      )}
    </>
  );
};

export default TocItem;