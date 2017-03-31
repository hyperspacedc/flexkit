<img src='https://github.com/opvs/flexkit/blob/master/fk_logo.png?raw=true' height='100'>

## Flexkit [![Build Status](https://travis-ci.org/opvs/flexkit.svg?branch=master)](https://travis-ci.org/opvs/flexkit)

Dead-simple flexbox helper components for React.

#### Installation
```sh
yarn add flexkit
```

#### Overview

##### Layout
The `DisplayFlex` and `Flex` components are basic pass-through components setup with css defaults for the most common layout situations for desktop/mobile app development. `DisplayFlex` defaults to filling 100% of horizontal and vertical space, and `Flex` defaults to a flex value of `1 1 0%`. When inside a `flex-column`, `Flex` will default to `overflow: auto` for the scrolling behaviour one would expect.

##### Table
The `Table` component makes advanced column behaviour and layouts that break typical table semantics very simple. Columns can have min/max/fixed/flex widths, and can be dropped at breakpoints. These options are configured with props and require no configuration with user written row and cell components. The `Table` component takes its containers height and has a header and footer that stay fixed to the top and bottom of the container when the contents scrolls.

#### Usage
```js
import { DisplayFlex, Flex } from 'flexkit'

const TwitterFeed = () =>
  <div style={{height: '100vh'}}>
    <DisplayFlex column>
      <header>I'm the header and naturally fill the vertical space I need</header>
      <Flex>
        <Tweet message='These tweets' />
        <Tweet message='are in a flexed' />
        <Tweet message='container that' />
        <Tweet message='naturually takes' />
        <Tweet message='the remaining space' />
        <Tweet message='and then scrolls' />
        ...
      </Flex>
      <footer>I'm the footer and naturally fill the vertical space I need</footer>
    </DisplayFlex>
  </div>
```
