'use client';
import { useState } from 'react';

const products = [
  { id:1, name:'Bitzer Compressor' },
  { id:2, name:'Danfoss Unit' }
];

export default function Catalog() {
  const [search, setSearch] = useState('');

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 40 }}>
      <h1>Каталог</h1>
      <input placeholder="Поиск" onChange={(e)=>setSearch(e.target.value)} />
      <div style={{ marginTop:20 }}>
        {filtered.map(p=> (
          <div key={p.id} style={{ padding:10, border:'1px solid #333', marginTop:10 }}>
            {p.name}
          </div>
        ))}
      </div>
    </div>
  );
}
