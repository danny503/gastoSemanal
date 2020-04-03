//Variables
const presupuestoUsuario = prompt('Cual es su presupuesto semanal')

console.log(presupuestoUsuario)
//Clases
//Calse de presupuesto
class Presupuesto{
    constructor(){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(this.presupuesto);
    }
    //Metodo para ir restando el presupuesto semanal
    
}
//EventeListener
document.addEventListener('DOMContentLoaded', function(){
    if(presupuestoUsuario === null || presupuestoUsuario ===''){
        window.location.reload();
    }else{
        console.log('Agregado');
    }
});