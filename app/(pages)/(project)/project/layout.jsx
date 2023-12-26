import { Poppins } from 'next/font/google';
import Container from '../../../../Component/Container';
import '../../../globals.css';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});



export default function ProjectLayout({ children }) {

  return (
    <html>
      <body className={poppins.className}>
      <Container>
        {children}
      </Container>  
      </body>
    </html>
  )
}
