<img src='https://github.com/opvs/flexkit/blob/master/assets/fk_logo.png?raw=true' height='100'>

## Flexkit
[![Build Status](https://travis-ci.org/opvs/flexkit.svg?branch=master)](https://travis-ci.org/opvs/flexkit)
<span class="badge-npmversion"><a href="https://npmjs.org/package/flexkit" title="View this project on NPM"><img src="https://img.shields.io/npm/v/flexkit.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/flexkit" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/flexkit.svg" alt="NPM downloads" /></a></span>

Dead-simple layout helpers for React applications.

>> _This project is still experimental!_

#### Installation
```sh
yarn add flexkit
```

#### Layout
The `View` and `Flex` components are basic styled components setup with css defaults for the most common layout situations for desktop/mobile app development. `View` defaults to filling 100% of horizontal and vertical space, and `Flex` defaults to a flex value of `1 1 0%`.

##### Usage
```js
import { View, Flex } from 'flexkit'

const TwitterFeed = () =>
  <View column>
    <header>{`I'm the header and naturally fill the vertical space I need`}</header>
    <Flex scroll>
      <Tweet message='These tweets' />
      <Tweet message='are in a flexed' />
      <Tweet message='container that' />
      <Tweet message='naturually takes' />
      <Tweet message='the remaining space' />
      <Tweet message='and then scrolls' />
    </Flex>
    <footer>{`I'm the footer and naturally fill the vertical space I need`}</footer>
  </View>
```

#### Table
The `Table` component makes advanced column behaviour and layouts that break typical table semantics very simple. Columns can have min/max/fixed/flex widths, and can be dropped at breakpoints. These options are configured with props and require no configuration with user written row and cell components. The `Table` component takes its containers height and has a header and footer that stay fixed to the top and bottom of the container when the contents scrolls.

>> _Work in progress_

