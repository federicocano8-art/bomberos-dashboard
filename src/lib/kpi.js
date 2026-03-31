export function buildKpis({ vehicles, equipment, eras, alerts }) {
  return {
    vehicles: vehicles.length,
    equipment: equipment.length,
    eras: eras.length,
    alerts: alerts.length,
  };
}

export function checklistStatusCount(results) {
  return results.reduce(
    (acc, row) => {
      acc[row.status] = (acc[row.status] || 0) + 1;
      return acc;
    },
    { pending: 0, completed: 0, overdue: 0 }
  );
}
