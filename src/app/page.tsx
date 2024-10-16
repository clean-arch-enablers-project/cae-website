'use client'

import { HeaderComponent } from '@/components/header'
import {
  Content,
  PageWrapper,
  Title,
  TopContent,
  Buttons,
  MidContent
} from './style'
import { FooterComponent } from '@/components/footer'
import { ButtonComponent } from '@/components/button'
import { CardComponent } from '@/components/card'

export default function Home() {
  return (
    <PageWrapper>
      <HeaderComponent />
      <Content>
        <TopContent>
          <Title>
            enjoy the best of <br />
            clean architecture with <span className="cae">c</span>æ.
          </Title>
          <Buttons>
            <ButtonComponent href="/">Get Started</ButtonComponent>
            <ButtonComponent href="/">Learn CAE</ButtonComponent>
          </Buttons>
        </TopContent>
        <MidContent>
          <CardComponent
            title="Card's title"
            description="Card's description"
            width="500px"
            height="200px"
          ></CardComponent>
        </MidContent>
      </Content>
      <FooterComponent />
    </PageWrapper>
  )
}
