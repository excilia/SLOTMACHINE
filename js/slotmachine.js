/**
 * 
 */
//Esta función crea los números al azar.
function getRndInteger(max, min) {
	  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//declaro todas las variables
var bombos=[];
var deposito=100;
var premio=0;
var jugadas=0;
var azar;
var premiado=false;
var contador=0;
var depositoPremios;


document.getElementById("pulsar").addEventListener("click", pulsando);

/*Esta función se llama al hacer click en pulsar. La función se anula cuando el depósito es inferior a 10
 * En este caso no tiene argumentos ni es necesario que 
 */
function pulsando(){
	
		for(var i=1; i<4; i++){
			azar=getRndInteger(1,6);
			
			bombos.push(azar);
			
			document.getElementById("bombo"+i).src="img/"+azar+".png";
			
			
				alert("Los números elegidos son " +bombos);
			
			
		}
			var a=bombos[0];
			var b=bombos[1];
			var c=bombos[2];
			if(a==6 && b==6 && c==6){
				premiado=true;
				premio+=500;
			}else if(a==5 && b==5 && c==5){
				premiado=true;
				premio+=250;
			}else if(a==4 && b==4 && c==4){
				premiado=true;
				premio+=250;
			}else if(a==3 && b==3 && c==3){
				premiado=true;
				premio+=80;
			}else if(a==2 && b==2 && c==2){
				premiado=true;
				premio+=50;
			}else if(a==1 && b==1 && c==1){
				premiado=true;
				premio+=30;
			//ahora hacemos los condicionales de dos aciertos poniendo un no igual a 5
			}else if(a==5 && b==5 && c!=5){
				premiado=true;
				premio+=150;
			}else if(a==4 && b==4 && c!=4){
					premiado=true;
					premio+=60;
			}else if(a==3 && b==3 && c!=3){
				premiado=true;
				premio+=40;
			}else if(a==2 && b==2 && c!=2){
				premiado=true;
				premio+=15;
			}else if(a==1 && b==1 && c!=1){
				premiado=true;
				premio+=5;				
			
				
			}else premiado=false;
			
		bombos=[];
		contador=contador+1;
		//jugadas=jugadas+1;
		jugadas+=1;
		deposito=100-jugadas*10;
		depositoPremios=deposito+premio;
		//ahora pongo el resultado en la pantalla
		document.getElementById("jugadas").value="JUGADAS "+jugadas;
		document.getElementById("premios").value="PREMIOS " +premio;
		document.getElementById("deposito").value="DEPOSITO "+ depositoPremios;
		//con este código me mando mensajes a console de todas las variables necesarias
		console.log("premio es"+premio);
		console.log("juagadas es"+jugadas);
		console.log("contador es"+contador);
		console.log("deposito es"+deposito);
		console.log("NUMERO DE AZAR ES "+azar);
		console.log("variable a es" + a);
		console.log("variable b es" + b);
		console.log("variable c es" + c);
		if (depositoPremios >= 90){
		    document.getElementById("mensaje").innerHTML="VUELVE A JUGAR!!!";
		}else if (depositoPremios<70 && depositoPremios>10){
			document.getElementById("mensaje").innerHTML="TE QUEDA POCO CREDITO!!!";
		}else if (depositoPremios<10){
			document.getElementById("mensaje").innerHTML="HAS TERMINADO LA PARTIDA!!!";
			document.getElementById("pulsar").removeEventListener("click", pulsando);
		}

		//cierro la función pulsando
}