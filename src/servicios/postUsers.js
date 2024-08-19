async function postUsers(nombre, apellido, cedula, tarea, edad) {
    const userData={
        nombre, 
        apellido,
        cedula,
        tarea,
        edad
    }
    try {
        // Realiza una solicitud POST a la URL especificada
        const response = await fetch('http://localhost:3001/users', {
            method: 'POST', // Especifica que se está utilizando el método POST
            headers: {
                'Content-Type': 'application/json' // Indica que los datos se envían en formato JSON. en este apartado tambien se pueden enviar tokens
            },
            body: JSON.stringify(userData) // Convierte el objeto newUser a JSON para enviarlo en el cuer
        });

        // Espera la respuesta en formato JSON
        const data = await response.json();
        // Retorna los datos obtenidos de la respuesta del servidor
        return data; /// siempre hay que ponerlo 
    } catch (error) {
        // Captura y muestra cualquier error que ocurra durante la solicitud
        console.error(error);
        return { message: 'Error al agregar usuario.' };
    }
}
export {postUsers};