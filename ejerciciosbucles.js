//1) Escriba una iteracion o bucle que iterará de 0 a 20, 
//para iteración verificar si el numero actual es par o impar e imprimir en consola por ejemplo ("4 es par")
var numero;
for (numero = 0; numero < 20; numero++) {
    if (numero%2 == 0){
        console.log(+numero+' es par');
    }else if(numero%2 != 0){
        console.log(+numero+' es impar');
    }
   
};
// 2) Escriba una iteracion o bucle que iterará de 0 a 10, para cada iteración del bucle multiplicar el numero por 9 y imprimir en consola el resultado (por ejemplo: "2 * 9 = 18").
var numeroD;
var multiplicacion;
for (numeroD = 0; numeroD < 10; numeroD++) {
    multiplicacion=numeroD*9;
        console.log(+numeroD+' * 9 es '+multiplicacion);
    }
// bonus: Utilice un bucle anidado para mostrar las tablas para cada multiplicador de 1 a 10 (100 es el resultado total)

for (var i =1; i<=10; i++) {
    console.log('Tabla de multiplicar de '+i);
    for(var j = 1; j<=10; j++){
      console.log(i+ '*'+j+' = '+i*j);
    }
          
  };
 