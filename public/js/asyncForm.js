const form = document.getElementById("form1");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = {};
  for (const [key, value] of formData.entries()) {
      data[key] = value;
  }
  delete data["submit-button"];

  try {
    const response = await fetch("/warryors1post1", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
  });
    if (response.ok) {
      alert("Datos enviados con éxito!");
    } else {
      alert("Ocurrió un problema con el envío de datos!");
  }
} catch (error) {
  console.error(error);
}
});
