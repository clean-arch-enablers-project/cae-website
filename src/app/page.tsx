'use client'

import { HeaderComponent } from '@/components/header'
import { Content, PageWrapper, Title, TopContent, Buttons } from './style'
import { FooterComponent } from '@/components/footer'
import { ButtonComponent } from '@/components/button'

export default function Home() {
  return (
    <PageWrapper>
      <HeaderComponent />
      <Content>
        <TopContent>
          <Title>
            enjoy the best of <br />
            clean architecture with CAE.
          </Title>
          <Buttons>
            <ButtonComponent href="/">Get Started</ButtonComponent>
            <ButtonComponent href="/">Learn CAE</ButtonComponent>
          </Buttons>
        </TopContent>
      </Content>
      <FooterComponent />
    </PageWrapper>
  )
}
