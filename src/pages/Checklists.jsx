import { checklistResults, checklists } from "../data/dummyData";

function StatusBadge({ status }) {
  const ok = status === "completed" || status === "OK";
  return (
    <span style={{ padding: "4px 8px", borderRadius: 8, color: "#fff", background: ok ? "#16a34a" : "#dc2626", fontSize: 12, fontWeight: 700 }}>
      {status}
    </span>
  );
}

export default function ChecklistsPage() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h2 style={{ margin: 0 }}>Checklists</h2>

      <section style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
        <h3 style={{ marginTop: 0 }}>Templates</h3>
        <div style={{ display: "grid", gap: 10 }}>
          {checklists.map((template) => (
            <div key={template.id} style={{ background: "#f8fafc", borderRadius: 8, padding: 10 }}>
              <div style={{ fontWeight: 700 }}>{template.name}</div>
              <small style={{ color: "#475569" }}>
                Type: {template.type} • Target: {template.targetType} {template.targetId}
              </small>
              <ul>
                {template.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
        <h3 style={{ marginTop: 0 }}>Checklist Results (Pending / Completed / Overdue)</h3>
        <div style={{ display: "grid", gap: 12 }}>
          {checklistResults.map((result) => (
            <article key={result.id} style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <strong>{result.id}</strong>
                <StatusBadge status={result.status} />
              </div>
              <small style={{ color: "#475569", display: "block", marginBottom: 8 }}>
                Due: {result.dueDate} • Completed: {result.completedAt || "-"} • User: {result.user}
              </small>
              <div style={{ display: "grid", gap: 6 }}>
                {result.items.map((item) => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", background: "#f8fafc", padding: "6px 8px", borderRadius: 6 }}>
                    <span>{item.label}</span>
                    <StatusBadge status={item.status} />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
