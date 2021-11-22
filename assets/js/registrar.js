var RegistroUsuariosZuque=[]
console.log(RegistroUsuariosZuque)

function agregarRegistro(){

    var nombre=document.getElementById('nombres').value
    var apellido=document.getElementById('apellidos').value
    var correo=document.getElementById('correo').value
    var pass=document.getElementById('contraseña').value

    var Persona={"Nombre":nombre,"Apellido":apellido,"mail":correo,"Pass":pass}

    RegistroUsuariosZuque.push(Persona)
    console.log( RegistroUsuariosZuque)
    document.getElementById('nombres').value=""
    document.getElementById('apellidos').value=""
    document.getElementById('correo').value=""
    document.getElementById('contraseña').value=""

    RegistroUsuariosZuque.forEach(function(x){ //aqui cada elemento que tiene "RegistroUsuarioZuque" se lo asigno a x
        console.log(x) //muestra el objeto "Persona" y su contenido.
        console.log(x.User)  //se usa la llave para poder mostrar el elemento que esta dentro del objeto

    })

}

function Login()/*dirige al dar clic al formulario del login*/
{
location.href='FormularioLogin.html'
}
