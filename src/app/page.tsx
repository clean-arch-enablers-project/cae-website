"use client"


import { HeaderComponent } from "@/components/header";
import { Title } from "./page.module";
import { FooterComponent } from "@/components/footer";

export default function Home() {

  return (
    <div>
      <HeaderComponent />
      <Title>Hello World, Cae</Title>
      <FooterComponent /> 
    </div>
  );
}
