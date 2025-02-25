import { Outlet } from "react-router-dom";

import rootStore from "@stores/root";
import LoadingSkeleton from "@components/loading";

function PixelLayout() {
  const { shop } = rootStore();

  const render = () => {
    if (!shop) return <LoadingSkeleton />;
    if (shop.status > 0) return <Outlet />;
    return <h1>Plan Page</h1>;
  };

  return render();
}

export default PixelLayout;
