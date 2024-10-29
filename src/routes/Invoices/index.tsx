import "./style.css";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../../data";

function Invoices() {
  const invoices = getInvoices();

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <main style={{ padding: "1rem 0" }}>
        <h2>Invoices</h2>
      </main>
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}
        >
          <input
            value={searchParams.get("name") || ""}
            onChange={(event) => {
              const name = event.target.value;
              if (name) {
                setSearchParams({ name });
              } else {
                setSearchParams({});
              }
            }}
          />

          {invoices.filter((invoice) => {
            const name = searchParams.get("name");
            if(!name) return true;
            const filter = invoice.name.toLowerCase();
            return filter.startsWith(name.toLowerCase());
          }).map((invoice) => (
            <NavLink
              className={({ isActive }) => (isActive ? "nav-red" : "nav-blue")}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
        </nav>
        <Outlet />
      </div>
    </>
  );
}

export default Invoices;
