import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Expenses from "./routes/Expenses/index.tsx";
import Invoices from "./routes/Invoices/index.tsx";
import Invoice from "./routes/Invoices/Invoice/index.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} >
          <Route path=":invoiceId" element={<Invoice/>}/>
        </Route>
      </Route>
      <Route path="*"
        element={
          <main style={{padding: "1rem"}}>
            <h2>Nada encontrado</h2>
          </main>
        }/>
    </Routes>
  </BrowserRouter>
);
