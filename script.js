// checkbox
    let manCheckbox = document.querySelector("#Homem");
    let womanCheckbox = document.querySelector("#Mulher");
    let Altura = document.getElementById("Height");
    let Peso = document.getElementById("Weight");
    let Idade = document.getElementById("Age");
    let Result = document.getElementById("Resultado");
    let btn = document.getElementById("btn-submit")
  



    manCheckbox.addEventListener("change", () => {
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

        let altura = parseFloat(Altura.value)
        let peso = parseFloat(Peso.value)
        let idade = parseFloat(Idade.value)
        let resultado

         if(manCheckbox.checked){
             resultado = 66 + (13.7 * (Peso.value)) + (5 * (Altura.value)) - (6.8 * (Idade.value));
         } else if (womanCheckbox.checked){
            resultado = 655 + (9.6 * (Peso.value)) + (1.8 * (Altura.value)) - (4.7 * (Idade.value));
        } else {
              Result.value = "Selecione um genero"
              return
        }
            Result.value = resultado.toFixed(2);
        
      } 

      btn.addEventListener("click", calcularBasal())
    
      


    
        
        
   



    // Para homens: TMB = 66 + (13,7 x peso em kg) + (5 x altura em cm) - (6,8 x idade em anos)
    // Para mulheres: TMB = 655 + (9,6 x peso em kg) + (1,8 x altura em cm) - (4,7 x idade em anos)