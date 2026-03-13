import KPIcard from "../components/KPIcard";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard Bomberos</h1>

      <div style={{display:"flex", gap:"20px"}}>

        <KPIcard titulo="Equipos Totales" valor="120" />
        <KPIcard titulo="ERAs Activos" valor="18" />
        <KPIcard titulo="Móviles Operativos" valor="6" />

      </div>

    </div>
  );
}
