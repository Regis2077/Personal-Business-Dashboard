/* Funções para validação de usuário, tratativa de erro e vizualização de login */

// Revela senha

  const passwordOn = document.querySelector(".credential__password--hiden--on");
  const passwordOff= document.querySelector(".credential__password--hiden--off")
  
  let showPasword = document.querySelector('[data-password]');
  let btn = document.querySelector('[data-passwordBtn]');

    btn.addEventListener("click",  event => {
      event.preventDefault()
        if(showPasword.type == 'password'){
            showPasword.type ='text';
            passwordOn.style.display = "block";
            passwordOff.style.display = "none";
            
        } else {
            showPasword.type = 'password';
            passwordOn.style.display = "none";
            passwordOff.style.display = "block";
        }

    })


// Validação de usuário


const form = document.querySelector('[data-form]')
const imputEmail = document.querySelector('[data-email]')
const imputPassword = document.querySelector('[data-password]')
   
const userValidation = e => {
    e.preventDefault()
    
    const data = {
        email: imputEmail.value,
        password: imputPassword.value
    }

    let url = 'https://test-final.b8one.academy/login'
    
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      })
      .then((response) => response.json()
      .then (() =>{
        if (response.status === 200){
          window.location = './main.html'
        } else if (response.status === 400) {
          invalidUser()
          imputEmail.value = ''
          imputPassword.value = ''
        }
      }))
       
  }
  
  form.addEventListener('submit', userValidation)  


  //Mensagem de erro


  const invalidUser = () =>{
    const msgErro =  document.querySelector('.credential__erro')
    imputEmail.style.border = '2px solid #f03460'
    imputPassword.style.border = '2px solid #f03460'
    
    let erro = document.createElement('span')
    erro.textContent = 'Email ou senha incorreto(os)'
    erro.style.height = "444px";
    erro.style.color= "#f03460";
    erro.style.fontWeigth = "normal";
    erro.style.fontSize = "14px";
    erro.style.lineHeight = "20px" 

    msgErro.insertAdjacentElement('afterbegin', erro)

}