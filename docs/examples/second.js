import React, { Component } from 'react'
import styled from 'styled-components'
import { View, Flex } from '../../src/flex'

const Sidebar = styled.div`
  width: 50px;
  background: #222;
  box-shadow: -2px 0 2px 0 rgba(0,0,0,0.08);
`

const Header = styled.div`
  height: 50px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.08);
`

const Footer = styled.div`
  padding: 0 5px;
  height: 30px;
  line-height: 30px;
  box-shadow: 0 -2px 2px 0 rgba(0,0,0,0.08);
`

const Tweet = styled.div`
  padding: 5px;
  border-bottom: 1px solid rgba(0,0,0,0.08);
`

const Container = styled.div`
  margin-left: 50px;
  height: 200px;
  width: 300px;
  border: 2px solid rgba(0,0,0,0.2);
  box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.1);
`

const TwitterFeed = () =>
  <View>
    <Flex>
      <View column>
        <Header>{`I'm the header and naturally fill the vertical space I need`}</Header>
        <Flex scroll>
          <Tweet>These tweets</Tweet>
          <Tweet>are in a flexed</Tweet>
          <Tweet>container that</Tweet>
          <Tweet>naturually takes</Tweet>
          <Tweet>the remaining space</Tweet>
          <Tweet>and then scrolls</Tweet>
          <Tweet>and then scrolls</Tweet>
          <Tweet>and then scrolls</Tweet>
        </Flex>
        <Footer>47 new tweets</Footer>
      </View>
    </Flex>
    <Sidebar />
  </View>

export default () =>
  <View>
    <Flex>
      <p>
        {'The `View` and `Flex` components are basic styled components setup with css defaults for the most common layout situations for desktop/mobile app development. `View` defaults to filling 100% of horizontal and vertical space, and `Flex` defaults to a flex value of `1 1 0%`.'}
      </p>
    </Flex>
    <Container>
      <TwitterFeed />
    </Container>
  </View>
