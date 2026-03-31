export const vehicles = [
  {
    id: "V-01",
    name: "Engine 1",
    status: "Operational",
    assignedToolIds: ["T-01", "T-02", "T-04"],
    assignedEraIds: ["ERA-01", "ERA-03"],
    fluids: {
      oil: { status: "OK", date: "2026-03-25", observations: "Normal", user: "Lt. Perez" },
      coolant: { status: "OK", date: "2026-03-24", observations: "Within range", user: "Lt. Perez" },
      fuel: { status: "OK", date: "2026-03-28", observations: "85%", user: "FF Gomez" },
      brakeFluid: { status: "NOT OK", date: "2026-03-29", observations: "Below minimum", user: "FF Gomez" },
    },
  },
  {
    id: "V-02",
    name: "Rescue 2",
    status: "Maintenance",
    assignedToolIds: ["T-03", "T-05"],
    assignedEraIds: ["ERA-02"],
    fluids: {
      oil: { status: "OK", date: "2026-03-18", observations: "Changed", user: "Mech. Ruiz" },
      coolant: { status: "NOT OK", date: "2026-03-30", observations: "Leak detected", user: "Mech. Ruiz" },
      fuel: { status: "OK", date: "2026-03-29", observations: "70%", user: "FF Diaz" },
      brakeFluid: { status: "OK", date: "2026-03-20", observations: "Good", user: "Mech. Ruiz" },
    },
  },
  {
    id: "V-03",
    name: "Tanker 3",
    status: "Out",
    assignedToolIds: ["T-06"],
    assignedEraIds: ["ERA-04"],
    fluids: {
      oil: { status: "NOT OK", date: "2026-03-19", observations: "Contamination", user: "Mech. Ruiz" },
      coolant: { status: "OK", date: "2026-03-19", observations: "Good", user: "Mech. Ruiz" },
      fuel: { status: "NOT OK", date: "2026-03-29", observations: "Tank sensor fault", user: "FF Mena" },
      brakeFluid: { status: "OK", date: "2026-03-19", observations: "Good", user: "Mech. Ruiz" },
    },
  },
];

export const equipment = [
  { id: "T-01", name: "Hydraulic Cutter", status: "OK", vehicleId: "V-01", date: "2026-03-28", observations: "No issues", user: "FF Gomez" },
  { id: "T-02", name: "Portable Pump", status: "NOT OK", vehicleId: "V-01", date: "2026-03-30", observations: "Low pressure", user: "FF Gomez" },
  { id: "T-03", name: "Thermal Camera", status: "OK", vehicleId: "V-02", date: "2026-03-27", observations: "Calibrated", user: "FF Diaz" },
  { id: "T-04", name: "Chainsaw", status: "OK", vehicleId: "V-01", date: "2026-03-24", observations: "Sharp chain", user: "Lt. Perez" },
  { id: "T-05", name: "Generator", status: "NOT OK", vehicleId: "V-02", date: "2026-03-29", observations: "Won't start", user: "FF Diaz" },
  { id: "T-06", name: "Foam Nozzle", status: "OK", vehicleId: "V-03", date: "2026-03-20", observations: "Good", user: "FF Mena" },
];

export const eras = [
  {
    id: "ERA-01",
    brand: "MSA",
    model: "G1",
    serial: "MSA-G1-34001",
    pressure: 285,
    lastMaintenance: "2026-02-15",
    nextMaintenance: "2026-04-15",
    status: "Active",
    vehicleId: "V-01",
  },
  {
    id: "ERA-02",
    brand: "Drager",
    model: "PSS 7000",
    serial: "DR-7000-11220",
    pressure: 220,
    lastMaintenance: "2026-01-10",
    nextMaintenance: "2026-03-10",
    status: "Maintenance",
    vehicleId: "V-02",
  },
  {
    id: "ERA-03",
    brand: "Scott",
    model: "Air-Pak X3",
    serial: "SC-X3-22118",
    pressure: 300,
    lastMaintenance: "2026-03-01",
    nextMaintenance: "2026-05-01",
    status: "Active",
    vehicleId: "V-01",
  },
  {
    id: "ERA-04",
    brand: "MSA",
    model: "BD 96",
    serial: "MSA-BD96-9912",
    pressure: 180,
    lastMaintenance: "2025-12-01",
    nextMaintenance: "2026-02-01",
    status: "Out",
    vehicleId: "V-03",
  },
];

export const maintenanceLogs = [
  { id: "ML-01", eraId: "ERA-01", date: "2026-03-01", type: "inspection", description: "Visual inspection completed", user: "Lt. Perez" },
  { id: "ML-02", eraId: "ERA-02", date: "2026-03-12", type: "failure", description: "Regulator leak detected", user: "FF Diaz" },
  { id: "ML-03", eraId: "ERA-02", date: "2026-03-18", type: "maintenance", description: "Replaced O-rings", user: "Mech. Ruiz" },
  { id: "ML-04", eraId: "ERA-04", date: "2026-02-03", type: "failure", description: "Cylinder valve stuck", user: "FF Mena" },
];

export const checklists = [
  {
    id: "CL-T-01",
    name: "Monthly Vehicle Checklist",
    type: "Monthly",
    targetType: "vehicle",
    targetId: "V-01",
    items: [
      "Lights functioning",
      "Siren operational",
      "Pump pressure stable",
      "Extinguisher charged",
    ],
  },
  {
    id: "CL-T-02",
    name: "Biweekly ERA Checklist",
    type: "Biweekly",
    targetType: "era",
    targetId: "ERA-02",
    items: ["Cylinder pressure", "Mask seal integrity", "Harness check", "Regulator test"],
  },
];

export const checklistResults = [
  {
    id: "CLR-01",
    checklistId: "CL-T-01",
    status: "completed",
    dueDate: "2026-03-28",
    completedAt: "2026-03-27",
    user: "Lt. Perez",
    observations: "All checks completed",
    items: [
      { label: "Lights functioning", status: "OK" },
      { label: "Siren operational", status: "OK" },
      { label: "Pump pressure stable", status: "NOT OK" },
      { label: "Extinguisher charged", status: "OK" },
    ],
  },
  {
    id: "CLR-02",
    checklistId: "CL-T-02",
    status: "overdue",
    dueDate: "2026-03-20",
    completedAt: null,
    user: "FF Diaz",
    observations: "Pending replacement parts",
    items: [
      { label: "Cylinder pressure", status: "NOT OK" },
      { label: "Mask seal integrity", status: "OK" },
      { label: "Harness check", status: "OK" },
      { label: "Regulator test", status: "NOT OK" },
    ],
  },
  {
    id: "CLR-03",
    checklistId: "CL-T-01",
    status: "pending",
    dueDate: "2026-04-05",
    completedAt: null,
    user: "FF Gomez",
    observations: "Scheduled",
    items: [
      { label: "Lights functioning", status: "OK" },
      { label: "Siren operational", status: "OK" },
      { label: "Pump pressure stable", status: "OK" },
      { label: "Extinguisher charged", status: "OK" },
    ],
  },
];

export const activityLog = [
  { id: "ACT-01", date: "2026-03-30", message: "Tool T-02 marked NOT OK on Engine 1", user: "FF Gomez" },
  { id: "ACT-02", date: "2026-03-30", message: "ERA-02 remained in maintenance", user: "Mech. Ruiz" },
  { id: "ACT-03", date: "2026-03-29", message: "Checklist CL-T-01 completed", user: "Lt. Perez" },
  { id: "ACT-04", date: "2026-03-28", message: "Brake fluid alert raised for V-01", user: "System" },
];
