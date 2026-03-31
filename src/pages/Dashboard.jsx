import { activityLog, checklistResults, equipment, eras, vehicles } from "../data/dummyData";
import { generateAlerts } from "../lib/alertsEngine";
import { buildKpis } from "../lib/kpi";

function StatusPill({ value }) {
  const ok = String(value).toLowerCase().includes("ok") || value === "Operational" || value === "Active";
  return (
    <span
      style={{
        padding: "4px 8px",
        borderRadius: 8,
        fontWeight: 700,
        fontSize: 12,
        color: "#fff",
        background: ok ? "#16a34a" : "#dc2626",
      }}
    >
      {value}
    </span>
  );
}

export default function Dashboard() {
  const alerts = generateAlerts({ vehicles, equipment, eras, checklistResults });
  const kpis = buildKpis({ vehicles, equipment, eras, alerts });

  const cards = [
    { label: "Vehicles", value: kpis.vehicles },
    { label: "Equipment", value: kpis.equipment },
    { label: "ERAs", value: kpis.eras },
    { label: "Alerts", value: kpis.alerts },
  ];

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h2 style={{ margin: 0 }}>Dashboard</h2>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: 12 }}>
        {cards.map((card) => (
          <article key={card.label} style={{ background: "#fff", borderRadius: 12, padding: 16, border: "1px solid #e5e7eb" }}>
            <div style={{ color: "#475569", fontSize: 13 }}>{card.label}</div>
            <div style={{ fontSize: 28, fontWeight: 800 }}>{card.value}</div>
          </article>
        ))}
      </section>

      <section style={{ background: "#fff", borderRadius: 12, padding: 16, border: "1px solid #e5e7eb" }}>
        <h3 style={{ marginTop: 0 }}>Critical Alerts</h3>
        <div style={{ display: "grid", gap: 8 }}>
          {alerts.slice(0, 6).map((a) => (
            <div key={a.id} style={{ display: "flex", justifyContent: "space-between", padding: "10px 12px", background: "#fef2f2", borderRadius: 8 }}>
              <div>{a.message}</div>
              <StatusPill value={a.severity === "critical" ? "NOT OK" : "Alert"} />
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#fff", borderRadius: 12, padding: 16, border: "1px solid #e5e7eb" }}>
        <h3 style={{ marginTop: 0 }}>Activity Log</h3>
        <div style={{ display: "grid", gap: 8 }}>
          {activityLog.map((entry) => (
            <div key={entry.id} style={{ borderLeft: "4px solid #2563eb", paddingLeft: 10 }}>
              <div style={{ fontWeight: 600 }}>{entry.message}</div>
              <small style={{ color: "#64748b" }}>
                {entry.date} • {entry.user}
              </small>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
