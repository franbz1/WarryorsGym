const form1 = document.getElementById("form1");

form1.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form1);
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


//___________________________________________________________________


const form2 = document.getElementById("form2");

form2.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form2);
  const data = {};
  for (const [key, value] of formData.entries()) {
      data[key] = value;
  }
  delete data["submit-button"];

  try {
    const response = await fetch("/warryors1post2", {
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