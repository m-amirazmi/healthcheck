import styles from "../styles/home.module.scss";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Visitor</title>
      </Head>
      <div className={styles.__container}>
        <div>
          <h1>Visitor Pages</h1>
        </div>
        <div className={styles.__links}>
          <Link href="/user">
            <a>User</a>
          </Link>
          <Link href="/clinic">
            <a>Clinic</a>
          </Link>
          <Link href="/admin">
            <a>Admin</a>
          </Link>
        </div>
      </div>
    </>
  );
}
