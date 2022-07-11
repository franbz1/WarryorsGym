$(document).ready(function() {
   // on ready
});

async function registrarUsuario() {
      let datos = {};
      datos.nombre = document.getElementById('txtNombreMebresia').value;
      datos.email = document.getElementById('txtEmailMebresia').value;
      datos.telefono = document.getElementById('txtTelefonoMebresia').value;
      datos.mensaje = document.getElementById('txtMensajeMembresia').value;

    const request = await fetch('api/usuariomembresia', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });
      alert("La cuenta fue creada con exito!");

}