import styles from "./page.module.css";
import { css, styled } from "@pigment-css/react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Title>Title</Title>
      <h2 className={visuallyHidden}>VisuallyHidden</h2>
      <h2 className={visuallyHidden2}>VisuallyHidden2</h2>
    </main>
  );
}

const visuallyHidden = css({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
});

const visuallyHidden2 = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Title = styled.h1`
  font-size: 2rem;
`;
