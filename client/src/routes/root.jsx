import { Outlet, Link } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Root() {
  return (
    <>
      <div className="flex flex-col min-h-screen font-serif dark:bg-gray-800">
        <Header />
        <main className="flex-grow">
          <section>Searchbar goes here</section>
          <section>
            <h1 className="text-2xl dark:text-white">Flowbite React + Vite</h1>
          </section>
          <section>
            <Outlet />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
