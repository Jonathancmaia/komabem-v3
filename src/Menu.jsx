import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap'
import ListItems from './components/ListItems/ListItems'
import { useState, useEffect } from 'react'
import NavbarMenu from './components/NavbarMenu/NavbarMenu'

export default function Menu() {
  const [itemsClass, setItemsClass] = useState(false)
  const [classType, setClassType] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container fluid>
      <NavbarMenu />

      <Row className="bg-dark text-light p-3 d-flex align-items-center">
        <Col
          role="button"
          className="fw-bolder fs-3 text-warning text-center"
          md={6}
          onClick={() => {
            setItemsClass(false)
          }}
        >
          Todos os Produtos
        </Col>
        <Col
          role="button"
          className="small text-center p-1 fw-bold"
          md={2}
          onClick={() => {
            setItemsClass('Linha Individual')
          }}
        >
          Linha Tradicional
        </Col>
        <Col
          role="button"
          className="small text-center p-1 fw-bold"
          md={2}
          onClick={() => {
            setItemsClass('Linha Tradicional')
          }}
        >
          Tradicional - 2 pessoas
        </Col>
        <Col
          role="button"
          className="small text-center p-1 bg-warning text-danger fw-bolder rounded"
          onClick={() => {
            setItemsClass('Combinados Komabem')
          }}
          md={2}
        >
          Combinados Komabem
        </Col>
      </Row>

      <Row>
        <Col>
          <ListItems
            key={`${itemsClass}-${classType}`}
            itemsClass={itemsClass}
            classType={classType}
          />
        </Col>
      </Row>
    </Container>
  )
}
