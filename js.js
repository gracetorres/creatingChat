

const chat = [

]


function nuevoMensaje(){
    const inputMessage= document.getElementById("inpMensaje");
    const radio1 = document.getElementById("radio1");
    const radio2 = document.getElementById("radio2");
    if(inputMessage.value && (radio1.checked || radio2.checked)){

        const valorRadio = radio1.checked ? radio1.value : radio2.value;

        const objeto = {
            user: valorRadio,
            message: inputMessage.value,
        };
    
    
        chat.push(objeto);
        console.log(chat)
        mostrarChat(chat)
     
        inputMessage.value =  "";
    } else{
        alert("es ob")
        
    }


  
}


function mostrarChat(chat){
    
    // const labelUsuario = document.getElementById("labelMensaje").value;
    // const labelMensaje = document.getElementById("labelMensaje").value;
    // const radio = document.getElementById("radio").value;
    const espacio = document.getElementById("espacio")
    let html = "";
    let img = "";
    
    for (let index = 0; index < chat.length; index++) {
        if(chat[index].user == "juan"){
            img = "https://www.salud180.com/sites/default/files/como-cortarle-las-unas-a-tu-perrito-en-casa-sin-lastimarlo1.jpg";
        } else {
            img = "https://imagenes.elpais.com/resizer/Uu9NjpW6efLnS49S5BGtFEV1jvc=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/ZY2QCOQQO4GHP4Y3OWH7BMJLUM.jpg";
        }


        const chatAnterior = chat[index - 1];
        if (chatAnterior){
            if (chat[index].user == chatAnterior.user) {
                html+=  `
                    <label id="labelMensaje" class="blanco" >${chat[index].message}</label>
                 `
            } else {
                

                html+=  `
                <div class="flex-row ">
        
                    <img class='img-chat' src="${img}" alt="">
                    <div class='flex-column'>
                    <label id="labelUsuario" class="label-user" >${chat[index].user}</label> 
                    <label id="labelMensaje" class="blanco" >${chat[index].message}</label>
                    </div>
                </div>
        
                    `;
            }
        } else {

            html+=  `
            <div class="flex-row ">
    
                <img class='img-chat' src="${img}" alt="">
                <div class='flex-column'>
                <label id="labelUsuario" class="label-user" >${chat[index].user}</label> 
                <label id="labelMensaje" class="blanco" >${chat[index].message}</label>
                </div>
            </div>
    
                `;
        }

 


     
        
    }
   
    espacio.innerHTML=html;

}


function funcionesIniciales() {
    // nuevoMensaje();
    // mostrarChat();
}