import Contact from "../../../Component/Contact";
import Do from '../../../Component/Do';
import Hero from '../../../Component/Hero';
import Project from '../../../Component/Project';
import Reviews from '../../../Component/Reviews';
import Skills from "../../../Component/Skills";
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Do />
      <Skills />
      <Project />
      <Reviews />
      <Contact />
    </main>
  )
}
