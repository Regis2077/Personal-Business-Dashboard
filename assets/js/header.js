
let url = 'https://test-final.b8one.academy/user'

const  fetchData = async () => {
    const response = await fetch(url)
    const responseJson = await response.json()
    return responseJson

}

//montar dados do usuário 

const userDate = data => {
    const company = document.querySelector('[data-company]')
    const userName = document.querySelector('[data-user]')
    const userPic = document.querySelector('[data-user]')
    const UserNameDropdown = document.querySelector('[data-userNameDropdown')


    company.insertAdjacentHTML("afterend",
    `<span class="company__title">${data.organization}</span> `)
   
    userName.insertAdjacentHTML("beforeend",
      `<span class="user__profile--text">${data.username}</span> `)
    
    userPic.insertAdjacentHTML("afterbegin",
    `<img class="user__profile--image" src="${data.photo}" alt="Homem em foto de perfil" class="user-avatar">`)
    UserNameDropdown.insertAdjacentHTML('afterbegin', `                        
    <a href="#" class="user__action--link-2"><span class="color">Olá,</span> ${(data.username).split(' ').slice(0, 1).join(' ')} 👋</a>`
    )
    
}


const main = async () => {
    const data = await fetchData();
    userDate(data) 
}

main()
