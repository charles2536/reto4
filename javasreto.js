function ocultar_resultado() {
    var divs = document.getElementsByClassName("div_resultado");

    for (var i = 0; i < divs.length; i++) {
        document.getElementsByClassName("div_resultado")[i].style.display = "none";
    }

}

var btn_calc = document.getElementById("boton_calculadora");
btn_calc.addEventListener("click", function(){
    ocultar_resultado()
    document.getElementById("seccion_calculadora").style.display= "inline"
})

var btn_opcioncaracteres = document.getElementById("boton_contarcaracteres");
btn_opcioncaracteres.addEventListener("click",function(){
    ocultar_resultado()
    document.getElementById("seccion_caracteres").style.display= "inline"
})

var btn_opcionmayus = document.getElementById("boton_mayusminus");
btn_opcionmayus.addEventListener("click",function(){
    ocultar_resultado()
    document.getElementById("seccion_mayusculas").style.display="inline"
})

var btn_opcionsumatoria = document.getElementById("boton_sumatoria");
btn_opcionsumatoria.addEventListener("click",function(){
    ocultar_resultado()
    document.getElementById("seccion_sumatoria").style.display="inline"
})

//contar caracteres 
var btn_carac = document.getElementById("conteo_caracteres");
btn_carac.addEventListener("click", function () {
    
    var a= document.getElementById("txt_contador").value;
    var b= a.length;
    document.getElementById("result").innerText = "la cantidad de caracteres es="+b;

})
//convertir a mayusculas
var btn_conv = document.getElementById("convertir_mayus");
btn_conv.addEventListener("click", function (){

    var c= document.getElementById("txt_mayusculas").value;
    var d= c.toUpperCase();
    var e= c.toLowerCase();
    document.getElementById("conversion").innerText = "conversion a mayusculas o minusculas"+d+e
})

// calculadora 

var btn_calcu = document.getElementById("suma");
btn_calcu.addEventListener("click", function () {
    
    var a= document.getElementById("txt_calculadora").value;
    var b= document.getElementById("txt_calculadorados").value;
    var c= parseInt(a) +parseInt(b);
    document.getElementById("resultado_calculo").innerText = c;
})   

var btn_calcu = document.getElementById("resta");
btn_calcu.addEventListener("click", function () {
    
    var a= document.getElementById("txt_calculadora").value;
    var b= document.getElementById("txt_calculadorados").value;
    var c= parseInt(a) - parseInt(b);
    document.getElementById("resultado_calculo").innerText = c;
})   

var btn_calcu = document.getElementById("multiplicacion");
btn_calcu.addEventListener("click", function () {
    
    var a= document.getElementById("txt_calculadora").value;
    var b= document.getElementById("txt_calculadorados").value;
    var c= parseInt(a) * parseInt(b);
    document.getElementById("resultado_calculo").innerText = c;
})   

var btn_calcu = document.getElementById("division");
btn_calcu.addEventListener("click", function () {
    
    var a= document.getElementById("txt_calculadora").value;
    var b= document.getElementById("txt_calculadorados").value;
    var c= parseInt(a) / parseInt(b);
    document.getElementById("resultado_calculo").innerText = c;
})   

//sumatoria
var btn_factorial = document.getElementById("calcular_sum");
btn_factorial.addEventListener("click", function () {
    
    var factorial= document.getElementById("txt_sumatoria").value;
    var res=1;
    for(i=1;i<=factorial;i++){
        res=res*i;
    
    }
    
    document.getElementById("sumatoria_calculada").innerText = res;
})   
