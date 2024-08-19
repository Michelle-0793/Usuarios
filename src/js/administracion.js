// Importar la función GetUsers desde el archivo getUsers.js en la carpeta servicios
import { getUsers } from "../servicios/getUsers";

import { postUsers } from "../servicios/postUsers";

const nombre = document.getElementById("nombre");

const apellido = document.getElementById("apellido");

const cedula = document.getElementById("cedula");

const tarea = document.getElementById("tarea");

const edad = document.getElementById("edad");

const btnCrear = document.getElementById("crear");

const mensaje = document.getElementById("mensaje");

//Función para manejar el evento click del botón
async function crearUsuario() {
      
    const nombreUsuario = nombre.value;
    const apellidoUsuario = apellido.value;
    const cedulaUsuario = cedula.value;
    const tareaUsuario = tarea.value;
    const edadUsuario = edad.value;

    //Validar registro
    if (!nombreUsuario || !apellidoUsuario || !cedulaUsuario || !tareaUsuario || !edadUsuario) {
        mensaje.textContent = "Debe llenar todos los campos";
        return;
      }

 // Limpiar los campos
 nombre.value = "";
 apellido.value = "";
 cedula.value = "";
 tarea.value = "";
 edad.value = "";
 

// Obtener usuarios para verificar la cédula, con get
      const usuarios = await getUsers();
      const cédulaExistente = usuarios.find(user => user.cedula === cedulaUsuario);

      if (cédulaExistente) {
        mensaje.textContent = "La cédula ya está registrada";
        return;
      
      }else{
            
//Crear un nuevo usario con post
      const response = await postUsers(nombreUsuario, apellidoUsuario, cedulaUsuario, tareaUsuario, edadUsuario);
      mensaje.textContent = "Usuario agregado exitosamente"

      }

}
// Asignar la función al evento click del botón
btnCrear.addEventListener("click", crearUsuario);

