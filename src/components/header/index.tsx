import { Fragment } from "react";
import { Block, Header, Link, Links, Logo } from "./styles";

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
