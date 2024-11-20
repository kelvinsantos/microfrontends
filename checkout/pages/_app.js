
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div className="test">test</div>
    </>
  );
}

export default MyApp;
