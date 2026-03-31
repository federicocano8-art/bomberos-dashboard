import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import VehiclesPage from "./pages/Vehicles";
import ErasPage from "./pages/Eras";
import ChecklistsPage from "./pages/Checklists";
import AlertsPage from "./pages/Alerts";
import ReportsPage from "./pages/Reports";

const navItems = [
  { to: "/", label: "Dashboard" },
  { to: "/vehicles", label: "Vehicles" },
  { to: "/eras", label: "ERAs" },
  { to: "/checklists", label: "Checklists" },
  { to: "/alerts", label: "Alerts" },
  { to: "/reports", label: "Export" },
];

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", background: "#f5f7fb", color: "#111" }}>
        <header style={{ background: "#0f172a", color: "#fff", padding: "12px 20px" }}>
          <h1 style={{ margin: 0, fontSize: 20 }}>Fire Department Management</h1>
        </header>

        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            padding: "12px 20px",
            borderBottom: "1px solid #e5e7eb",
            background: "#fff",
          }}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={({ isActive }) => ({
                textDecoration: "none",
                padding: "8px 12px",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 14,
                color: isActive ? "#fff" : "#0f172a",
                background: isActive ? "#0f172a" : "#e2e8f0",
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <main style={{ padding: 20 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/vehicles" element={<VehiclesPage />} />
            <Route path="/eras" element={<ErasPage />} />
            <Route path="/checklists" element={<ChecklistsPage />} />
            <Route path="/alerts" element={<AlertsPage />} />
            <Route path="/reports" element={<ReportsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
