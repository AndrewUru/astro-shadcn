async function enviarFormulario(event) {
  event.preventDefault();

  const form = document.getElementById("bodega-form");
  const formData = new FormData(form);

  // Mapeo exacto según documentación
  const data = {
    nombre: formData.get("nombre"),
    ubicacion: formData.get("ubicacion"),
    contacto: formData.get("contacto") || null,
    descripcion: formData.get("descripcion") || null,
    url_imagen_logo: formData.get("imagen_logo") || null, // Nombre correcto
    catálogo_vinos: formData.get("catalogo_vinos") || null, // Nombre con tilde
  };

  try {
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

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(
        `Error ${response.status}: ${responseData.message || JSON.stringify(responseData)}`
      );
    }

    alert(`Bodega creada con éxito. ID: ${responseData.id}`);
    form.reset();
  } catch (error) {
    console.error("Error completo:", error);
    if (error instanceof Error) {
      alert(error.message);
    } else {
      alert("An unknown error occurred");
    }
  }
}
