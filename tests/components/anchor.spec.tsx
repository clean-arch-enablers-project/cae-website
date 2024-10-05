import { AnchorComponent } from "@/components/anchor";

describe("AnchorComponent", () => {
  it("should render correctly", () => {
    cy.mount(<AnchorComponent href="/hi">hi</AnchorComponent>);

    cy.get("a").should("have.attr", "href", "/hi");
    cy.get("a").should("have.text", "hi");
  });

  it("should render with className", () => {
    cy.mount(<AnchorComponent href="/hi" className="test">hi</AnchorComponent>);

    cy.get("a").should("have.class", "test");
  })
});
