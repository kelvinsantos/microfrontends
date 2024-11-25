import Nav from "../components/nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav>
        <Component {...pageProps} />
      </Nav>
    </>
  );
}

export default MyApp;
