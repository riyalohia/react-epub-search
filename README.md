# React Epub Search

An ePub-reader for react intergrated with search powered by EpubJS #react #epubjs #webpack #babel #standardjs

[Inspiration](https://github.com/gerhardsletten/react-reader)

## React wrapper for EpubJS

React Reader is a react-wrapper for [epub.js](https://github.com/futurepress/epub.js).

## About

[epub.js](https://github.com/futurepress/epub.js) is a great library and this is a wrapper for it intergated with search. This wrapper makes it easy to use in a React-app.

This package publish 4 named exports:

- EpubReader - Most used, a basic epub-reader to embed into your webapp
- EpubView - Underlaying epub-canvas (wrapper for epub.js iframe)

## Basic usage

`npm install react-epub-search --save`

```js
import React, { useState } from 'react'
import { EpubReader } from 'react-epub-search'

const App = () => {
  // And your own state logic to persist state
  const [location, setLocation] = useState(null)
  const locationChanged = epubcifi => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi)
  }
  return (
    <div style={{ height: '100vh' }}>
      <EpubReader
        location={location}
        locationChanged={locationChanged}
        url="https://react-reader.metabits.no/files/alice.epub"
      />
    </div>
  )
}

export default App
```
### Handling Search Results

```js
const App = () => {
  // And your own state logic to persist state
  const [location, setLocation] = useState(null)
  const locationChanged = epubcifi => {
    setLocation(epubcifi)
  }
  const onChangeSearchResults = (result) => console.log(results);

  return (
    <div style={{ height: '100vh' }}>
      <EpubReader
        location={location}
        locationChanged={locationChanged}
        onChangeSearchResults={onChangeSearchResults}
        url="https://react-reader.metabits.no/files/alice.epub"
      />
    </div>
  )
}
```

Other Functionalities:
1. Theme (Light/Dark)
2. Theme Change (Color and Font Size)
3. Reset Reader (Used for toggle theme) (Bug of EpubJS)
4. navigationChangehandler (Used for right-left arrow keys)
5. Image Click
