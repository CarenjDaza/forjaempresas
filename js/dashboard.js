//validacion documento usuario
function documento(e){
    e.preventDefault();
    let documento=parseInt(document.getElementById('document').value);
    switch(documento){
        case 52368795:
            Swal.fire({
                html:'<img src=img/logoforja.png>' +'<h2>Usuario ya tiene la primera dosis </h2>'+ '<b>Nombre de la primera vacuna:</b> Janssen<br>' + '<b>Fecha de aplicacion:</b> 13 / 02 / 2022' + '<p>¿Desea registrar otra dosis?</p>',
                showCancelButton: true,
                confirmButtonColor: '#A40101',
                cancelButtonColor: 'rgb(44, 163, 171)',
                confirmButtonText: 'Registrar'
              }).then((result) => {
                if (result.isConfirmed) {
                    window.setTimeout(() => { window.location.href = "vacunacion.html" }, 0);}
              })
        break;
        case 1001235478:
            Swal.fire({
                html: '<img src="img/logoforja.png">' + '<h2>Usuario ya tiene dos dosis</h2><br>' + '<i>Primera dosis: </i><br>' + '<b>Nombre de vacuna:</b> Astrazeneca<br>' + '<b>Fecha de aplicación:</b>14 / 12 /2021<br><br>' +
                    '<i>Segunda dosis:</i><br>' + '<b>Nombre de vacuna:</b>Astrazeneca<br>' + '<b>Fecha de aplicación:</b>17 / 03 /2022'+ '<p>¿Desea registrar otra dosis?</p>',
                showCancelButton: true,
                confirmButtonColor: '#A40101',
                cancelButtonColor: 'rgb(44, 163, 171)',
                confirmButtonText: 'Registrar'
              }).then((result) => {
                if (result.isConfirmed) {
                    window.setTimeout(() => { window.location.href = "vacunacion.html" }, 0);}
              })
        break;
        case 25413574:
            Swal.fire({
                html: '<img src="img/logoforja.png">' + '<h3>Su esquema de vacunación está completo</h3>' + '<i>Primera dosis:</i><br>' + '<b>Nombre de la vacuna:</b> Pfizer<br>' + '<b>Fecha de aplicación:</b>10 / 10 / 2021<br><br>' +
                    '<i>Segunda dosis:</i><br>' + '<b>Nombre de vacuna:</b> Pfizer<br>' + '<b>Fecha de aplicación:</b>08 / 01 / 2021<br><br>' +
                    '<i>Tercera dosis:</i><br>' + '<b>Nombre de vacuna:</b> Sinovac<br>' + '<b>Fecha de aplicación:</b>28 / 04 / 2022',
                showCancelButton: true,
                confirmButtonColor: '#A40101',
                cancelButtonColor: 'rgb(44, 163, 171)',
              })
        break;
        case 1007203506:
            Swal.fire({
                html: '<img src="img/logoforja.png">' + '<h3>El usuario no se encuentra registrado</h3>'+'<p>¿Desea registrar al paciente?</p>',
                showCancelButton: true,
                confirmButtonColor: '#A40101',
                cancelButtonColor: 'rgb(44, 163, 171)',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.setTimeout(() => { window.location.href = "registro.html" }, 0);}
              })
        break;

    }

    
}