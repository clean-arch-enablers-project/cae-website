import styled from "styled-components";

export const Header = styled.header`
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

export const Logo = styled.a`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
`;

export const Links = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: end;
`

export const Block = styled.div`
  height: 60px;
`