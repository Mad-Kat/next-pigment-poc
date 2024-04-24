import styles from "./page.module.css";
import { styled } from "@pigment-css/react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Title>Title</Title>
    </main>
  );
}

const Title = styled.h1`
  font-size: 2rem;
`;
