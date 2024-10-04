import { AnchorComponent } from "../anchor";
import { Column, Footer, Gap, Row, Title } from "./styles";

export function FooterComponent() {
  return (
    <Footer>
      <div>
        <Row>
          <Title>Framework</Title>
        </Row>
        <Gap />
        <Column>
          <AnchorComponent href="/docs/install">Get Started</AnchorComponent>
          <AnchorComponent href="/docs/why-cae">Why cae?</AnchorComponent>
          <AnchorComponent href="/docs/cli">CLI Commands</AnchorComponent>
        </Column>
      </div>
      <div>
        <Row>
          <Title>Community</Title>
        </Row>
        <Gap />
        <Column> 
          <AnchorComponent href="https://github.com/orgs/clean-arch-enablers-project/discussions">Discussions</AnchorComponent>
          <AnchorComponent href="https://github.com/clean-arch-enablers-project/cae-website">GitHub</AnchorComponent>
        </Column>
      </div>
    </Footer>
  );
}
