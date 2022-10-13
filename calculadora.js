    function escrever(n){
        document.getElementById('paragrafo').innerHTML+=n;
    }
// apagar
function apagar(){
    document.getElementById('paragrafo').innerHTML=
    document.getElementById('paragrafo').innerHTML.substring(0, 
    document.getElementById('paragrafo').innerHTML.length-1);
}

// limpar   
function limpar(){
    document.getElementById('paragrafo').innerHTML="";
}

// calcular
function calcular(){
    if(document.getElementById('paragrafo').innerHTML){
    document.getElementById('paragrafo').innerHTML=
    eval(document.getElementById('paragrafo').innerHTML);
}else{
    document.getElementById('paragrafo').innerHTML=""
}
}

// raiz
function raiz(){
    document.getElementById('paragrafo').
    innerHTML=Math.sqrt(document.getElementById('paragrafo').innerHTML);
}

// quadrado
function quadrado(){
    document.getElementById('paragrafo').innerHTML=
    Math.pow(document.getElementById('paragrafo').innerHTML,2);
}