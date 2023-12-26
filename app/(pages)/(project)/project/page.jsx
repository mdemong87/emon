import ProjectPageSingleProject from '../../../../Component/projectPage/ProjectPageSingleProject';
import style from "./projectPage.module.css";

export default function Project() {
  return (
    <section className={style.main}>
      <ProjectPageSingleProject />
    </section>
  )
}
