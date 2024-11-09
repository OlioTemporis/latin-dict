import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header>
        <Link to={`/`}>
          <h1>Latin Dictionary</h1>
        </Link>
      </header>
      <main>
        <section>Searchbar goes here</section>
        <section>
          <Outlet />
        </section>
      </main>
      <footer>
        <Link to={`/words/carptim`}>Footer</Link>
      </footer>
    </>
  );
}
