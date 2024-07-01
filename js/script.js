
let numberSelect = 0

const userInput = document.getElementById('userInput'),
       countdown = document.getElementById('countdown'),
       result = document.getElementById('result'),
       restart = document.getElementById('restart')

 
userInput.addEventListener('change', () => {
   numberSelect = userInput.value

})


function iniciarContador () {
 let segundos = 5;   
 setInterval(() => {
 if(segundos >= 0) {
    countdown.innerText = segundos
 }
 segundos--
 }, 1000)      
}

const getPromise =() => {
    const response = new Promise(resolve =>{
        setTimeout( () => {
            const numeroAleatorio = Math.floor(Math.random()*3) + 1;
            let mensaje = ""
            if(numberSelect === numeroAleatorio){
                result.innerHtml=`
                <h1>¡Has salvado el numero!<h1>
                <p>tu numero ${numberSelect} es igual añ número ${numeroAleatorio}<p>
                `
            } else {
                mensaje = `
                <h1>¡Ha explotado la bomba!</h1>
                <p> tu numero ${numberSelect} no es igual al número ${numeroAleatorio}</p>
                `
            }
            resolve(mensaje)
        }, 6000)
    })
    .then(data => result.innerHTML = data)
}
restart.addEventListener('click', function(){
    location.reload();
});
getPromise()
iniciarContador()


