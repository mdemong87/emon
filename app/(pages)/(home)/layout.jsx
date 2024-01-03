import { Poppins } from 'next/font/google';
import Container from '../../../Component/Container';
import Footer from '../../../Component/Footer';
import Header from '../../../Component/Header';
import SmoothScroll from '../../../Component/SmoothScroll';
import '../../globals.css';


const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Md Emon Hossen',
  description: 'My name is Md Emon Hossen.Fontend Engineer.I have a passion for building beautiful, responsive, and user-friendly websites that provide an exceptional user experience.I enjoy keeping up-to-date with the latest web development trends and technologies and continuously strive to improve my skills and knowledge.',
  keywords: ["web developer", 'web designer', 'frontend developer', 'frontend engineer', 'mren stack', "emon"],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://emonhossen.xyz',
    site_name: 'Md Emon Hossen',
  }
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
