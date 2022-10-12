import "../../tailwindcss/style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer position="bottom-right"></ToastContainer>
    </>
  );
}

export default MyApp;
