import { Fragment } from "react";
import styled from "styled-components";

const Header = styled.header`
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #333;
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
`;

const Links = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: end;
`

const Link = styled.a`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #f0f0f0;
  }
`

const Block = styled.div`
  height: 60px;
`

export function HeaderComponent() {
  return (
    <Fragment>
      <Header>
        <Logo>cae</Logo>
        <Links>
          <Link href="/home">Home</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/community">Community</Link>
        </Links>
      </Header>
      <Block />
    </Fragment>
  );
}
