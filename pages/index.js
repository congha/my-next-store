import Head from "next/head";
import styles from "../styles/Home.module.css";
import products from "../products.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to next store!</h1>

        <ul className={styles.grid}>
          {products.map((product) => {
            const { id, title, image, price } = product;
            return (
              <li key={id} className={styles.card}>
                <a>
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <p>{price}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <p>The next store - 2021.</p>
      </footer>
    </div>
  );
}
