"use client"

import { HeaderComponent } from "@/components/header";
import { MainContent, PageWrapper, Title } from "./page.module";
import { FooterComponent } from "@/components/footer";

export default function Home() {

  return (
    <PageWrapper>
      <HeaderComponent />
      <MainContent>
        <Title>Hello World, CAE</Title>
      </MainContent>
      <FooterComponent /> 
    </PageWrapper>
  );
}
