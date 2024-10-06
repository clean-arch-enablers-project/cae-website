'use client'

import { HeaderComponent } from '@/components/header'
import {
  Content,
  ButtonGetStarted,
  PageWrapper,
  Title,
  TopContent,
  Buttons,
  ButtonLearnCae
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
            <ButtonGetStarted href="/">Get Started</ButtonGetStarted>
            <ButtonLearnCae href="/">Learn CAE</ButtonLearnCae>
          </Buttons>
        </TopContent>
      </Content>
      <FooterComponent />
    </PageWrapper>
  )
}
