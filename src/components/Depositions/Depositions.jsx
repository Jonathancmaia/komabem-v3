import { Row, Col, Container } from 'react-bootstrap'
import './style.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const feedbackData = [
  {
    name: 'João Silva',
    feedback: 'Excelente atendimento! Muito satisfeito com o serviço.',
  },
  {
    name: 'Maria Oliveira',
    feedback: 'Ótimo produto, entrega rápida.',
  },
  {
    name: 'Lucas Santos',
    feedback: 'Equipe muito profissional e prestativa.',
  },
  {
    name: 'Carla Pereira',
    feedback: 'Qualidade superior. Recomendo a todos!',
  },
  {
    name: 'Pedro Souza',
    feedback: 'Impressionante. Superou minhas expectativas.',
  },
]

    var settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
    }
  function SampleNextArrow(props) {
    // eslint-disable-next-line react/prop-types
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#211E30", borderRadius: "1rem" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    // eslint-disable-next-line react/prop-types
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#211E30", borderRadius: "1rem" }}
        onClick={onClick}
      />
    );
  }



export default function Depositions() {
  return (
    <Row id="depositions" className="bg-light">
      <Col>
        <Row>
          <Col className="fs-4 fw-light text-center mt-4">
            O que dizem por aí
          </Col>
        </Row>
        <Row>
          <Col className="fs-1 fw-bolder text-center text-brown">
            Depoimentos
          </Col>
        </Row>

          <Col>
            <Container className="carousel">
              <Slider {...settings}>
                {feedbackData.map((feedback, index) => (
                  <div key={index}>
                        <div className="feedback-balloon fw-bold">
                          <p>&quot;{feedback.feedback}&quot;</p>
                        </div>
                        <p className="namefeedback">
                          {feedback.name}
                        </p>
                  </div>
                ))}
              </Slider>
            </Container>
          </Col>
      </Col>
    </Row>
  )
}
