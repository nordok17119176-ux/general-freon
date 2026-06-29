export default function Home() {
  return (
    <div style={{ height: '100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
      <h1>GENERAL FREON</h1>
      <p>Холодильное и климатическое оборудование</p>
      <div style={{ marginTop: 20, display:'flex', gap:10 }}>
        <a href="/catalog">Каталог</a>
        <a href="/kp">Получить КП</a>
      </div>
    </div>
  );
}
