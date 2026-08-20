import React from "react"

import { Container } from "@/components/ui/container"
import { Title } from "@/components/ui/title"

const Template = () => {
  return (
    <Container
      id=""
      size={"full"}
      alignment={"none"}
      height={"screen"}
      padding={"px-lg"}
      gap={"none"}
      flow={"none"}
      bleed={"none"}
      centered={false}
      className=""
    >
      <Title
        font={"heading"}
        size={"9xl"}
        weight={"none"}
        tracking={"none"}
        leading={"none"}
        transform={"normal"}
        italic={false}
        margin={"none"}
        className=""
      >
        Template
      </Title>
    </Container>
  )
}

export default Template