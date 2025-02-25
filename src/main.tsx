import ReactDOM from "react-dom/client";

import translations from "@shopify/polaris/locales/en.json";
import { Frame, AppProvider as PolarisProvider } from "@shopify/polaris";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals.ts";

// const config = {
//   forceRedirect: new URLSearchParams(window.location.search).get("admin") !== "1",
//   apiKey: import.meta.env.VITE_SHOPIFY_APP_CLIENT_ID ?? "",
//   host: new URLSearchParams(window.location.search).get("host") as string
// };

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <PolarisProvider i18n={translations}>
    <Frame>
      <App />
    </Frame>
  </PolarisProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
