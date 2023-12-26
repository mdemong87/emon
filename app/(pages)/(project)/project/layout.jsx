import Container from '../../../../Component/Container';
import '../../../globals.css';


export default function ProjectLayout({ children }) {

  return (
    <div>
      <Container>
        {children}
      </Container>
    </div>
  )
}
