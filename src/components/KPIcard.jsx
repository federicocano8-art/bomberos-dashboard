export default function KPIcard({titulo, valor}) {

  return (
    <div style={{
      border:"1px solid #ddd",
      padding:"20px",
      borderRadius:"10px",
      width:"200px"
    }}>
      <h3>{titulo}</h3>
      <h1>{valor}</h1>
    </div>
  )

}
