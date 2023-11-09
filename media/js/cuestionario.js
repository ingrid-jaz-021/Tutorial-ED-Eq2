function valuap(respuest){ //recibe un entero que indica la respuesta seleccionada
	var reto;
	if(parseInt(respuest)==this.correcta){
		// var reto;
		alert("Es correcta");
		reto=true;
		return reto;
	}else{
		alert("Es false");
		return reto;
	}
}

function pregunta(pregun,respuesta1,respuesta2,respuesta3,respuesta4,correcta){
	this.pregun=pregun;
	this.respuestas=[];
	this.respuestas[0]=respuesta1;
	this.respuestas[1]=respuesta2;
	this.respuestas[2]=respuesta3;
	this.respuestas[3]=respuesta4;
	this.correcta=parseInt(correcta);
	this.ocupado=false;
	this.valuap=valuap;
}

var retorno=[];
var preguntas=[];

preguntas[0]=new pregunta("¿Qué es la probabilidad condicional?","La probabilidad de que ocurra el evento A","La probabilidad de que ocurra el evento A","La probabilidad de que ocurran A y B juntos","La probabilidad de que ocurra el evento A dado que el evento B ya ha ocurrido",4);
preguntas[1]=new pregunta("¿Cómo se denota la probabilidad condicional de que ocurra A dado que B ha ocurrido?","P(A | B)","b) P(A / B)","P(A & B)","P(A * B)",1);
preguntas[2]=new pregunta("¿Cuál es la fórmula para calcular la probabilidad condicional de A dado B?","P(A | B) = p(A) + p(B)","P(A | B) = p(A - B) / p(B)","P(A | B) = p(A * B) / p(B)","P(A | B) = p(A∩B) / p(B)",4);
preguntas[3]=new pregunta("Según el teorema, ¿cómo se relaciona la probabilidad condicional de A y su complemento?","Son iguales","Son independientes"," La probabilidad condicional de A es igual a 1 menos la probabilidad condicional de su complemento","No tienen relación",3);
preguntas[4]=new pregunta("¿En qué contexto se utiliza un diagrama de Venn?","Para calcular la probabilidad de un evento A","Para representar visualmente las relaciones entre conjuntos","Para calcular la probabilidad de un evento B","Para ilustrar la probabilidad condicional",2)
preguntas[5]=new pregunta("¿Qué representan los conjuntos A y B en el contexto de la probabilidad condicional?", "¿Qué representan los conjuntos A y B en el contexto de la probabilidad condicional?","Son eventos independientes","Son eventos mutuamente excluyentes","Son eventos relacionados con un experimento E","Son eventos para calcular la probabilidad condicional de que B ocurra dado que A ya ha ocurrido",4)
preguntas[6]=new pregunta("¿Cómo se reduce el espacio muestral al calcular P(B | A)?","Se mantiene igual","Se amplía","Se reduce de S a A","Se reduce de A a S",3)
preguntas[7]=new pregunta("¿Qué se busca verificar con la probabilidad condicional?","La probabilidad de que ocurra un evento B","La probabilidad de que ocurra un evento A","Conjuntos de suposiciones o hipótesis","La probabilidad de que A y B ocurran juntos",3)
preguntas[8]=new pregunta("¿Cuál es una de las aplicaciones más significativas de la probabilidad condicional?","Calcular la probabilidad total de un evento","Evaluar la probabilidad de ocurrencia de un evento A","Simplificar el cálculo de intersecciones de eventos en ciertos experimentos","Establecer la independencia de eventos",3)
preguntas[9]=new pregunta("¿Cuál es el objetivo de la probabilidad condicional?","Calcular la probabilidad de eventos no relacionados","Evaluar la probabilidad de ocurrencia de un evento A","Determinar la probabilidad de que ocurra un evento B","Evaluar la probabilidad de que ocurra un evento A dado que otro evento B ya ha ocurrido",4)
preguntas[10]=new pregunta("¿Qué se utiliza para representar visualmente las relaciones entre conjuntos en el contexto de la probabilidad condicional?","Diagrama de árbol","Diagrama de Venn","Diagrama de barras","Diagrama de flujo",2)
preguntas[11]=new pregunta("¿Cuál es la relación entre la probabilidad de A dado B y la probabilidad de A en el espacio muestral original?","Son iguales","Son inversamente proporcionales","La probabilidad condicional de A dado B se calcula en función de la probabilidad de A en el espacio muestral original","No tienen relación",3)
preguntas[12]=new pregunta("¿Qué se busca calcular al evaluar P(B | A)?","La probabilidad de que ocurra B independientemente de A","La probabilidad de que ocurra B en el contexto del espacio muestral original","La probabilidad de que ocurra B dado que A ya ha ocurrido","La probabilidad de que ocurran A y B simultáneamente",3)
preguntas[13]=new pregunta("¿Qué se convierte en el espacio muestral al afirmar que el evento A ya ha tenido lugar?","El evento B","El evento A","El espacio muestral original","A se convierte en el espacio muestral",4)
preguntas[14]=new pregunta("¿Qué se evalúa al calcular la probabilidad condicional de que ocurra B dado que A ya ha ocurrido?","La probabilidad de que ocurra A","La probabilidad de que ocurra B en cualquier contexto","La probabilidad de que ocurra B en el contexto de A","La probabilidad de que ocurran A y B de forma independiente.",3)
preguntas[15]=new pregunta("¿Cuándo decimos que dos eventos, A y B, son independientes?"," Cuando la probabilidad de que ocurra A sea igual a la probabilidad de que ocurra B.","Cuando la probabilidad de que ocurra A cambia si el evento B ocurre.","Cuando la probabilidad condicional de que ocurra A dado que ocurrió B es igual a la probabilidad original de que ocurra A.","Cuando la probabilidad de que ocurran A y B juntos es diferente al producto de las probabilidades individuales de A y B.",3)
preguntas[16]=new pregunta("¿Qué significa que A y B son eventos independientes?","Que la probabilidad de que ocurra A depende de la ocurrencia de B.","Que la probabilidad de que ocurra B depende de la ocurrencia de A.","Que la probabilidad condicional de que ocurra A dado que ocurrió B es igual a la probabilidad original de que ocurra A.","Que la probabilidad de que ambos eventos A y B ocurran juntos es igual al producto de las probabilidades individuales de A y B", 4)
preguntas[17]=new pregunta("¿Qué se requiere para que n sucesos sean mutuamente independientes?","Que todos los sucesos sean independientes entre sí.","Que al menos dos sucesos sean independientes.","Que para cualquier grupo de sucesos diferentes Ai, Aj ... Am se cumpla que p(Ai, Aj ... Am) = p(Ai)p(Aj) ... p( Am).","No se pueden tener n sucesos mutuamente independientes.",3)
preguntas[18]=new pregunta("¿Qué significa que las pruebas son mutuamente independientes en problemas prácticos?","Que el resultado de una prueba afecta el resultado de otra.","Que el resultado de una prueba no afecta el resultado de otra.","Que todas las pruebas son iguales.","Que las pruebas son independientes dos a dos.",2)
preguntas[19]=new pregunta("¿Qué condición debe cumplirse para que un experimento consista en n pruebas independientes?","Que el espacio muestral S sea el producto Cartesiano de n conjuntos S1, S2, ..., Sn.","Que la probabilidad de ocurrencia de un evento de un solo elemento A⊂S sea igual al producto de las probabilidades de ocurrencia de los eventos correspondientes de un solo elemento Ai⊂Si.", "Que todos los sucesos sean independientes entre sí.","No hay condiciones específicas.",2)
preguntas[20]=new pregunta("¿Qué ocurre cuando A y B son eventos independientes en términos de probabilidad condicional?","La probabilidad de que ocurra A se ve afectada por la ocurrencia de B.","La probabilidad de que ocurra B se ve afectada por la ocurrencia de A.","Saber que B ha ocurrido modifica la probabilidad de que A ocurra","La probabilidad de que ocurra A no se ve afectada por la ocurrencia de B.",4)
