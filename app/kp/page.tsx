'use client';
import { useState } from 'react';

export default function KP() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const send = async () => {
    await fetch('/api/kp', {
      method:'POST',
      body: JSON.stringify({ name, phone })
    });
    alert('Заявка отправлена');
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Получить КП</h1>
      <input placeholder="Имя" onChange={e=>setName(e.target.value)} />
      <br /><br />
      <input placeholder="Телефон" onChange={e=>setPhone(e.target.value)} />
      <br /><br />
      <button onClick={send}>Отправить</button>
    </div>
  );
}
