// const { default: axios } = require("axios")

const resBtn = document.getElementById('get-res')

getResidentData = () => {
  axios.get(url).then(res => {
    debugger
    let residents = res.data.results[0].residents;
    return residents.map(url => {
      axios.get(url).then(res => 
        renderData(res.data))
    })
  })
}

renderData = data => {
  let {name} = data
  let h2 = document.createElement('h2')
  h2.textContent = name
  document.getElementById('target').appendChild(h2)
}

const url = 'https://swapi.dev/api/planets/?search=alderaan'
const url2 = 'https://swapi.dev/api/plants/2'

resBtn.addEventListener('click', getResidentData)
