url = 'https://test-final.b8one.academy/sales'
    

const  fetchDataSales = async () => {
  const response = await fetch(url)
  const responseJson = await response.json()
  return responseJson
  
}

//Informações Cards de Vendas

const cardsSales =  data => {
    const revenuesMoney = document.querySelector('[data-revenues]')
    const allSales = document.querySelector('[data-sales]')
    const midTicket = document.querySelector('[data-ticket]')
    const revenuesMoney2 = document.querySelector('[data-revenues2]')
    const allSales2 = document.querySelector('[data-sales2]')
    const midTicket2 = document.querySelector('[data-ticket2]')


    const creatCards = {
      revenuesDataCard: `<span class="card__text--span">
        ${(data.revenues/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
        </span>`,
      allSalesDataCard:  `<span class="card__text--span"> ${data.totalSales} </span> `,
      midTicketDataCard: `<span class="card__text--span">
          ${(data.averageTicket/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
        </span>`
    }
    
    
    revenuesMoney.insertAdjacentHTML("beforeend", creatCards.revenuesDataCard)
    allSales.insertAdjacentHTML("beforeend", creatCards.allSalesDataCard);
    midTicket.insertAdjacentHTML ('beforeend',creatCards.midTicketDataCard);
    revenuesMoney2.insertAdjacentHTML("beforeend", creatCards.revenuesDataCard)
    allSales2.insertAdjacentHTML("beforeend", creatCards.allSalesDataCard);
    midTicket2.insertAdjacentHTML ('beforeend',creatCards.midTicketDataCard );
 
  
  }


const Sales = async () => {
    const data = await fetchDataSales();
    cardsSales(data)    
    
}

Sales()
