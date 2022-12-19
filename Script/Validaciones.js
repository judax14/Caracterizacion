const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones ={
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	tdoc: {},
	numerodoc: /^\d{7,14}$/,
	Programa: /^\D ("")/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	numero:/^\d{7,10}$/
}
const validarFormulario = (e) =>{
	switch(e.target.name){
		case "fname":
			if(expresiones.nombre.test()){
			}
		break;	

		case "tdoc":
			console.log('funcia ¡')
		break;	

		case "numerodoc":
			console.log('funcia ¡')
		break;	

		case "Programa":
			console.log('funcia ¡')
		break;	

		case "email":
			console.log('funcia ¡')
		break;	

		case "numero":
			console.log('funcia ¡')
		break;	
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
});


////////////////////////////////////////////////////////////////

//CRISTIAN//

 //////////////////////////////////////////////
 //Validacion de nombre de contacto de emergencia// 
 
 // La siguiente funcion valida el elemento input
 function validar() {
	// Variable que usaremos para determinar si el input es valido
	let isValid = false;

	// El input que queremos validar
	const input = document.forms['validationForm']['letras'];

	//El div con el mensaje de advertencia:
	const message = document.getElementById('message');

	input.willValidate = false;

	// El tamaño maximo para nuestro input
	const maximo = 50;

	// El pattern que vamos a comprobar
	const pattern = new RegExp('^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$');

	// Primera validacion, si input esta vacio entonces no es valido
	if(!input.value) {
	  isValid = false;
	} else {
	  // Segunda validacion, si input es mayor que 60
	  if(input.value.length > maximo) {
		isValid = false;
	  } else {
		// Tercera validacion, si input contiene caracteres diferentes a los permitidos
		if(!pattern.test(input.value)){ 
		// Si queremos agregar letras acentuadas y/o letra ñ debemos usar
		// codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
		  isValid = false;
		} else {
		  // Si pasamos todas la validaciones anteriores, entonces el input es valido
		  isValid = true;
		}
	  }
	}

	//Ahora coloreamos el borde de nuestro input
	if(!isValid) {
	  // rojo: no es valido
	  input.style.borderColor = 'salmon'; // me parece que 'salmon' es un poco menos agresivo que 'red'
	  // mostramos mensaje
	  message.hidden = false;
	} else {
	  // verde: si es valido
	  input.style.borderColor = 'palegreen'; // 'palegreen' se ve mejor que 'green' en mi opinion
	  // ocultamos mensaje;
	  message.hidden = true;
	}

	// devolvemos el valor de isValid
	return isValid;
  }

  // Por último, nuestra función que verifica si el campo es válido antes de realizar cualquier otra acción.
  function verificar() {
	const valido = validar();
	if (!valido) {
	  console.log('El campo no es válido por favor ingrese los datos correctamente .');
	  alert('El campo no es válido por favor ingrese los datos correctamente .');
	} else {
	  console.log(true);
	}
  }


  /////////////////////////////////////
//Validacion de Numero de emergencia

  // La siguiente funcion valida el elemento input
  function Numeros() {
	// Variable que usaremos para determinar si el input es valido
	let isValid = false;

	// El input que queremos validar
	const input = document.forms['validationForm']['CelularA'];

	//El div con el mensaje de advertencia:
	const mensage = document.getElementById('mensage');

	input.willValidate = false;

	// El tamaño maximo para nuestro input
	const maximo = 20;

	// El pattern que vamos a comprobar
	const pattern = new RegExp(`^[0-9]+$`);

	// Primera validacion, si input esta vacio entonces no es valido
	if(!input.value) {
	  isValid = false;
	} else {
	  // Segunda validacion, si input es mayor que 20
	  if(input.value.length > maximo) {
		isValid = false;
	  } else {
		// Tercera validacion, si input contiene caracteres diferentes a los permitidos
		if(!pattern.test(input.value)){ 
		// Si queremos agregar letras acentuadas y/o letra ñ debemos usar
		// codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
		  isValid = false;
		} else {
		  // Si pasamos todas la validaciones anteriores, entonces el input es valido
		  isValid = true;
		}
	  }
	}

	//Ahora coloreamos el borde de nuestro input
	if(!isValid) {
	  // rojo: no es valido
	  input.style.borderColor = 'salmon'; // me parece que 'salmon' es un poco menos agresivo que 'red'
	  // mostramos mensaje
	  mensage.hidden = false;
	} else {
	  // verde: si es valido
	  input.style.borderColor = 'palegreen'; // 'palegreen' se ve mejor que 'green' en mi opinion
	  // ocultamos mensaje;
	  mensage.hidden = true;
	}

	// devolvemos el valor de isValid
	return isValid;
  }

  // Por último, nuestra función que verifica si el campo es válido antes de realizar cualquier otra acción.
  function verificar() {
	const valido = Numeros();
	if (!valido) {
	  console.log('El campo no es válido por favor ingrese los datos correctamente .');
	  alert('El campo no es válido por favor ingrese los datos correctamente .');
	} else {
	  console.log(true);
	}
  }


 //////////////////////////////////////////////
 //Campo de texto// 
 
 // La siguiente funcion valida el elemento input
 function validar() {
	// Variable que usaremos para determinar si el input es valido
	let isValid = false;

	// El input que queremos validar
	const input = document.forms['validationForm']['texto'];

	//El div con el mensaje de advertencia:
	const message = document.getElementById('message');

	input.willValidate = false;

	// El tamaño maximo para nuestro input
	const maximo = 50;

	// El pattern que vamos a comprobar
	const pattern = new RegExp('^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$');

	// Primera validacion, si input esta vacio entonces no es valido
	if(!input.value) {
	  isValid = false;
	} else {
	  // Segunda validacion, si input es mayor que 60
	  if(input.value.length > maximo) {
		isValid = false;
	  } else {
		// Tercera validacion, si input contiene caracteres diferentes a los permitidos
		if(!pattern.test(input.value)){ 
		// Si queremos agregar letras acentuadas y/o letra ñ debemos usar
		// codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
		  isValid = false;
		} else {
		  // Si pasamos todas la validaciones anteriores, entonces el input es valido
		  isValid = true;
		}
	  }
	}

	//Ahora coloreamos el borde de nuestro input
	if(!isValid) {
	  // rojo: no es valido
	  input.style.borderColor = 'salmon'; // me parece que 'salmon' es un poco menos agresivo que 'red'
	  // mostramos mensaje
	  message.hidden = false;
	} else {
	  // verde: si es valido
	  input.style.borderColor = 'palegreen'; // 'palegreen' se ve mejor que 'green' en mi opinion
	  // ocultamos mensaje;
	  message.hidden = true;
	}

	// devolvemos el valor de isValid
	return isValid;
  }

  // Por último, nuestra función que verifica si el campo es válido antes de realizar cualquier otra acción.
  function verificar() {
	const valido = validar();
	if (!valido) {
	  console.log('El campo no es válido por favor ingrese los datos correctamente .');
	  alert('El campo no es válido por favor ingrese los datos correctamente .');
	} else {
	  console.log(true);
	}
  }
