import React, { Component } from 'react'
// @ts-ignore
import Epub from 'epubjs/lib/index'
import { EpubViewStyle } from './style'
import { IEpubViewProps } from '../../../types'
import { Book, Rendition } from 'epubjs'

interface EpubViewState {
  isLoaded: boolean;
  toc: any[];
};

// Exclude the html tags that are not visible in render tree.
const searchExcludedKeywords = ['cvi', 'Title', 'title', 'part', 'toc'];

class EpubView extends Component<IEpubViewProps, EpubViewState> {
  public static defaultProps = {
    searchTerm: '',
    loadingView: null,
    locationChanged: null,
    tocChanged: null,
    epubOptions: {},
    epubInitOptions: {},
  };

  location: IEpubViewProps['location'];

  book: Book;

  rendition: Rendition;

  viewerRef: React.RefObject<any>;

  prevPage: () => void;

  nextPage: () => void;

  constructor(props: IEpubViewProps) {
    super(props)
    this.state = {
      isLoaded: false,
      toc: []
    }
    this.viewerRef = React.createRef()
    this.location = props.location;
    // @ts-ignore
    this.book = this.rendition = this.prevPage = this.nextPage = null
  }

  componentDidMount() {
    this.initBook();
    document.addEventListener('keyup', this.handleKeyPress, false)
  }

  resetBook(navigateToTop?: boolean) {
    this.setState(
      {
        isLoaded: false
      },
      () => {
        this.initBook(navigateToTop);
      }
    );
  }

  initBook(navigateToTop: boolean = true) {
    const { url, tocChanged, epubInitOptions } = this.props
    if (this.book) {
      this.book.destroy()
    }
    this.book = new Epub(url, epubInitOptions)
    this.book.loaded.navigation.then(({ toc }) => {
      this.setState(
        {
          isLoaded: true,
          toc: toc
        },
        () => {
          tocChanged && tocChanged(toc)
          this.initReader(navigateToTop)
        }
      )
    })
  }

  componentWillUnmount() {
    if (this.book) {
      this.book.destroy()
    }
    // @ts-ignore
    this.book = this.rendition = this.prevPage = this.nextPage = null
    document.removeEventListener('keyup', this.handleKeyPress, false)
  }

  shouldComponentUpdate(nextProps: IEpubViewProps) {
    return (
      !this.state.isLoaded ||
      nextProps.location !== this.props.location ||
      nextProps.location !== this.props.location
    )
  }

  componentDidUpdate(prevProps: IEpubViewProps) {
    if (
      prevProps.location !== this.props.location &&
      this.location !== this.props.location
    ) {
      this.rendition.display(this.props.location as number)
    }
    if (prevProps.url !== this.props.url) {
      this.resetBook()
    }
    if (prevProps.searchTerm !== this.props.searchTerm && this.props.searchTerm) {
      this.onSearchChange(this.props.searchTerm);
    }
    if (prevProps.fontSize !== this.props.fontSize) {
      this.renderFontSize();
    }
    if (prevProps.themeColor !== this.props.themeColor) {
      this.changeThemeColor();
    }
  }

  initReader(navigateToTop?: boolean) {
    const { toc } = this.state
    const { location, epubOptions, searchTerm, fontSize, themeColor, resetBook, getRendition } = this.props;
    const updatedLocation = navigateToTop ? 0 : location;
    const node = this.viewerRef.current
    this.rendition = this.book.renderTo(node, {
      // @ts-ignore
      contained: true,
      width: '100%',
      height: '100%',
      ...epubOptions
    })

    this.prevPage = () => {
      this.rendition.prev()
    }
    this.nextPage = () => {
      this.rendition.next()
    }
    this.registerEvents()
    this.registerTheme();

    if (getRendition) getRendition(this.rendition);
    if (resetBook) resetBook(this.resetBook);

    if (typeof updatedLocation === 'string' || typeof updatedLocation === 'number') {
      this.rendition.display(updatedLocation as number)
    } else if (toc.length > 0 && toc[0].href) {
      this.rendition.display(toc[0].href)
    } else {
      this.rendition.display()
    }

    // Apply theme on book initialization
    if (themeColor) {
      this.rendition.themes.select(themeColor);
    } 

    if (fontSize) {
      this.renderFontSize();
    }

    if (searchTerm) {
      this.onSearchChange(searchTerm);
    }
  }

  registerEvents() {
    const { handleKeyPress, handleTextSelected, handleImageClick } = this.props
    this.rendition.on('locationChanged', this.onLocationChange)
    this.rendition.on('keyup', handleKeyPress || this.handleKeyPress)
    if (handleImageClick) this.rendition.on('rendered', this.onHandleImage);
    if (handleTextSelected) {
      this.rendition.on('selected', handleTextSelected)
    }
  }

  registerTheme() {
    const { theme } = this.props;
    if (theme) this.rendition.themes.register(theme);
  }

  renderFontSize() {
    const { fontSize } = this.props;
    this.rendition.themes.fontSize(`${fontSize}%`);
    this.rendition.views().forEach((view) => {
      // @ts-ignore
      if (view.pane) view.pane.render();
    });
  }

  changeThemeColor() {
    // This is a hack because switching between themes is not smooth
    // Refer https://github.com/futurepress/epub.js/issues/1208
    this.resetBook(false);
  }

  onLocationChange = (loc: any) => {
    const { location, onNavigation, locationChanged } = this.props
    const newLocation = loc && loc.start
    if (location !== newLocation) {
      this.location = newLocation
      const isEndOfBook = this.rendition.location.atEnd;
      const isStartOfBook = this.rendition.location.atStart;
      const locations = this.rendition.location;

      const currentChapter =
        // @ts-ignore
        this.rendition.book.spine.items[locations.start.index]?.idref;
      const pageNoInChapter = locations.start?.displayed?.page;
      if (locationChanged) locationChanged(newLocation);
      if (onNavigation) onNavigation({
        isEndOfBook,
        isStartOfBook,
        currentChapter,
        pageNoInChapter,
      });
    }
  };

  onHandleImage = (_e: any, i: any) => {
    const { handleImageClick } = this.props;
    i.document.documentElement.addEventListener('click', (e: any) => {
      const imageSrc = e.target.src;
      const imageHeight = e.target.height;
      const imageWidth = e.target.width;
      if (handleImageClick) handleImageClick(imageSrc, imageHeight, imageWidth);
    });
  };


  searchWithinBook = (searchTerm: string) => {
    // @ts-ignore
    const filteredSpineItems = this.book.spine.spineItems.filter((item) => {
      const searchExcludedWords = searchExcludedKeywords.filter((word) =>
        item.idref.includes(word)
      );
      return !item.idref.includes(searchExcludedWords[0]);
    });

    return Promise.all(
      filteredSpineItems.map((item: any) =>
        item
          .load(this.book.load.bind(this.book))
          .then(item.find.bind(item, searchTerm))
          .finally(item.unload.bind(item))
      )
      // @ts-ignore
    ).then((results) => Promise.resolve([].concat.apply([], results)));
  };

  onSearchChange = (searchTerm: string) => {
    const { onChangeSearchResults } = this.props;

    if (searchTerm) {
      this.searchWithinBook(searchTerm).then(async (results) => {
        if (onChangeSearchResults) onChangeSearchResults(results);
      });
    } else {
      if (onChangeSearchResults) onChangeSearchResults([]);
    }
  };

  renderBook() {
    const { styles } = this.props
    return <div ref={this.viewerRef} style={{ ...EpubViewStyle.view, ...styles?.view }} />
  }

  handleKeyPress = ({ key }: { key: string }) => {
    key && key === 'ArrowRight' && this.nextPage()
    key && key === 'ArrowLeft' && this.prevPage()
  }

  render() {
    const { isLoaded } = this.state
    const { loadingView, styles } = this.props

    return (
      <div style={{
        ...EpubViewStyle.viewHolder,
        ...styles?.viewHolder
      }}>
        {(isLoaded && this.renderBook()) || loadingView}
      </div>
    )
  }
}

export default EpubView