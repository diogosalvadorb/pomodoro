import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading/Index';
import { Container } from './components/Container/Index';
import { Logo } from './components/Logo';

export function App() {
  return (
    <>
      <Container>
        <Logo/>
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  ); 
}
