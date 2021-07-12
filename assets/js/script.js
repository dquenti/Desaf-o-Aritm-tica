//CREACIÓN DE LAS VARIABLES//
var num1=parseInt(prompt("ingrese dos números mayores a cero. Ingrese aquí el primer número"));
var num2=parseInt(prompt("Ingrese aquí el segundo número"))

//FUNCIÓN PARA SUMAR
function suma() {
    console.log('El resultado de la suma es: ')
    console.log(num1+num2)
}
suma(num1,num2)

//FUNCIÓN PARA RESTAR
function resta() {
    console.log('El resultado de la resta es: ')
    console.log(num1-num2)
}
resta(num1,num2)

//FUNCIÓN PARA DIVIDIR
function division() {
    console.log('El resultado de la división es: ')
    console.log(num1/num2)
}
division(num1,num2)

//FUNCIÓN PARA MULTIPLICAR
function multiplicacion() {
    console.log('El resultado de la multiplicación es: ')
    console.log(num1*num2)
}
multiplicacion(num1,num2)

//FUNCIÓN PARA OBTENER EL MÓDULO
function modulo() {
    console.log('El valor del módulo es: ')
    console.log(num1%num2)
}
modulo(num1,num2)

//VARIABLE PARA ALMACENAR TEMPERATURA EN CELSIUS
var celsius=parseInt(prompt("ingrese una temperatura en grados Celsius"))

//FUNCION PARA TRANSFORMAR A GRADOS KELVIN
function kelvin(){
    var tempkelvin=celsius+273.15
    console.log('La temperatura en grados kelvin es: ')
    console.log(tempkelvin +' °K')
}
kelvin(celsius)

//FUNCION PARA TRANSFORMAR A GRADOS FARENHEIT
function fahrenheit(){
    var tempfar=(celsius*9/5)+32
    console.log('La temperatura en grados fahrenheit es: ')
    console.log(tempfar +' °F')
}
fahrenheit(celsius)

//VARIABLES PARA EL CÁLCULO DE AÑOS, SEMANAS, DIAS
var dias=parseInt(prompt("Ingrese aquí una cantidad de días"))
var ano=Math.floor(dias/365)
var resto=Math.floor(dias%365)
var semana=Math.floor(resto/7)
var diassobran=Math.floor(resto%7)

//FUNCIÓN PARA CALCULAR A CUANTOS AÑOS, SEMANAS, DIAS EQUIVALE EL VALOR INGRESADO
function calculoaño(){
    if (dias>365){
        if (resto>7){

            console.log('Los días ingresados equivalen a ' +ano +' año, ' +semana +' semana ' +diassobran +' días')
        }
        else{
            console.log('Los días ingresados equivalen a ' +semana +' año, ' +diassobran +' días')
            
        }
    }
    else{
        if (resto>7){
            console.log ('Los días ingresados equivalen a ' +semana +' semana ' + diassobran +' días');
        }
        else{
            console.log('Los días ingresados equivalen a ' +diassobran +' días')
        }

    }
}

calculoaño(dias)