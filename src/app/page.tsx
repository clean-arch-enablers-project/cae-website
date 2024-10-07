'use client'

import { HeaderComponent } from '@/components/header'
import {
  Content,
  Button,
  PageWrapper,
  Title,
  TopContent,
  Buttons
} from './page.module'
import { FooterComponent } from '@/components/footer'

export default function Home() {
  return (
    <PageWrapper>
      <HeaderComponent />

      <Content>
        <TopContent>
          <Title>
            CAE makes clean-architect<br></br>easy.
          </Title>
          <Buttons>
            <Button href="/">Get Started</Button>
            <Button href="/">Learn CAE</Button>
          </Buttons>
        </TopContent>
      </Content>
      <FooterComponent />
    </PageWrapper>
  )
}
