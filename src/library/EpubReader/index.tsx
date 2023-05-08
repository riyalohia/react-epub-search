import React, { useState } from 'react'
import EpubView from '../EpubView/index'
import { EpubReaderStyle as defaultStyles } from './style'
import { IEpubReaderProps, IToc } from '../../../types'
import { NavItem } from 'epubjs'
import TocToggleButton from './TocToggleButton'
import { NextButton, PrevButton } from './NavigationButtons'
import TocItem from './TocItem'

const EpubReader: React.FC<IEpubReaderProps> = (props) => {
  const {
    showToc = true,
    tocContainerWidth = '256px',
    // @ts-ignore
    loadingView = 'Loading...',
    styles = defaultStyles,
    locationChanged,
    epubViewStyles,
    prevButton,
    nextButton,
    tocToggleButton,
    tocItem,
    tocChanged,
    ...rest
  } = props;

  const [toc, setToc] = useState<NavItem[]>([]);
  const [expandedToc, setExpandedToc] = useState(false);

  const readerRef = React.useRef(null)

  const toggleToc = () => {
    setExpandedToc(!expandedToc);
  }

  const next = () => {
    const node = readerRef.current
    console.log(node)
    // @ts-ignore
    node.nextPage();
  }

  const prev = () => {
    const node = readerRef.current
    // @ts-ignore
    node.prevPage();
  }

  const onTocChange = (toc: NavItem[]) => {
    setToc(toc);
    if (tocChanged) tocChanged(toc);
  }

  const renderToc = () => {
    return (
      <div>
        <div style={{ width: tocContainerWidth, ...styles.tocArea }} >
          {toc.map((item, i) => {
            let tocItemRenderer;
            const props = {
              ...item,
              setLocation: setLocation
            };

            if (tocItem)
              tocItemRenderer = React.cloneElement(tocItem, { ...props})
            else
              // @ts-ignore
              tocItemRenderer = <TocItem {...props} />

            return <div key={i}>{tocItemRenderer}</div>
          })}
        </div>
      </div>
    )
  }

  const setLocation = (loc: string) => {
    setExpandedToc(false);
    if (locationChanged) locationChanged(loc)
  }

  const renderTocToggleButton = () => {
    if (tocToggleButton) {
      const togglebutton = React.cloneElement(tocToggleButton, {
        expandedToc,
        toggleToc
      });
      return <>{togglebutton}</>
    }
    return <TocToggleButton expandedToc toggleToc={toggleToc} />
  };

  const renderNavigationButtons = () => {
    let prevButtonRenderer;
    let nextButtonRenderer;

    if (prevButton)
      prevButtonRenderer = React.cloneElement(prevButton, { prev });
    else
      prevButtonRenderer = <PrevButton prev={prev} />

    if (nextButton)
      nextButtonRenderer = React.cloneElement(nextButton, { next });
    else
      nextButtonRenderer = <NextButton next={next} />

    return (
      <>
        {prevButtonRenderer}
        {nextButtonRenderer}
      </>
    )
  };

  return (
    <div style={styles.container}>
      <div
        style={Object.assign(
          {},
          styles.readerArea,
          expandedToc ? { transform: `translateX(${tocContainerWidth})` } : {}
        )}
      >
        {showToc && renderTocToggleButton()}
        <div style={styles.reader}>
          <EpubView
            ref={readerRef}
            loadingView={loadingView}
            // @ts-ignore
            styles={epubViewStyles}
            {...rest}
            tocChanged={onTocChange}
            locationChanged={locationChanged}
          />
        </div>
        <>{renderNavigationButtons()}</>
      </div>
      {showToc && toc.length && renderToc()}
    </div>
  );
};

export default EpubReader