import styled from "styled-components";

type TAnchorInput = {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Anchor = styled.a`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: #f1f1f1;
  }
`

export function AnchorComponent({ href, children, className }: TAnchorInput) {
  return <Anchor href={href} className={className}>{children}</Anchor>
} 