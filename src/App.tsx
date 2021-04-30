import React from 'react'
import styled from 'styled-components'
import { Header as _Header } from './Header'
import { Column } from './Column'

export function App() {
  return (
    <Container>
      <Header />

      <MainArea>
        <HorizontalScroll>
          <Column
            title="TODO"
            cards={[
              { id: 'a', text: '朝食をとる'},
              { id: 'b', text: 'SNSをチェック'},
              { id: 'c', text: '布団に入る'},
            ]}
          />
          <Column
            title="Doing"
            cards={[
              { id: 'd', text: '顔を洗う'},
              { id: 'e', text: '歯を磨く'},
            ]}
          />
          <Column title="Waiting" cards={[]} />
          <Column
            title="Done"
            cards={[{ id: 'f', text: "布団から出る" }]}
          />
        </HorizontalScroll>
      </MainArea>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`

const Header = styled(_Header)`
  flex-shrink: 0;
`

const MainArea = styled.div`
  height: 100%;
  padding: 16px 0;
  overflow-y: auto; 
`

const HorizontalScroll = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: auto;

  > * {
    margin-left: 16px;
    flex-shrink: 0;
  }

  ::after {
    display: block;
    flex: 0 0 16px;
    content: '';
  }
`