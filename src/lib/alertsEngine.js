function isExpired(dateStr) {
  const d = new Date(dateStr);
  const today = new Date("2026-03-31");
  return d < today;
}

export function generateAlerts({ vehicles, equipment, eras, checklistResults }) {
  const alerts = [];

  equipment.forEach((tool) => {
    if (tool.status === "NOT OK") {
      alerts.push({
        id: `AL-T-${tool.id}`,
        type: "NOT_OK",
        severity: "high",
        message: `Tool ${tool.name} (${tool.id}) is NOT OK`,
        source: "equipment",
        sourceId: tool.id,
        date: tool.date,
      });
    }
  });

  vehicles.forEach((vehicle) => {
    Object.entries(vehicle.fluids).forEach(([fluidName, entry]) => {
      if (entry.status === "NOT OK") {
        alerts.push({
          id: `AL-F-${vehicle.id}-${fluidName}`,
          type: "NOT_OK",
          severity: "high",
          message: `${vehicle.name} ${fluidName} check is NOT OK`,
          source: "vehicles",
          sourceId: vehicle.id,
          date: entry.date,
        });
      }
    });
  });

  eras.forEach((era) => {
    if (isExpired(era.nextMaintenance)) {
      alerts.push({
        id: `AL-ERA-EXP-${era.id}`,
        type: "EXPIRED_MAINTENANCE",
        severity: "critical",
        message: `ERA ${era.id} maintenance is expired`,
        source: "eras",
        sourceId: era.id,
        date: era.nextMaintenance,
      });
    }
  });

  checklistResults.forEach((result) => {
    if (result.status === "overdue") {
      alerts.push({
        id: `AL-CL-${result.id}`,
        type: "OVERDUE_CHECKLIST",
        severity: "medium",
        message: `Checklist result ${result.id} is overdue`,
        source: "checklistResults",
        sourceId: result.id,
        date: result.dueDate,
      });
    }

    const hasNotOkItem = result.items.some((item) => item.status === "NOT OK");
    if (hasNotOkItem) {
      alerts.push({
        id: `AL-CL-NOTOK-${result.id}`,
        type: "NOT_OK",
        severity: "high",
        message: `Checklist result ${result.id} contains NOT OK items`,
        source: "checklistResults",
        sourceId: result.id,
        date: result.completedAt || result.dueDate,
      });
    }
  });

  return alerts;
}
