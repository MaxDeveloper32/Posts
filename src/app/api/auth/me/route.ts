// app/api/auth/me/route.ts


export async function GET(request: Request) {
  const res = await fetch('https://dummyjson.com/auth/me', {
    headers: {
      Cookie: request.headers.get('cookie') || ''
    }
  });
  
  if (!res.ok) return Response.json(null, { status: 401 });
  
  return Response.json(await res.json());
}