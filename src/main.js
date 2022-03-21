/* Ações de botões */

//Ações de ativação dos botões da Navbar lateral

document.addEventListener("click", e => {

  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]"));

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")

    
  } 
})

// Botões para trocas de gráficos

const btn1 = document.querySelector('[data-dash_btn1]')
const btn2 = document.querySelector('[data-dash_btn2]')
const btn3 = document.querySelector('[data-dash_btn3]')

const dash1 = document.querySelector('[data-graph1]')
const dash2 = document.querySelector('[data-graph2]')
const dash3 = document.querySelector('[data-graph3]')

btn1.addEventListener('click', () =>{
    dash2.classList.add('hidden')
    dash3.classList.add('hidden')
    dash1.classList.remove('hidden')
})


btn2.addEventListener('click', () => {
    dash1.classList.add('hidden')
    dash3.classList.add('hidden')
    dash2.classList.remove('hidden')
})

btn3.addEventListener('click', () => {
    dash1.classList.add('hidden')
    dash2.classList.add('hidden')
    dash3.classList.remove('hidden')
})


//Botão de ativação do menu através do hamburguer
  
const btnHamburguer = document.querySelector('[data-hamburguer]')
const sdbar =  document.querySelector('.sidebar')

btnHamburguer.addEventListener('click', () => {
  sdbar.classList.toggle('revel')
  
})