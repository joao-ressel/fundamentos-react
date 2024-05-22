import { Post } from "./Post";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, aperiam obcaecati itaque tempore inventore ullam velit, commodi doloremque ipsum, voluptatem cumque hic natus blanditiis vero illo maxime asperiores sint rem."
          />
          <Post
            author="Maria da Silva"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, aperiam obcaecati itaque tempore inventore ullam velit, commodi doloremque ipsum, voluptatem cumque hic natus blanditiis vero illo maxime asperiores sint rem."
          />
        </main>
      </div>
    </>
  );
}
