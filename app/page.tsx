import styles from "./page.module.css";
import { css, styled } from "@pigment-css/react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Title isError>Title</Title>
      <Title2>
        Title2
        <P>PTest</P>
      </Title2>
      <Heading isError={true}>Heading</Heading>
      <Brandheader>Brandheader</Brandheader>
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
  color: "orange",
});

const Heading = styled("h1")({
  color: ({ isError }) => (isError ? "red" : "black"),
});

const Brandheader = styled("h1")(({ theme }) => ({
  color: theme.vars.colors.brand,
}));

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
  color: orange;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ isError }) => (isError ? "blue" : "green")};
`;

const P = styled("p")({
  color: "red",
});

const Title2 = styled(Title)({
  color: "orange",
  marginTop: "1rem",
  [`& ${P}`]: {
    "@media (min-width: 768px)": {
      color: "violet",
    },
  },
});
