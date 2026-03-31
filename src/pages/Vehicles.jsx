import { equipment, vehicles } from "../data/dummyData";

function StatusBadge({ status }) {
  const ok = ["Operational", "OK", "Active"].includes(status);
  return (
    <span style={{ padding: "4px 8px", borderRadius: 8, color: "#fff", background: ok ? "#16a34a" : "#dc2626", fontSize: 12, fontWeight: 700 }}>
      {status}
    </span>
  );
}

export default function VehiclesPage() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h2 style={{ margin: 0 }}>Vehicles</h2>

      {vehicles.map((v) => {
        const assignedTools = equipment.filter((e) => e.vehicleId === v.id);
        return (
          <article key={v.id} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <h3 style={{ margin: 0 }}>
                {v.name} ({v.id})
              </h3>
              <StatusBadge status={v.status} />
            </div>

            <div style={{ display: "grid", gap: 10 }}>
              <div>
                <strong>Assigned ERAs:</strong> {v.assignedEraIds.join(", ")}
              </div>

              <div>
                <strong>Assigned Tools</strong>
                <div style={{ display: "grid", gap: 8, marginTop: 8 }}>
                  {assignedTools.map((t) => (
                    <div key={t.id} style={{ display: "flex", justifyContent: "space-between", background: "#f8fafc", borderRadius: 8, padding: "8px 10px" }}>
                      <span>
                        {t.name} ({t.id})
                      </span>
                      <StatusBadge status={t.status} />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <strong>Fluid Control</strong>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 8, marginTop: 8 }}>
                  {Object.entries(v.fluids).map(([fluid, data]) => (
                    <div key={fluid} style={{ background: "#f8fafc", padding: 10, borderRadius: 8 }}>
                      <div style={{ fontWeight: 700, textTransform: "capitalize" }}>{fluid}</div>
                      <div style={{ margin: "6px 0" }}>
                        <StatusBadge status={data.status} />
                      </div>
                      <small style={{ color: "#475569", display: "block" }}>Date: {data.date}</small>
                      <small style={{ color: "#475569", display: "block" }}>Obs: {data.observations}</small>
                      <small style={{ color: "#475569", display: "block" }}>User: {data.user}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
