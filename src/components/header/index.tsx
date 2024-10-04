import { Fragment } from "react";
import { Block, Header, Links, Logo } from "./styles";
import { AnchorComponent } from "../anchor";

export function HeaderComponent() {
  return (
    <Fragment>
      <Header>
        <Logo>cae</Logo>
        <Links>
          <AnchorComponent href="/home">Home</AnchorComponent>
          <AnchorComponent href="/docs">Documentation</AnchorComponent>
          <AnchorComponent href="/community">Community</AnchorComponent>
        </Links>
      </Header>
      <Block />
    </Fragment>
  );
}
