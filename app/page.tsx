export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial', background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      
      {/* HERO */}
      <section style={{ padding: '80px 40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 60, marginBottom: 20 }}>
          GENERAL FREON
        </h1>
        <p style={{ fontSize: 22, opacity: 0.8 }}>
          Холодильное оборудование и промышленные решения
        </p>

        <button style={{
          marginTop: 30,
          padding: '15px 30px',
          fontSize: 18,
          background: '#00ff99',
          border: 'none',
          borderRadius: 10,
          cursor: 'pointer'
        }}>
          Перейти в каталог
        </button>
      </section>

      {/* CATEGORIES */}
      <section style={{ padding: '40px' }}>
        <h2>Каталог</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 20 }}>
          
          {[
            "Компрессоры",
            "Холодильные камеры",
            "Фреон",
            "Запчасти",
            "Конденсаторы",
            "Испарители"
          ].map(item => (
            <div key={item} style={{
              padding: 20,
              background: '#111',
              borderRadius: 12,
              border: '1px solid #222'
            }}>
              {item}
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '60px', textAlign: 'center' }}>
        <h2>Нужна консультация инженера?</h2>
        <p>Подберём оборудование и сделаем КП</p>
        <button style={{
          marginTop: 20,
          padding: '12px 25px',
          background: '#ffcc00',
          border: 'none',
          borderRadius: 8
        }}>
          Оставить заявку
        </button>
      </section>

    </main>
  );
}