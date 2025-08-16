import Header from "@/components/header"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <div>
        <main className=" px-4 py-4 min-h-screen min-w-screen container">
            <Header />
            <Outlet />
        </main>

        <div className="p-10 text-center bg-gray-800 mt-10">
          Made with 💖 by Deepanshu Rohilla
        </div>
    </div>
  )
}

export default AppLayout