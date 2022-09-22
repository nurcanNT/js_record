//document.getElementById("count").innerText = 5
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment(){
    count += 1
    countEl.innerText = count
}

function save(){
    let saveStr =" "+count + " + "
    saveEl.innerText += saveStr
    countEl.innerText = 0
    count = 0
}

console.log("Let's collect the sets you made")

const display = document.querySelector(".recordclass");
const keys = document.querySelector("record");

const numbers = document.getElementById('numbers')
const result = document.getElementById('result')
const total = document.getElementById('total')

numbers.addEventListener('change', (e) => {
    const splittedValue = e.target.value.split(" ")
    console.log(splittedValue)
    let results = 0
    for (let i=0; i< splittedValue.length; i++){
        if(splittedValue[i] !== '+'){
            results += Number(splittedValue[i])
        }
    }
    console.log('result', results)
    total.addEventListener('click', () => {
        result.setAttribute('value', results)
    })
})




