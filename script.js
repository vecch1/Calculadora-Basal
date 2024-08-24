// checkbox
document.addEventListener("DOMContentLoaded", () => {

    const manCheckbox = document.querySelector("#Homem");
    const womanCheckbox = document.querySelector("#Mulher");


    manCheckbox.addEventListener("change", function(){

        if(manCheckbox.checked){
            womanCheckbox.checked = false;
        }
    });

    womanCheckbox.addEventListener("change", function(){
        if(womanCheckbox.checked){
            manCheckbox.checked = false;
        }

    });



    function calcularBasal(){
        const Altura = document.getElementById("Height").value;
        const Peso = document.getElementById("Weight").value;
        const Idade = document.getElementById("Age").value;
        var btnResult = document.getElementById("Btn");
        const Resultado = document.getElementById("Result").value;
    
       //  converter valor em num
       const alturaNum = Number(Altura);
       const pesoNum = Number(Peso);
       const idadeNum = Number(Idade);
    
       let Basal
       if(manCheckbox.checked === true){
           Basal = 66 + (13.7 * pesoNum) + (5 * alturaNum) - (6.8 * idadeNum);
       } else if (womanCheckbox === true){
           Basal = 655 + (9.6 * pesoNum) + (1.8 * alturaNum) - (4.7 * idadeNum);
       };
       
    
       
    
    }
    
    
});





    // Para homens: TMB = 66 + (13,7 x peso em kg) + (5 x altura em cm) - (6,8 x idade em anos)
    // Para mulheres: TMB = 655 + (9,6 x peso em kg) + (1,8 x altura em cm) - (4,7 x idade em anos)