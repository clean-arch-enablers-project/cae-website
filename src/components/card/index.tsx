import styled from 'styled-components'

type TCardInput = {
  title: string
  description: string
  image_url?: string
  height?: string
  width?: string
  children?: React.ReactNode
  className?: string
}

const Card = styled.div<{ $heightP?: string; $widthP?: string }>`
  width: ${({ $widthP }) => $widthP || '100px'};
  height: ${({ $heightP }) => $heightP || '100px'};
  padding: 20px;
  border-radius: 10px;
  border: solid 2px #fff;
  background: linear-gradient(to right, #010101, #0b0b0b, #101010);
`

export function CardComponent({
  title,
  description,
  image_url,
  height,
  width,
  children,
  className
}: TCardInput) {
  return (
    <Card className={className} $heightP={height} $widthP={width}>
      <img src={image_url} />
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </Card>
  )
}
