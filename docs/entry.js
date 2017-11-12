import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { View, Flex } from '../src'
import FirstExample from './examples/first'
import SecondExample from './examples/second'

const Wrapper = styled(View)`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  color: #222;
  height: 100vh;
  margin: 0 auto
`

const Sidebar = styled(Flex)`
  padding: 20px;
  border-right: 1px solid rgba(0,0,0,0.1);
`

const MenuItem = styled.a`
  fontSize: 1rem;
  display: block;
  text-decoration: none;
  color: #222;
  margin: 20px auto;

  &:hover {
    text-decoration: underline;
  }

  &.selected {
    color: blue;
  }
`

const Contents = styled.div`
  padding: 50px;
  max-width: 1200px;
`

const Logo = styled.img`
  display: block;
`

const Header = styled.h3`
  margin-bottom: 20px;
  margin-top: 0;
`

const Link = styled.a`
  text-decoration: none;
  color: #136760;
`

export const Code = styled.pre`
  display: block;
  padding: 1em 2em;
  margin: 2em 0;
  font-size: 1em;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: rgba(240,240,240,.25);
  border: 1px solid rgba(240,240,240,.25);
  border-radius: 4px;
  overflow: auto;
`

const Section = styled.section`
  margin: 20px 0 50px;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const Main = styled.main`
  flex-grow: 1;
  flex-basis: 50vw;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 40em) {
    flex: 1;
  }
`

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  font-size: .85em;
  margin-top: 3em;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Sidebar flex='0 0 150px'>
          <Logo src='https://github.com/opvs/flexkit/blob/master/fk_logo.png?raw=true' height='60' />
          <MenuItem href="#intro">Intro</MenuItem>
          <MenuItem href="#layout">Layout</MenuItem>
          <MenuItem href="#table">Table</MenuItem>
        </Sidebar>
        <Flex scroll>
          <Contents>
            <div id='intro' />
            <p>
              Dead-simple layout components for React applications.
            </p>
            <Code>
              <code>
                yarn add flexkit
              </code>
            </Code>
            <div id="layout" />
            <Header>Layout</Header>
            <Section>
              {'The `Table` component makes advanced column behaviour and layouts that break typical table semantics very simple. Columns can have min/max/fixed/flex widths, and can be dropped at breakpoints. These options are configured with props and require no configuration with user written row and cell components. The `Table` component takes its containers height and has a header and footer that stay fixed to the top and bottom of the container when the contents scrolls.'}
            </Section>
            <Section>
              <FirstExample />
            </Section>
            <Section>
              <SecondExample />
            </Section>
            <div id="table" />
            <Header>Table</Header>
            <Section>
              {'The `Table` component makes advanced column behaviour and layouts that break typical table semantics very simple. Columns can have min/max/fixed/flex widths, and can be dropped at breakpoints. These options are configured with props and require no configuration with user written row and cell components. The `Table` component takes its containers height and has a header and footer that stay fixed to the top and bottom of the container when the contents scrolls.'}
            </Section>
            <Section>
              <FirstExample />
            </Section>
            <Section>
              <SecondExample />
            </Section>
            <Header>Other</Header>
            <Footer>
              Made by <Link
                href="#">Hobbits</Link>.
            </Footer>
          </Contents>
        </Flex>
      </Wrapper>
    )
  }
}

ReactDOM.render(<App />, root)
