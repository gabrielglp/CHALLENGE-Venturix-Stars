const submit = document.querySelector('.submit')
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
