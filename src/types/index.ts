import * as React from 'react';
import { BookOptions } from 'epubjs/types/book';
import { RenditionOptions } from 'epubjs/types/rendition';
import { Contents, NavItem, Rendition } from 'epubjs';

export interface Toc {
  label: string;
  href: string;
}

export interface ISearchResult {
  cfi: string;
  excerpt: string;    
};

interface INavigation {
  direction: string;
  searchPosition: number;
}

export interface ITheme {
  color: string;
  fontSize: number;
}

interface INavigationProps {
  currentChapter: number;
  pageNoInChapter: number;
  isStartOfBook: boolean;
  isEndOfBook: boolean;
}

export interface EpubViewProps {
  resize?: boolean;
  url: string | ArrayBuffer;
  searchTerm: string;
  epubInitOptions?: BookOptions;
  epubOptions?: RenditionOptions;
  styles?: React.CSSProperties;
  loadingView?: React.ReactNode;
  location?: string | number;
  showToc?: boolean;
  currentSearchPosition?: number;
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
  onChangeSearchPosition?(position: number): void;
  onDisableNavigation?(disable: boolean): void;
}

export interface EpubReaderProps extends Omit<EpubViewProps, 'styles'> {
  title?: string;
  showToc?: boolean;
  styles?: React.CSSProperties;
  swipeable?: boolean;
  epubViewStyles?: EpubViewProps['styles'];
  onNavigation?(obj: INavigationProps): void;
}

export interface TocItemProps {
  label: string;
  href: string;
  setLocation: (href: string) => void;
  styles: any;
}
