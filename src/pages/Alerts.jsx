import { checklistResults, equipment, eras, vehicles } from "../data/dummyData";
import { generateAlerts } from "../lib/alertsEngine";

function SeverityBadge({ severity }) {
  const color = severity === "critical" ? "#991b1b" : severity === "high" ? "#dc2626" : "#f59e0b";
  return <span style={{ color: "#fff", background: color, borderRadius: 8, padding: "4px 8px", fontSize: 12, fontWeight: 700 }}>{severity}</span>;
}

export default function AlertsPage() {
  const alerts = generateAlerts({ vehicles, equipment, eras, checklistResults });

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h2 style={{ margin: 0 }}>Alerts</h2>
      <section style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
        <div style={{ display: "grid", gap: 10 }}>
          {alerts.map((alert) => (
            <article key={alert.id} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 10, background: "#fef2f2", padding: 10, borderRadius: 8 }}>
              <div>
                <div style={{ fontWeight: 700 }}>{alert.message}</div>
                <small style={{ color: "#475569" }}>
                  {alert.type} • {alert.source}:{alert.sourceId} • {alert.date}
                </small>
              </div>
              <SeverityBadge severity={alert.severity} />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
