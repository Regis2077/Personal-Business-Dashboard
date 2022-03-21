url = 'https://test-final.b8one.academy/products/more-sold'
    
   

const  fetchDataProducts = async () => {
    const response = await fetch(url)
    const responseJson = await response.json()
    return responseJson

}
   
 
const moreSold = products => {
    const menuGroupListTr = document.querySelector('[data-table]')
    
    const productsHtmlArray = products.map((product, index) => {
        return `
        <tr class="products__table--tr product__table--color-${index + 1}" >
                <td class="container__botton--number ">${index + 1}</td>
                <td class="info-product product-self">
                    <div class="products__container--top">
                            <img class="container__top--image" src="${product.image}" alt="">
                            <p class="container__top--text">${product.name}</p>
                    </div>
                </td>
                <td class="info-product td2">${product.orderId}</td>
                <td class="info-product td3">${product.department}</td>
                <td class="info-product td4"> 
                    ${(product.price/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                </td>
        </tr>
        `
   })

   const produHtml = productsHtmlArray.join(" ")
   menuGroupListTr.insertAdjacentHTML('beforeend', produHtml)
   
 
}



const mainProducts = async () => {
    const data = await fetchDataProducts();
    moreSold(data.products)
    
    
}

mainProducts()
