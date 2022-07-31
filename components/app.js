const submit = document.querySelector('.submit')
const card1Form = document.querySelector('.Card-1 form')
const card1 = document.querySelector('.Card-1')
const card1Btn = document.querySelectorAll('.Card-1 .CardRate input')
const card2 = document.querySelector('.Card-2')
const score = document.querySelector('.Card-2 span.score')

// coloquei os submit no valor booleanas
function On_Submit() {
  submit.disabled = false
}

function OffSubmit() {
  submit.disabled = true
}

// passando um loop para percorrer o array - e adicionando um evento change
card1Btn.forEach((btnOptions) => {
  btnOptions.addEventListener('change', (e) => HandleRating(e))
})

/* passei uma função com evento
   uma constante passando o evento com o target 
   assim fazendo referencia ao meu objeto */
function HandleRating(e) {
  const btnOptions = e.target

  // e passando o controle de estado do submit
  if (!btnOptions.checked) {
    OffSubmit()
    return
  }

  On_Submit()
}

// passando um evento submit (ele é um dos metodos dentro de formulario *form*)
card1Form.addEventListener('submit', (e) => OnSubmit(e))

// usando o preventDefault para previnir o comportamento padrão do evento
function OnSubmit(e) {
  e.preventDefault()

  // o FormData tem o papel de construir um conjunto de valores do card1Form
  const formData = new FormData(card1Form)
  // retorna o primeiro valor da chave fornecida do objeto
  const value = formData.get('BtnInput')

  // caso o objeto seja diferente de vazio, execute as condições
  if (value != '') {
    console.log(value)
    score.innerText = `You selected ${value} out of 5`
    card1.classList.add('ocult')
    card2.classList.remove('ocult')
  }
}
