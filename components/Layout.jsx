import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="absolute bg-gradient-to-t from-slate-900 to-indigo-900">
      <div className="h-screen w-screen font-apple">
        <div className="h-24 absolute top-0 left-0 w-screen">
          <Navbar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
