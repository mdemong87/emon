import { Poppins } from 'next/font/google';
import Container from '../Component/Container';
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import SmoothScroll from '../Component/SmoothScroll';
import './globals.css';


const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Md Emon Hossen',
  description: 'I am a Full Stack Software Developer, I provides Web & Mobile App Development services and complete technical solutions for businesses of any size and nature, My services has helped startups, companies and individuals all around the globe.',
}

export default function RootLayout({ children }) {




  return (
    <html lang="en">
      <body className={poppins.className}>
        <SmoothScroll />
        <Header />
        <Container>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  )
}
