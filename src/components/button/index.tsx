import styled from 'styled-components'

type TButtonInput = {
  href: string
  children?: React.ReactNode
  className?: string
}

const Button = styled.button`
  color: #fff;
  background-color: #000;
  border: solid 2px #fff;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  padding: 15px 20px;
  font-weight: 900;
  font-size: 14px;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`

export function ButtonComponent({ href, children, className }: TButtonInput) {
  return (
    <Button className={className} onClick={() => (location.href = href)}>
      {children}
    </Button>
  )
}
