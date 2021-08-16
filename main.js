let tabla = parseInt(prompt("Ingrese la tabla que quiere saber:"))
let valor = 0

console.log("La tabla del",tabla,"es:")

for(let i=0; i<=10; i++){
    valor = tabla * i
    console.log("",tabla,"x",i,"=",valor)
}