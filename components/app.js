const submit = document.querySelector('.submit')
// No javascript é preferencial o uso do camelCase
// w3schools.com/js/js_conventions.asp#:~:text=camelCase%20is%20used%20by%20JavaScript,start%20names%20with%20a%20%24%20sign.

const card_1 = document.querySelector('.card-1')
const card_2 = document.querySelector('.card-2')
const btn_div = document.querySelectorAll('.btn-div')
const score = document.querySelector('.score')
let starScore = 3

submit.addEventListener('click', onSubmit)
btn_div.forEach((btn) => {
  btn.addEventListener('click', handleRatingBtnClick)
})

function onSubmit() {
  card_1.classList.add('ocult')
  score.textContent = starScore
  card_2.classList.remove('ocult')
}

function handleRatingBtnClick(e) {
  btn_div.forEach((btn) => {
    btn.classList.remove('active')
  })

  // mas funciona se clicar na parte do número do botão
  if (e.target.classList.contains('btn-div')) {
    e.target.classList.add('active')
  } else {
    e.target.parentElement.classList.add('active')
  }

  // pontuação de estrelas parse
  starScore = e.target.textContent
}

console.log(btn_div)
