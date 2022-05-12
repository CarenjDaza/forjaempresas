//login

function inicio(e){
    e.preventDefault();

    let usuario="Admin";
    let password="Kuepa2022";
    if(document.getElementById('user').value==usuario && document.getElementById('password').value==password){
        window.setTimeout(() => { window.location.href = "dashboard.html" }, 0);
    }
    else if(document.getElementById('user').value!=usuario && document.getElementById('password').value==password){
        //alert("Usuario erroneo ");
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El usuario ingresado es incorrecto',
          })
    }
    else if(document.getElementById('user').value==usuario && document.getElementById('password').value!=password){
        //alert("Contraseña erronea");
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La contraseña ingresada es incorrecta',
          })
    }
    else{
        //alert("Usuario y contraseña erroneo");
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El usuario y la contraseña ingresados son incorrectos',
          })
    }
}

 