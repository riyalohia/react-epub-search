import * as React from 'react';
import { BookOptions } from 'epubjs/types/book';
import { RenditionOptions } from 'epubjs/types/rendition';
import { Contents, NavItem, Rendition } from 'epubjs';

export interface IToc {
  label: string;
  href: string;
}

export interface ISearchResult {
  cfi: string;
  excerpt: string;    
};

export interface INavigationProps {
  currentChapter: number;
  pageNoInChapter: number;
  isStartOfBook: boolean;
  isEndOfBook: boolean;
}

export interface IEpubViewStyles {
  view?: React.CSSProperties;
  viewHolder?: React.CSSProperties;
};

export interface IEpubViewProps {
  url: string | ArrayBuffer;
  searchTerm?: string;
  epubInitOptions?: BookOptions;
  epubOptions?: RenditionOptions;
  styles?: IEpubViewStyles;
  loadingView?: React.ReactNode;
  location?: string | number;
  theme?: object;
  fontSize?: number;
  themeColor?: string;
  onNavigation?(obj: INavigationProps): void;
  onChangeSearchResults?(results: ISearchResult[]): void;
  locationChanged?(value: string | number): void;
  tocChanged?(value: NavItem[]): void;
  resetBook?: (func: () => void) => void;
  getRendition?(rendition: Rendition): void;
  handleKeyPress?(): void;
  handleImageClick?(src: string, height: number, width: number): void;
  handleTextSelected?(cfiRange: string, contents: Contents): void;
}

export interface IEpubReaderProps extends Omit<IEpubViewProps, 'styles'> {
  prevButton?: React.ReactElement;
  nextButton?: React.ReactElement;
  tocToggleButton?: React.ReactElement;
  tocContainerWidth?: string;
  tocItem?: React.ReactElement;
  showToc?: boolean;
  styles?: IReactReaderStyle;
  epubViewStyles?: IEpubViewProps['styles'];
}

export interface TocItemProps {
  label: string;
  href: string;
  subitems?: TocItemProps[];
  setLocation: (href: string) => void;
};

export interface IReactReaderStyle {
  container: React.CSSProperties;
  readerArea: React.CSSProperties;
  containerExpanded: React.CSSProperties;
  reader: React.CSSProperties;
  tocArea: React.CSSProperties;
  tocAreaButton: React.CSSProperties;
};

declare class EpubView extends React.Component<IEpubViewProps> {}

declare function EpubReader(props: IEpubReaderProps): React.ReactElement;

export { EpubView, EpubReader };