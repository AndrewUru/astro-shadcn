export async function createBodega(data: any) {
  const response = await fetch(
    "https://api.nocodebackend.com/create/bodegas?Instance=45063_sistema_de_usuarios_v1",
    {
      method: "POST",
      headers: {
        Authorization:
          "Bearer a23aa940ccfff6477b410c272d034c94c891f3e29421357a1eb58772b377",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error(`Error al crear bodega: ${response.statusText}`);
  }

  return response.json();
}
