'use strict'

/* CHANGE BACKGROUND COLOR */

const change = document.getElementById('bg-change');

change.addEventListener('change', () => {
    var bgColor = document.querySelector('html');
    if(change.checked){
      bgColor.classList.add('bg-color-black');

    }else{
        bgColor.classList.remove('bg-color-black')
    }
});


/* MENU ANIMATION RESPONSIVE */

const button = document.querySelector('.contaner-button-menu');
const menu = document.querySelector('.menu');

function OpenMenu(argument){
    button.classList.toggle('active');
    menu.classList.toggle('active');

    argument.stopImmediatePropagation();
}

function CloseMenu(){
    if(button.classList.contains('active')){
        button.classList.remove('active');
        menu.classList.remove('active');

    }
}
button.addEventListener('click', OpenMenu);
document.addEventListener('click', CloseMenu);

/* Button whatsapp */

window.addEventListener('load', () =>{
    let btnWhats = document.querySelector('.button-float-whats')
    let timeout = 7000;

    setTimeout(() => {        
        btnWhats.classList.add('whatPopup')
    }, timeout);

});

/* Form */

const phone = document.getElementById('phone');

// adicionando '() e -'

phone.addEventListener('keydown', () =>{
    let caractere =  phone.value

    if(caractere.length == 0){
        phone.value += '('

    }else if(caractere.length == 3){
        phone.value += ')'
        phone.value += ' '
    
    }else if(caractere.length == 10){
        phone.value += '-'
    }

});

// Bloquear caracteres texto ou especiais

phone.addEventListener('keypress', (eventClick) =>{ 
	if(!characters(eventClick)){
		eventClick.preventDefault();
	}
    
});

// Criando uma regex
function characters(eventChars){ 
	const chars = String.fromCharCode(eventChars.keyCode)
	const regex = '[0-9, \b, \r]';
	if(chars.match(regex)){
		return true
	}
}

// Validar campos  vazios


const btnForm = document.querySelector('.btn');

btnForm.addEventListener('click', () =>{
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const text = document.getElementById('msg');
    const msg = document.querySelectorAll('.content-alert');    

    for(let cont = 0; msg.length > cont; cont++){
        if(name.value == 0){
            msg[0].style.display = "block";
            name.style.border = "1px solid red";
            name.addEventListener('keypress', () =>{
                msg[0].style.display = "none";
                name.style.border = "1px solid #C0C0C0";
            }); 

        }
        if(email.value == 0){
            msg[1].style.display = "block";
            email.style.border = "1px solid red";
            email.addEventListener('keypress', function(){
                msg[1].style.display = "none";
                email.style.border = "1px solid #C0C0C0";
            });
        }
        if(phone.value == 0){
            msg[2].style.display = "block";
            phone.style.border = "1px solid red";
            phone.addEventListener('keypress', () =>{
                msg[2].style.display = "none";
                phone.style.border = "1px solid #C0C0C0";
            })
        }
        if(text.value == 0){
            text.style.border = "1px solid red";
            text.addEventListener('keypress', function(){
                text.style.border = "1px solid #C0C0C0";

            })
        }
    }

});

/* Ancorando abas do site */

const menuItens = document.querySelectorAll('.container-menu a[href^="#"]');

menuItens.forEach(item => {
    item.addEventListener('click', scrollSmooth);
});

function scrollSmooth(event){
    event.preventDefault();
    let element = event.target
    let id = element.getAttribute('href');
    let section = document.querySelector(id).offsetTop;
    
    window.scroll({
        top: section -10,
        behavior: 'smooth'
    })
}