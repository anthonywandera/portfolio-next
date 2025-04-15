export async function POST(req: Request) {
  const pswd = await req.json();

  if (pswd === "tony") {
    return Response.json("Accepted", { status: 200 });
  } else {
    return Response.json("Rejected", { status: 401 });
  }
}
