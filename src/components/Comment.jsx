import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";

export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <img src="http://github.com/joao-ressel.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Carlos</strong>
              <time
                title="23 de de maio às 07:44h"
                dateTime="2024-05-23 07:44:12"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar">
                <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
            <button> <ThumbsUp/> Aplaudir <span>20</span> </button>
        </footer>
      </div>
    </div>
  );
}
