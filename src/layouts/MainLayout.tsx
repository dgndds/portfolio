import Header from "../components/navigation/header/Header";

import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  //TODO: Add Footer

  return (
    <div>
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
