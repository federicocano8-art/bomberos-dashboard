import { checklistResults, maintenanceLogs, vehicles } from "../data/dummyData";
import { downloadCsv } from "../utils/exportCsv";
import { downloadPdfReport } from "../utils/exportPdf";

export default function ReportsPage() {
  const checklistRows = checklistResults.map((r) => ({
    id: r.id,
    checklistId: r.checklistId,
    status: r.status,
    dueDate: r.dueDate,
    completedAt: r.completedAt || "",
    user: r.user,
  }));

  const vehicleControlRows = vehicles.flatMap((v) =>
    Object.entries(v.fluids).map(([fluid, data]) => ({
      vehicleId: v.id,
      vehicleName: v.name,
      fluid,
      status: data.status,
      date: data.date,
      observations: data.observations,
      user: data.user,
    }))
  );

  const eraHistoryRows = maintenanceLogs.map((log) => ({
    id: log.id,
    eraId: log.eraId,
    type: log.type,
    date: log.date,
    description: log.description,
    user: log.user,
  }));

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h2 style={{ margin: 0 }}>Export Reports (CSV / PDF)</h2>

      <section style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, display: "grid", gap: 10 }}>
        <button onClick={() => downloadCsv("checklists_report.csv", checklistRows)} style={buttonStyle}>Download Checklists CSV</button>
        <button onClick={() => downloadCsv("vehicle_controls_report.csv", vehicleControlRows)} style={buttonStyle}>Download Vehicle Controls CSV</button>
        <button onClick={() => downloadCsv("era_history_report.csv", eraHistoryRows)} style={buttonStyle}>Download ERA History CSV</button>
      </section>

      <section style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
        <button
          onClick={() =>
            downloadPdfReport("Fire Department Report", [
              { title: "Checklist Results", content: JSON.stringify(checklistRows, null, 2) },
              { title: "Vehicle Controls", content: JSON.stringify(vehicleControlRows, null, 2) },
              { title: "ERA History", content: JSON.stringify(eraHistoryRows, null, 2) },
            ])
          }
          style={buttonStyle}
        >
          Download PDF Report
        </button>
      </section>
    </div>
  );
}

const buttonStyle = {
  border: "none",
  background: "#0f172a",
  color: "#fff",
  padding: "10px 12px",
  borderRadius: 8,
  fontWeight: 700,
  cursor: "pointer",
};
