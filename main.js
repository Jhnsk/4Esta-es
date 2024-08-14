let btn = document.querySelector('.ref')
let nav = document.querySelector('.navegation')
const topNav = nav.offsetTop
let c = (el) => document.querySelector(el)

window.onscroll = function() {
  fixaTop()
}

function fixaTop() {
  if (window.pageYOffset >= topNav) {
    nav.classList.add('fixa')
    nav.style.background = '#19191a'
    nav.style.marginTop = '-1px'
  } else {
    nav.classList.remove('fixa')
    nav.style.background = ''
    nav.style.marginTop = ''
  }
}

window.onload = function() {
  if (btn.classList.contains('active')) {
    refItens.map((item, index) => {
      let ref = c('.models .item-content').cloneNode(true)

      ref.querySelector('.img-content img').src = item.img
      ref.querySelector('.item--name').innerHTML = item.name
      ref.querySelector('.item--desc').innerHTML = item.desc
      ref.querySelector('.item--price').innerHTML = item.price

      c('.item-area').append(ref)
    })
  }
}

document.querySelectorAll('a').forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()


    switch (index) {
      case 0:
        c('.item-area').innerHTML = ''
        c('.pra').classList.remove('active')
        c('.pet').classList.remove('active')
        c('.esp').classList.remove('active')
        c('.cal').classList.remove('active')
        c('.por').classList.remove('active')
        c('.cer').classList.remove('active')
        c('.dri').classList.remove('active')
        c('.des').classList.remove('active')
        c('.vin').classList.remove('active')
        c('.cac').classList.remove('active')
        c('.beb').classList.remove('active')
        item.classList.add('active')

        refItens.map((item, index) => {
          let ref = document.querySelector('.models .item-content').cloneNode(true)

          ref.querySelector('.item--name').innerHTML = item.name
          ref.querySelector('.item--desc').innerHTML = item.desc
          ref.querySelector('.img-content img').src = item.img
          ref.querySelector('.item--price').innerHTML = item.price

          c('.item-area').append(ref)
        })
        break;
      case 1:
        c('.item-area').innerHTML = ''
        c('.ref').classList.remove('active')
        c('.pet').classList.remove('active')
        c('.esp').classList.remove('active')
        c('.cal').classList.remove('active')
        c('.por').classList.remove('active')
        c('.cer').classList.remove('active')
        c('.dri').classList.remove('active')
        c('.des').classList.remove('active')
        c('.vin').classList.remove('active')
        c('.cac').classList.remove('active')
        c('.beb').classList.remove('active')
        item.classList.add('active')

        pratoItens.map((item, index) => {
          let pF = c('.models .item-content').cloneNode(true)

          pF.querySelector('.item--name').innerHTML = item.name
          pF.querySelector('.item--desc').innerHTML = item.desc
          pF.querySelector('.item--price').innerHTML = item.price
          pF.querySelector('.img-content img').src = item.img

          c('.item-area').append(pF)
        })
        break;
      case 2:
        c('.item-area').innerHTML = ''
           c('.pra').classList.remove('active')
           c('.ref').classList.remove('active')
           c('.esp').classList.remove('active')
           c('.cal').classList.remove('active')
           c('.por').classList.remove('active')
           c('.cer').classList.remove('active')
           c('.dri').classList.remove('active')
           c('.des').classList.remove('active')
           c('.vin').classList.remove('active')
           c('.cac').classList.remove('active')
           c('.beb').classList.remove('active')
           item.classList.add('active')

        ptItens.map((item, index) => {
          let pt = c('.models .item-content').cloneNode(true)

          pt.querySelector('.item--name').innerHTML = item.name
          pt.querySelector('.item--desc').innerHTML = item.desc
          pt.querySelector('.item--price').innerHTML = item.price
          pt.querySelector('.img-content img').src = item.img
          c('.item-area').append(pt)

        })
        break;
      case 3:

        c('.item-area').innerHTML = ''
           c('.pra').classList.remove('active')
           c('.pet').classList.remove('active')
           c('.ref').classList.remove('active')
           c('.cal').classList.remove('active')
           c('.por').classList.remove('active')
           c('.cer').classList.remove('active')
           c('.dri').classList.remove('active')
           c('.des').classList.remove('active')
           c('.vin').classList.remove('active')
           c('.cac').classList.remove('active')
           c('.beb').classList.remove('active')
           item.classList.add('active')

        espItens.map((item, index) => {
          let esp = c('.models .item-content').cloneNode(true)

          esp.querySelector('.item--name').innerHTML = item.name
          esp.querySelector('.item--desc').innerHTML = item.desc
          esp.querySelector('.item--price').innerHTML = item.price
          esp.querySelector('.img-content img').src = item.img
          c('.item-area').append(esp)
        })
        break;
      case 4:
        c('.item-area').innerHTML = ''
           c('.pra').classList.remove('active')
           c('.pet').classList.remove('active')
           c('.esp').classList.remove('active')
           c('.ref').classList.remove('active')
           c('.por').classList.remove('active')
           c('.cer').classList.remove('active')
           c('.dri').classList.remove('active')
           c('.des').classList.remove('active')
           c('.vin').classList.remove('active')
           c('.cac').classList.remove('active')
           c('.beb').classList.remove('active')
           item.classList.add('active')

        calItens.map((item, index) => {
          let cal = c('.models .item-content').cloneNode(true)

          cal.querySelector('.item--name').innerHTML = item.name
          cal.querySelector('.item--desc').innerHTML = item.desc
          cal.querySelector('.item--price').innerHTML = item.price
          cal.querySelector('.img-content img').src = item.img
          c('.item-area').append(cal)
        })
        break;
      case 5:
        c('.item-area').innerHTML = ''
           c('.pra').classList.remove('active')
           c('.pet').classList.remove('active')
           c('.esp').classList.remove('active')
           c('.cal').classList.remove('active')
           c('.ref').classList.remove('active')
           c('.cer').classList.remove('active')
           c('.dri').classList.remove('active')
           c('.des').classList.remove('active')
           c('.vin').classList.remove('active')
           c('.cac').classList.remove('active')
           c('.beb').classList.remove('active')
           item.classList.add('active')

        porcItens.map((item, index) => {
          let por = c('.models .cart-item').cloneNode(true)

          por.querySelector('.cart--desc').innerHTML = item.name

          por.querySelector('.cart--price').innerHTML = item.price

          c('.item-area').append(por)
        })

        break;

      case 6:
        c('.item-area').innerHTML = ''
           c('.pra').classList.remove('active')
           c('.pet').classList.remove('active')
           c('.esp').classList.remove('active')
           c('.cal').classList.remove('active')
           c('.por').classList.remove('active')
           c('.ref').classList.remove('active')
           c('.dri').classList.remove('active')
           c('.des').classList.remove('active')
           c('.vin').classList.remove('active')
           c('.cac').classList.remove('active')
           c('.beb').classList.remove('active')
           item.classList.add('active')

        beersItens.map((item, index) => {
          let beer = c('.models .item-content').cloneNode(true)

          beer.querySelector('.item--name').innerHTML = item.name
          beer.querySelector('.item--desc').innerHTML = item.desc
          beer.querySelector('.item--price').innerHTML = item.price
          beer.querySelector('.img-content img').src = item.img

          c('.item-area').append(beer)
        })
        break;

      case 7:
        c('.item-area').innerHTML = ''
           c('.pra').classList.remove('active')
           c('.pet').classList.remove('active')
           c('.esp').classList.remove('active')
           c('.cal').classList.remove('active')
           c('.por').classList.remove('active')
           c('.cer').classList.remove('active')
           c('.ref').classList.remove('active')
           c('.des').classList.remove('active')
           c('.vin').classList.remove('active')
           c('.cac').classList.remove('active')
           c('.beb').classList.remove('active')
           item.classList.add('active')

        drinksItens.map((item, index) => {
          let drink = c('.models .item-content').cloneNode(true)

          drink.querySelector('.item--name').innerHTML = item.name
          drink.querySelector('.item--desc').innerHTML = item.desc
          drink.querySelector('.item--price').innerHTML = item.price
          drink.querySelector('.img-content img').src = item.img

          c('.item-area').append(drink)
        })
        break;
      case 8:

        c('.item-area').innerHTML = ''
           c('.pra').classList.remove('active')
           c('.pet').classList.remove('active')
           c('.esp').classList.remove('active')
           c('.cal').classList.remove('active')
           c('.por').classList.remove('active')
           c('.cer').classList.remove('active')
           c('.dri').classList.remove('active')
           c('.ref').classList.remove('active')
           c('.vin').classList.remove('active')
           c('.cac').classList.remove('active')
           c('.beb').classList.remove('active')
           item.classList.add('active')

        destItens.map((item, index) => {
          let dest = c('.models .cart-item').cloneNode(true)

          dest.querySelector('.cart--desc').innerHTML = item.name
          dest.querySelector('.cart--price').innerHTML = item.price


          c('.item-area').append(dest)
        })
        break;
      case 9:
        c('.item-area').innerHTML = ''
           c('.pra').classList.remove('active')
           c('.pet').classList.remove('active')
           c('.esp').classList.remove('active')
           c('.cal').classList.remove('active')
           c('.por').classList.remove('active')
           c('.cer').classList.remove('active')
           c('.dri').classList.remove('active')
           c('.des').classList.remove('active')
           c('.ref').classList.remove('active')
           c('.cac').classList.remove('active')
           c('.beb').classList.remove('active')
           item.classList.add('active')

        vinhItens.map((item, index) => {
          let vinho = c('.models .item-content').cloneNode(true)

          vinho.querySelector('.item--name').innerHTML = item.name
          vinho.querySelector('.item--desc').innerHTML = item.desc
          vinho.querySelector('.item--price').innerHTML = item.price
          vinho.querySelector('.img-content img').src = item.img

          c('.item-area').append(vinho)
        })
        break;
      case 10:
        c('.item-area').innerHTML = ''
           c('.pra').classList.remove('active')
           c('.pet').classList.remove('active')
           c('.esp').classList.remove('active')
           c('.cal').classList.remove('active')
           c('.por').classList.remove('active')
           c('.cer').classList.remove('active')
           c('.dri').classList.remove('active')
           c('.des').classList.remove('active')
           c('.vin').classList.remove('active')
           c('.ref').classList.remove('active')
           c('.beb').classList.remove('active')
           item.classList.add('active')

        cachaItens.map((item, index) => {
          let cash = c('.models .cart-item').cloneNode(true)

          cash.querySelector('.cart--desc').innerHTML = item.name
          cash.querySelector('.cart--price').innerHTML = item.price


          c('.item-area').append(cash)
        })
        break;
      case 11:
        c('.item-area').innerHTML = ''
           c('.pra').classList.remove('active')
           c('.pet').classList.remove('active')
           c('.esp').classList.remove('active')
           c('.cal').classList.remove('active')
           c('.por').classList.remove('active')
           c('.cer').classList.remove('active')
           c('.dri').classList.remove('active')
           c('.des').classList.remove('active')
           c('.vin').classList.remove('active')
           c('.cac').classList.remove('active')
           c('.ref').classList.remove('active')
           item.classList.add('active')

        bebidasItens.map((item, index) => {
          let bebi = c('.models .item-content').cloneNode(true)

          bebi.querySelector('.item--name').innerHTML = item.name
          bebi.querySelector('.item--desc').innerHTML = item.desc
          bebi.querySelector('.item--price').innerHTML = item.price
          bebi.querySelector('.img-content img').src = item.img

          c('.item-area').append(bebi)
        })
        break;
      default:

    }


  })
})