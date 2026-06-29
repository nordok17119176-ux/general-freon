export async function POST(req) {
  const data = await req.json();
  console.log('LEAD:', data);
  return Response.json({ ok:true });
}
