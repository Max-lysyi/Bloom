const cartWrapper = document.querySelector('.cart-wrapper')
console.log('Hello from Counter js');
window.addEventListener ('click', function (event){
    if (event.target.hasAttribute('data-cart')){

      const internal_main = event.target.closest('.internal_main');
      /* console.log(internal_main); */
      const productInfo = {
    id: internal_main.dataset.id,
    imgSrc: internal_main.querySelector('.internal_img').getAttribute('src'),
    title: internal_main.querySelector('.internal_name').innerText,
    itemsInBox: internal_main.querySelector('[data-items-in-box]').innerText,
      weight: internal_main.querySelector('.internal_price').innerText,
      counter: internal_main.querySelector('[data-counter]').innerText,
      }
      console.log(productInfo)





//const itemInCart = cartWrapper.querySelector('[data_id="' + productInfo.id + '"]')




      const cartItrmHTML = `
      <div class="block_1_add" id="my-modal_1">
                <img src="./img/image 2.png" alt="" width="150vh">
                <div>
                    <h4 class="name">Синя Кофта Guссi</h4>
                    <h2 class="name_price">1100 $</h2>
                    <div class="name_bloc">
                      <p class="size_add">Розмір: </p>
                      <button class="" id="close-my-modal-btn_one"">X</button>
                    </div>
               </div>
            </div>`;




    cartWrapper.insertAdjacentHTML('beforeend', cartItrmHTML)
    }

})

window.addEventListener('click', function (event){
  console.log(event.target.dataset.size)
//if (event.target.dataset.size){

//}


});