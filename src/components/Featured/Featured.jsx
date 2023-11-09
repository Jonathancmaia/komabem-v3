import './style.css'
import { Col, Row, Button, Container, Card } from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'

const pratos = [
  {
    titulo: 'Filé de Frango à Parmegiana com Purê de Batatas',
    descricao:
      'Começamos com suculentos filés de frango, delicadamente empanados e dourados até atingirem uma crocância dourada. Em seguida, são generosamente cobertos com um molho de tomate encorpado e enriquecido com queijo derretido, criando uma camada irresistível.',
    imagem:
      'https://bartman.rio.br/wp-content/uploads/2021/08/Parmegiana-de-frango.jpg',
  },

  {
    titulo: 'Filé de Frango à Milanesa com Purê de Batatas',
    descricao:
      'Acompanhando esse espetáculo crocante, temos o purê de batatas, um coadjuvante perfeito. As batatas, cozidas até a perfeição, são transformadas em um purê cremoso, enriquecido com manteiga e leite para garantir uma textura suave e indulgente.',
    imagem:
      'https://i.pinimg.com/originals/73/76/06/737606c2e197564a93921f1dd3e2bad0.jpg',
  },

  {
    titulo: 'Bife à milanesa c/ Purê de Batatas',
    descricao:
      'Esse Bife à Milanesa com Purê de Batatas é a junção perfeita de crocância e suavidade. O bife é empanado e frito até ficar dourado por fora e suculento por dentro. Ao lado, o purê de batatas cremoso completa a experiência, tornando cada garfada uma delícia reconfortante e clássica.',
    imagem:
      'https://s2.glbimg.com/QMrCxJH1Kc1wJBJwCk7Hod9BSB8=/smart/e.glbimg.com/og/ed/f/original/2017/11/09/foto_02-11-2017_12_44_53.jpg',
  },

  {
    titulo: 'Strogonoff de Frango',
    descricao:
      'Neste prato, suculentos pedaços de frango são delicadamente cozidos em um molho cremoso e rico, à base de creme de leite, mostarda e cogumelos. A combinação resulta em uma experiência indulgente que agrada tanto aos amantes de frango quanto aos apreciadores de molhos cremosos.',
    imagem:
      'https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg',
  },

  {
    titulo: 'Filé de peixe Assado ao Molho de Limão',
    descricao:
      'Filé de Peixe Assado ao Molho de Limão é uma ode à leveza e ao frescor. Os filés de peixe, cuidadosamente temperados, são assados até atingirem uma suculência perfeita.O toque estrela desse prato é o molho de limão, que adiciona uma nota cítrica e refrescante.',
    imagem:
      'https://www.receiteria.com.br/wp-content/uploads/receitas-de-molho-para-peixe-3.jpg',
  },
]

var settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1224,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

function SampleNextArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#0000',
        borderRadius: '1rem',
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#211E30',
        borderRadius: '1rem',
      }}
      onClick={onClick}
    />
  )
}

export default function Featured() {
  return (
    <Row
      id="featured"
      className="bg-dark text-light position-relative align-items-center"
    >
      <Col>
        <Row className="pt-4">
          <Col className="text-center fs-5 fw-lighter">Pratos em</Col>
        </Row>
        <Row>
          <Col className="text-center fs-1 fw-bolder text-warning">
            DESTAQUE
          </Col>
        </Row>

        <Col>
          <Container className="carousel">
            <Slider {...settings}>
              {pratos.map((prato, index) => (
                <Card
                  className="CardCarousel"
                  key={index}
                  style={{ width: '1rem', margin: '1020px' }}
                >
                  <Card.Img variant="top" src={prato.imagem} />
                  <Card.Body className="CardBody">
                    <Card.Title className="fs-2 fw-bolder">
                      {prato.titulo}
                    </Card.Title>
                    <Card.Text className="teste">{prato.descricao}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Slider>
          </Container>
        </Col>

        <Row>
          <Col className="d-flex justify-content-center p-4">
            <Button as={Link} to="/menu" variant="danger">
              Veja todos os nossos produtos
            </Button>
          </Col>
        </Row>
      </Col>

      <div className="bg-dark triangle"></div>
    </Row>
  )
}
