import { Outlet, Link, Form } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";
import Searchbar from "../components/searchbar";

export default function Root() {
  return (
    <>
      <div className="flex flex-col min-h-screen font-serif dark:bg-gray-800">
        <Header />
        <main className="flex-grow">
          <section>
            <Searchbar />
          </section>
          <section className="py-8">
            <Outlet />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
