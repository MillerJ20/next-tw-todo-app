import { Navbar } from "./Navbar"

export const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen font-apple">
      <div className="h-24 absolute top-0 left-0 w-screen">
        <Navbar />
      </div>
      <div className="mt-24">
        {children}
      </div>
    </div>
  )
}
