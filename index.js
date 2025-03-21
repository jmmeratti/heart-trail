//Seleciona campo que cursor vai passar e reconhecer
const bodyElement = document.querySelector("body");


bodyElement.addEventListener("mousemove", (event) => { 
   const xPos = event.offsetX //Pega posição X e Y do cursor
   const yPos = event.offsetY  

   //Cria diversos spans no Html do navegador
   const spanEl= document.createElement("span");


//
   spanEl.style.left = xPos + "px";  //indica as posições que serão pegas no cursos
   spanEl.style.top = yPos + "px";



   const size = Math.random() * 100; //variável com valor Random * 100 para que altere constantemente o
   spanEl.style.width = size + "px"  //tamanho do coração ao mover o cursor
   spanEl.style.height = size + "px"


   bodyElement.appendChild(spanEl);   //A cada 3 seg, exclui os spans criados
   setTimeout(() =>{
    spanEl.remove();
   }, 3000);
})