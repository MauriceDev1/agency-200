import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return <div className="md:p-4 md:max-w-xl mx-auto h-screen">{children}</div>;
}

export default Layout;
