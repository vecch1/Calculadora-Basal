// checkbox
    let manCheckbox = document.querySelector("#Homem");
    let womanCheckbox = document.querySelector("#Mulher");
    // let Altura = document.getElementById("Height");
    // let Peso = document.getElementById("Weight");
    // let Idade = document.getElementById("Age");
    // let Result = document.getElementById("Resultado");
    // let btn = document.getElementById("btn-submit")
  



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
    const Altura = parseFloat(document.getElementById("Height").value)
    const Peso = parseFloat(document.getElementById("Weight").value)
    const Idade = parseFloat(document.getElementById("Age").value)


    if (isNaN(Altura) || isNaN(Peso) || isNaN(Idade)) {
        alert("Por favor, preencha todos os campos com números válidos.");
        return;
      }

      let Resultado
        
         if(manCheckbox.checked){
              Resultado = 88.362 + (13.397 * Peso) + (4.799 * Altura) - (5.677 * Idade);
         } else if (womanCheckbox.checked){
              Resultado = 447.593 + (9.247 * Peso) + (3.098 * Altura) - (4.330 * Idade);
        } else {
              alert("Selecione um genero")
              return;
        }
           
      document.querySelector("p").innerText =  Resultado.toFixed(2)     
     } 


    
      


    
        
        
   



    // Para homens: TMB = 66 + (13,7 x peso em kg) + (5 x altura em cm) - (6,8 x idade em anos)
    // Para mulheres: TMB = 655 + (9,6 x peso em kg) + (1,8 x altura em cm) - (4,7 x idade em anos)