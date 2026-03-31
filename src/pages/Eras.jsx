import { maintenanceLogs, eras, vehicles } from "../data/dummyData";

function StatusBadge({ status }) {
  const ok = status === "Active";
  return (
    <span style={{ padding: "4px 8px", borderRadius: 8, color: "#fff", background: ok ? "#16a34a" : "#dc2626", fontSize: 12, fontWeight: 700 }}>
      {status}
    </span>
  );
}

export default function ErasPage() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h2 style={{ margin: 0 }}>ERAs (Breathing Apparatus)</h2>

      {eras.map((era) => {
        const logs = maintenanceLogs.filter((l) => l.eraId === era.id);
        const vehicle = vehicles.find((v) => v.id === era.vehicleId);

        return (
          <article key={era.id} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <h3 style={{ margin: 0 }}>{era.id}</h3>
              <StatusBadge status={era.status} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 8, marginBottom: 12 }}>
              <div><strong>Brand:</strong> {era.brand}</div>
              <div><strong>Model:</strong> {era.model}</div>
              <div><strong>Serial:</strong> {era.serial}</div>
              <div><strong>Pressure:</strong> {era.pressure} bar</div>
              <div><strong>Last Maint.:</strong> {era.lastMaintenance}</div>
              <div><strong>Next Maint.:</strong> {era.nextMaintenance}</div>
              <div><strong>Assigned Vehicle:</strong> {vehicle ? vehicle.name : "Unassigned"}</div>
            </div>

            <div>
              <strong>Logbook</strong>
              <div style={{ display: "grid", gap: 8, marginTop: 8 }}>
                {logs.map((log) => (
                  <div key={log.id} style={{ background: "#f8fafc", borderRadius: 8, padding: "8px 10px" }}>
                    <div style={{ fontWeight: 700, textTransform: "capitalize" }}>{log.type}</div>
                    <div>{log.description}</div>
                    <small style={{ color: "#64748b" }}>
                      {log.date} • {log.user}
                    </small>
                  </div>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
