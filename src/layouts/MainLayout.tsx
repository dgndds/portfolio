import Header from "../components/navigation/header/Header";

import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  //TODO: Add Footer

  return (
    <div>
      <Header />
      <div className="mt-22">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
