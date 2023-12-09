import Container from 'react-bootstrap/Container';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro/Intro';
import HowWorks from './components/HowWorks/HowWorks';
import Featured from './components/Featured/Featured';
import Announce from './components/Announce/Announce';
import Depositions from './components/Depositions/Depositions';
import Footer from './components/Footer/Footer';
import NavbarMenu from './components/NavbarMenu/NavbarMenu';
import Whatsapp from "./components/Whatsapp/Whatsapp";

function App() {

  return (
    <Container fluid>
      <NavbarMenu />

      <Intro />

      <HowWorks />

      <Featured />

      <Announce />

      <Depositions />

      <Footer />

      <Whatsapp />
    </Container>
  )
}

export default App
