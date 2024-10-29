import "./style.css";
import { Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../../data";
import QueryLink from "../../components/QueryLink";

function Invoices() {
  const invoices = getInvoices();

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
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
            <QueryLink
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              className={({ isActive }: any) => (isActive ? "nav-red" : "nav-blue")}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </QueryLink>
          ))}
        </nav>
        <Outlet />
      </div>
    </>
  );
}

export default Invoices;
