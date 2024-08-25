// checkbox
    let manCheckbox = document.querySelector("#Homem");
    let womanCheckbox = document.querySelector("#Mulher");
    let Altura = document.getElementById("Height");
    let Peso = document.getElementById("Weight");
    let Idade = document.getElementById("Age");
    let Resultado = document.getElementById("Result");
    let btn = document.getElementById("btn-submit")
   // const Botão = document.getElementById("Btn-submit")

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

      
      

   
    
        
        btn.addEventListener("click", () => {
        if(manCheckbox.checked){
            Resultado = 66 + (13.7 * Peso.value) + (5 * Altura.value) - (6.8 * Idade.value);
        } else {
            Resultado = 655 + (9.6 * Peso.value) + (1.8 * Altura.value) - (4.7 * Idade.value);
        }})
        
        
     console.log(Resultado.value)



    // Para homens: TMB = 66 + (13,7 x peso em kg) + (5 x altura em cm) - (6,8 x idade em anos)
    // Para mulheres: TMB = 655 + (9,6 x peso em kg) + (1,8 x altura em cm) - (4,7 x idade em anos)