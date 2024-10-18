import { Fragment } from 'react'
import { Block, Description, Header, Links, Logo } from './styles'
import { AnchorComponent } from '../anchor'

export function HeaderComponent() {
  return (
    <Fragment>
      <Header>
        <Logo href="/">
          <h2>CAE</h2>
          <Description>
            Clean <br /> Arch Enablers
          </Description>
        </Logo>
        <Links>
          <AnchorComponent href="/docs">Documentation</AnchorComponent>
          <AnchorComponent href="/community">Community</AnchorComponent>
        </Links>
      </Header>
      <Block />
    </Fragment>
  )
}
