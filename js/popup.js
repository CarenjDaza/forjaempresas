var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

//sdasd
<!--En caso de no usar borrar-->	
		
			<div class="overlay" id="overlay">
				<div class="popup" id="popup">

					<img src="img/logoforja.png" alt="logo Forja Empresas"><br>
					<h2>Usuario no registrado, desea <br>realziar el registro?</h2><br>
					<form action="registro.html">
						<button type="submit" class="btn-submit" value="Submit">Si, gracias!</button>
						<a href="dashboard.html" class="boton">Cancel</a>
					</form>

				</div>
			</div>

			<script src="js/popup.js"></script>
		
<!--En caso de no usar borrar2-->
//