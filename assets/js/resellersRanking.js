url = 'https://test-final.b8one.academy/resellers/ranking'
    
   

const  fetchDataReselles = async () => {
    const response = await fetch(url)
    const responseJson = await response.json()
    return responseJson

}

//Função para montar Ranking de revendedores
 
const resellerRanking = ranking => {

    const rankingGroupListLi = document.querySelector('[data-resellers]')
    
    const rankingHtmlArray = ranking.map((resellers, index) => {
        return `
                <li class="revendedores__item">
                    <span class="revendedores__item--span">${index + 1 + 'º'}</span>
                    <div class="revendedores__list--section">
                       <div class="reseller__name">
                            ${(resellers.name).split('').filter( letter => letter.match(/[A-Z]/)).join('')} 
                        </div>
                        <div class = "resellers__block--right"
                            <span class="revendores__item--pessoa-top">
                                ${resellers.name}
                            </span>
                            <div class="revendores__item--pessoa-botton">
                                <span class="item__pessoa--pedido">${resellers.ordersCount} pedidos</span>
                                <span class="item__pessoa--number">${resellers.percentage}
                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.99976 4.5L3.99976 1.5L0.999759 4.5" stroke="#158F2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg> 
                                </span>
                            </div>   
                        </div>
                    </div>
                </li>
      
        `
   })

   const RankingHtml = rankingHtmlArray.join(" ")
   rankingGroupListLi.insertAdjacentHTML('beforeend', RankingHtml)
   
 
}



const mainReselles = async () => {
    const data = await fetchDataReselles();
    resellerRanking(data.resellers)


}

mainReselles()
