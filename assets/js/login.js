var Clientes=[{"Nombre":"prueba@gmail.com","Password":"123456"}]
console.log(Clientes)
   

function validar_user(){

    var sw=false  
    var nombre=document.getElementById('txt_user').value
    var pass=document.getElementById('txt_Password').value

    Clientes.forEach(function(x){
        if(x.Nombre==nombre && x.Password==pass)
        {
            location.href='Intranet.html'
            sw=true
        }  
    })
    if (sw==false)
    {
        alert("El usuario no existe / credenciales, usuario y/o password incorrectos")
    }
}

function Registrar()
{
location.href='FormularioRegistro.html'
}




