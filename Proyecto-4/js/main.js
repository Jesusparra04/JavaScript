document.getElementById('form-1').addEventListener('submit', function(event) {
	event.preventDefault();


  const sys =parseFloat(document.getElementById("sys").value)
  const dia =parseFloat(document.getElementById("dia").value)
  let calcular

  if (sys<=90 && dia<=60){
     document.getElementById ("calcular").innerHTML= "<div class='alert alert-primary' role='alert'><strong>Respuesta: Presion arterial baja </strong> <img src='img/presion-arterial-bja.png'></div>"
  }
  else if(sys<=120 && dia <=80){
     document.getElementById ("calcular").innerHTML= "<div class='alert alert-success' role='alert'><strong>Respuesta:  Presion arterial normal </strong> <img src='img/presion-arterial-normal.png'></div>"
  }
  else if(sys>=120 && sys<=129 && dia<=80){
     document.getElementById ("calcular").innerHTML= "<div class='alert alert-warning' role='alert'><strong>Respuesta:  Presion arterial elevada </strong> <img src='img/elevada.png'></div>"
  }
  else if(sys>=130 && sys<=139 && dia>=80 && dia <=89){
    document.getElementById ("calcular").innerHTML= "<div class='alert alert-danger' role='alert'><strong>Respuesta: Presion arterial alta: Hipertension </strong> <img src='img/hipertension.png'></div>"
  }
  else if(sys>=140 && dia>=90){
    document.getElementById ("calcular").innerHTML= "<div class='alert alert-danger' role='alert'><strong>Respuesta: Presion arterial alta: Hipertension nivel 2 </strong> <img src='img/hipernv2.png'></div>"
  }
  else if(sys>=180 && dia>=120)
    document.getElementById ("calcular").innerHTML= "<div class='alert alert-danger' role='alert'><strong>Respuesta: Presion arterial alta: Crisis de Hipertension </strong> <img src='img/hiperintension-crisis.png'></div>"
 }
  


  
	
  );

document.getElementById('form-2').addEventListener('submit', function(event) {
	event.preventDefault();

	const peso =parseFloat(document.getElementById("peso").value)
  const altura =parseFloat(document.getElementById("altura").value)
  let resultado,alturam,imc
  
  alturam=altura/100
    imc = peso / (altura * altura)


    if(imc<18.5){
       document.getElementById ("resultado").innerHTML= "<div class='alert custom-alert' role='alert'><strong>Su IMC es: "+imc.toFixed(1)+" </strong> <br> <strong> Usted esta Bajo de peso <strong> <img src='img/bajo peso.png'></div>"
    }
    else if(imc>=18.5 && imc<=24.9){
      document.getElementById ("resultado").innerHTML= "<div class='alert custom2-alert' role='alert'><strong>Su IMC es: "+imc.toFixed(1)+" </strong> <br> <strong> Su peso es Normal </strong> <img src='img/peso-normal.png'></div>"
    }
    else if(imc>=25 && imc<=29.9){
      document.getElementById ("resultado").innerHTML= "<div class='alert custom3-alert' role='alert'><strong>Su IMC es: "+imc.toFixed(1)+" </strong> <br> <strong> Usted tiene Sobrepeso </strong> <img src='img/sobre peso.png'></div>"
    }
   else if(imc>=30 && imc<=34.9){
    document.getElementById ("resultado").innerHTML= "<div class='alert custom4-alert' role='alert'><strong>Su IMC es: "+imc.toFixed(1)+" </strong> <br> <strong> Usted tiene Obesidad I </strong> <img src='img/obesidad-1-2-3.png'></div>"
   }
   else if(imc>=35 && imc<=39.9){
    document.getElementById ("resultado").innerHTML= "<div class='alert custom4-alert' role='alert'><strong>Su IMC es: "+imc.toFixed(1)+" </strong> <strong> Usted tiene Obesidad II </strong>  <img src='img/obesidad-1-2-3.png'></div>"
   }
   else if(imc>=40 && imc<=49.9){
    document.getElementById ("resultado").innerHTML= "<div class='alert custom5-alert' role='alert'><strong>Su IMC es: "+imc.toFixed(1)+" </strong>  <strong> Usted tiene Obesidad III </strong> <img src='img/obesidad-1-2-3.png'></div>"
   }
   else if(imc>=50){
    document.getElementById ("resultado").innerHTML= "<div class='alert custom5-alert' role='alert'><strong>Su IMC es: "+imc.toFixed(1)+" </strong> <strong> Usted tiene Obesidad IV </strong> <img src='img/obesidad-iv.png'></div>"
   }
	
  }

);
document.getElementById('form-3').addEventListener('submit', function(event) {
	event.preventDefault();

  const temp =parseFloat(document.getElementById("temp").value)
  let resul

  if(temp< 35.0){
    document.getElementById ("resul").innerHTML= "<div class='alert alert-danger' role='alert'><strong>Respuesta: Usted esta sufriendo de hipotermia </strong> <img src='img/hipotermia.png'></div>"
  }
  else if (temp>=35.0 && temp<35.9){
     document.getElementById ("resul").innerHTML= "<div class='alert alert-danger' role='alert'><strong>Respuesta: Su temperatura esta baja </strong> <img src='img/temp-normal.png'></div>"
  }
  else if(temp>=36.0 && temp<=37.4){
     document.getElementById ("resul").innerHTML= "<div class='alert alert-success' role='alert'><strong>Respuesta: Usted tiene una temperatura normal </strong> <img src='img/temp-normal.png'></div>"
  }
  else if(temp>=37.5 && temp<=37.9){
    document.getElementById ("resul").innerHTML= "<div class='alert alert-danger' role='alert'><strong>Respuesta: Usted tiene febricula </strong> <img src='img/febricula.png'></div>"
  }
  else if(temp>=38.0 && temp <=38.9){
    document.getElementById ("resul").innerHTML= "<div class='alert alert-danger' role='alert'><strong>Respuesta: Usted tiene fiebre moderada </strong> <img src='img/febricula.png'></div>"
  }
  else if(temp>=39.0 && temp <=39.9){
    document.getElementById ("resul").innerHTML= "<div class='alert alert-danger' role='alert'><strong>Respuesta: Usted tiene una fiebre alta </strong> <img src='img/febricula.png'></div>"
  }
  else if(temp>=40.0 && temp<=40.9){
    document.getElementById ("resul").innerHTML= "<div class='alert alert-danger' role='alert'><strong>Respuesta: Usted tiene una hipertemia  </strong> <img src='img/febricula.png'></div>"
  }
  else if(temp>=41.0){
    document.getElementById ("resul").innerHTML= "<div class='alert alert-danger' role='alert'><strong>Respuesta: Usted esta sufriendo una hiperpirexia </strong> <img src='img/febricula.png'></div>"
  }
    
  }





);
document.getElementById('form-4').addEventListener('submit', function(event) {
  event.preventDefault();

  const edad = parseFloat(document.getElementById("edad").value)
  const sexo = document.getElementById("sexo").value
  let peso, altura

  if (sexo === "" || isNaN(edad)) {
      alert('Por favor ingresar los valores correctos!')
  } else {  
      if (sexo === 'Hombre') {
          if (edad >= 11 && edad <= 14) {
              peso = 45
              altura = 1.57
               document.getElementById ("resultado2").innerHTML= "<div class='alert alert-warning' role='alert'><strong>Respuesta: Su peso ideal es: <span class='badge text-bg-primary'>"+peso+ " kg</span></strong> <br> <strong>Respuesta: Su altura ideal es: <span class='badge text-bg-primary'>"+altura+" CM</span> </strong> </div>"
             
          } else if (edad >= 15 && edad <= 18) {
              peso = 66
              altura = 1.76
                document.getElementById ("resultado2").innerHTML= "<div class='alert alert-warning' role='alert'><strong>Respuesta: Su peso ideal es: <span class='badge text-bg-primary'>"+peso+ " kg</span></strong> <br> <strong>Respuesta: Su altura ideal es: <span class='badge text-bg-primary'>"+altura+" CM</span> </strong> </div>"
              
          } else if (edad >= 19 && edad <= 24) {
              peso = 72
              altura = 1.77
                document.getElementById ("resultado2").innerHTML= "<div class='alert alert-warning' role='alert'><strong>Respuesta: Su peso ideal es: <span class='badge text-bg-primary'>"+peso+ " kg</span></strong> <br> <strong>Respuesta: Su altura ideal es: <span class='badge text-bg-primary'>"+altura+" CM</span> </strong> </div>"
             
          } else if (edad >= 25 && edad <= 50) {
              peso = 79
              altura = 1.76
              document.getElementById ("resultado2").innerHTML= "<div class='alert alert-warning' role='alert'><strong>Respuesta: Su peso ideal es: <span class='badge text-bg-primary'>"+peso+ " kg</span></strong> <br> <strong>Respuesta: Su altura ideal es: <span class='badge text-bg-primary'>"+altura+" CM</span> </strong> </div>"
          } else if (edad > 50) {
              peso = 77
              altura = 1.73
               document.getElementById ("resultado2").innerHTML= "<div class='alert alert-warning' role='alert'><strong>Respuesta: Su peso ideal es: <span class='badge text-bg-primary'>"+peso+ " kg</span></strong> <br> <strong>Respuesta: Su altura ideal es: <span class='badge text-bg-primary'>"+altura+" CM</span> </strong> </div>"
          } else {
              alert = 'No hay datos para la edad ingresada.'
          }
      } else if (sexo === 'Mujer') {
          if (edad >= 11 && edad <= 14) {
              peso = 46
              altura = 1.57
                document.getElementById ("resultado2").innerHTML= "<div class='alert alert-warning' role='alert'><strong>Respuesta: Su peso ideal es: <span class='badge text-bg-primary'>"+peso+ " kg</span></strong> <br> <strong>Respuesta: Su altura ideal es: <span class='badge text-bg-primary'>"+altura+" CM</span> </strong> </div>"
          } else if (edad >= 15 && edad <= 18) {
              peso = 55
              altura = 1.63
                document.getElementById ("resultado2").innerHTML= "<div class='alert alert-warning' role='alert'><strong>Respuesta: Su peso ideal es: <span class='badge text-bg-primary'>"+peso+ " kg</span></strong> <br> <strong>Respuesta: Su altura ideal es: <span class='badge text-bg-primary'>"+altura+" CM</span> </strong> </div>"
          } else if (edad >= 19 && edad <= 24) {
              peso = 58
              altura = 1.64
              document.getElementById ("resultado2").innerHTML= "<div class='alert alert-warning' role='alert'><strong>Respuesta: Su peso ideal es: <span class='badge text-bg-primary'>"+peso+ " kg</span></strong> <br> <strong>Respuesta: Su altura ideal es: <span class='badge text-bg-primary'>"+altura+" CM</span> </strong> </div>"
              
          } else if (edad >= 25 && edad <= 50) {
              peso = 63
              altura = 1.63
               document.getElementById ("resultado2").innerHTML= "<div class='alert alert-warning' role='alert'><strong>Respuesta: Su peso ideal es: <span class='badge text-bg-primary'>"+peso+ " kg</span></strong> <br> <strong>Respuesta: Su altura ideal es: <span class='badge text-bg-primary'>"+altura+" CM</span> </strong> </div>"
              
          } else if (edad > 50) {
              peso = 65
              altura = 1.60
                document.getElementById ("resultado2").innerHTML= "<div class='alert alert-warning' role='alert'><strong>Respuesta: Su peso ideal es: <span class='badge text-bg-primary'>"+peso+ " kg</span></strong> <br> <strong>Respuesta: Su altura ideal es: <span class='badge text-bg-primary'>"+altura+" CM</span> </strong> </div>"
              
          } else {
              alert = 'No hay datos para la edad ingresada.'
          }
      } else {
          alert('Sexo no reconocido.')
          
      }

     
  }
})
