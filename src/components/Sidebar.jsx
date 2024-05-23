import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from "@phosphor-icons/react";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://media.licdn.com/dms/image/D4D16AQHH8fH9ZiRc2w/profile-displaybackgroundimage-shrink_350_1400/0/1676077988054?e=1721865600&v=beta&t=oBQJ23219M3sAti-AS1i_dCDm-jud1FQ4CIkxpocG5A"
      />
      <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/joao-ressel.png" />
        <strong>João Carlos</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
