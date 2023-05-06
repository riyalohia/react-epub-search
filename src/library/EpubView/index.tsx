import React, { Component } from 'react'
import PropTypes from 'prop-types'
// @ts-ignore
import Epub from 'epubjs/lib/index'
import { EpubViewStyle as defaultStyles } from './style'
import { EpubViewProps } from '../../types'
import { Book, Rendition } from 'epubjs'

// MTL removed - line does not seem like a requirement any more (and was causing an error)
// global.ePub = Epub; // Fix for v3 branch of epub.js -> needs ePub to by a global var
interface IHighlight {
  cfi: string;
}

interface EpubViewState {
  //prevSearchPosition: string;
  isLoaded: boolean;
  // isSearchLoading: boolean;
  // searchHighlights: IHighlight[];
  toc: any[];
};

const searchExcludedKeywords = ['cvi', 'Title', 'title', 'part', 'toc'];

class EpubView extends Component<EpubViewProps, EpubViewState> {
  public static defaultProps = {
    currentSearchPosition: 1,
    searchTerm: '',
    loadingView: null,
    locationChanged: null,
    tocChanged: null,
    epubOptions: {},
    epubInitOptions: {},
    // theme: {
    //   color: themes.LIGHT,
    //   fontSize: 100
    // }
  };

  location: EpubViewProps['location'];

  book: Book;

  rendition: Rendition;

  viewerRef: React.RefObject<any>;

  prevPage: () => void;

  nextPage: () => void;

  constructor(props: EpubViewProps) {
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
    this.initBook()
    document.addEventListener('keyup', this.handleKeyPress, false)
  }

  initBook() {
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
          this.initReader()
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

  shouldComponentUpdate(nextProps: EpubViewProps) {
    return (
      !this.state.isLoaded ||
      nextProps.location !== this.props.location ||
      nextProps.location !== this.props.location
    )
  }

  componentDidUpdate(prevProps: EpubViewProps) {
    if (
      prevProps.location !== this.props.location &&
      this.location !== this.props.location
    ) {
      this.rendition.display(this.props.location as number)
    }
    if (prevProps.url !== this.props.url) {
      this.initBook()
    }
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.onSearchChange(this.props.searchTerm);
    }
  }

  initReader() {
    const { toc } = this.state
    const { location, epubOptions, searchTerm, getRendition } = this.props
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
    getRendition && getRendition(this.rendition)

    if (typeof location === 'string' || typeof location === 'number') {
      this.rendition.display(location as number)
    } else if (toc.length > 0 && toc[0].href) {
      this.rendition.display(toc[0].href)
    } else {
      this.rendition.display()
    }

    if (searchTerm) {
      this.onSearchChange(searchTerm);
    }
  }

  registerEvents() {
    const { handleKeyPress, handleTextSelected } = this.props
    this.rendition.on('locationChanged', this.onLocationChange)
    this.rendition.on('keyup', handleKeyPress || this.handleKeyPress)
    if (handleTextSelected) {
      this.rendition.on('selected', handleTextSelected)
    }
  }

  onLocationChange = (loc: any) => {
    const { location, locationChanged } = this.props
    const newLocation = loc && loc.start
    if (location !== newLocation) {
      this.location = newLocation
      locationChanged && locationChanged(newLocation)
    }
  }

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
    return <div ref={this.viewerRef}  style={{ height: '100%' }} />
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
        position: 'relative',
        height: '100%',
        width: '100%'
      }}>
        {(isLoaded && this.renderBook()) || loadingView}
      </div>
    )
  }
}

export default EpubView