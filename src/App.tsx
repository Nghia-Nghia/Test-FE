import { Suspense, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import "@shopify/polaris/build/esm/styles.css";

import pluginChat from "@utils/plugin-chat";
import rootStore from "@stores/root";

import GlobalCss from "./GlobalCss";
import { routes } from "./routes/routes.tsx";

function App() {
  const { getShop, shop, setIsAdmin } = rootStore();
  useEffect(() => {
    if (shop) return;
    const params = new URLSearchParams(window.location.search);
    const domain = params.get("shop") as string;

    const isAdmin = params.get("admin") === "1";

    setIsAdmin(isAdmin);

    if (!isAdmin) pluginChat.loadChatPlugin(domain);

    getShop(domain);
  }, []);
  return shop ? (
    <Suspense>
      <div className='App'>
        <GlobalCss />
        <RouterProvider router={routes} />
      </div>
    </Suspense>
  ) : null;
}

export default App;
