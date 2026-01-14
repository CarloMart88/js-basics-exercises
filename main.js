// 1️⃣ Somma solo i numeri pari di un array
const nums = [2, 7, 4, 9, 12]

function isEven(array) {
  const filtered = nums.filter(n => n % 2 === 0)
  return filtered
}

const result1 = isEven(nums)
console.log(result1)


// 2️⃣ Conta quante parole contiene una frase
const frase = "JavaScript è un linguaggio potente"

function contaParole(string) {
  const parole = string.split(" ")
  return parole.length
  
}

const result2 = contaParole(frase)
console.log(result2)

// 3️⃣ Filtra gli oggetti con available: true
const items = [
  { name: "A", available: true },
  { name: "B", available: false },
  { name: "C", available: true }
]

function isTrue(array) {
  const filter = array.filter(a => a.available === true )
  return filter
}

const result3 = isTrue(items)
console.log(result3)

// 4️⃣ Trova il valore massimo in un array di numeri
const arr = [10, 3, 55, 2, 40]

const maxNumber = Math.max(...arr)
console.log(maxNumber)


// 5️⃣ Capitalizza la prima lettera di ogni parola
const title = "ciao mondo javascript"

function capitalize(string) {
  const split = string.split(" ")
  console.log(split)
  const capitalize = split.map(s => s[0].toUpperCase() + s.slice(1))
  return capitalize.join(" ")
  
}

const result5 = capitalize(title)
console.log(result5)


// 6️⃣ Crea un array con le lunghezze delle parole
const parole = ["ciao", "carlo", "javascript"]

function numeroParole(arr) {
  const arrayLength = arr.map(a => a.length)
  return arrayLength
  
}

const result6 = numeroParole(parole)
console.log(result6)

// 7️⃣ Ordina un array di oggetti per età crescente

const people = [
  { name: "Luca", age: 30 },
  { name: "Anna", age: 22 },
  { name: "Marco", age: 40 }
]

people.sort((a , b) => a.age - b.age)
console.log(people)



// 8️⃣ Rimuovi i duplicati da un array
const nums2 = [1, 2, 2, 3, 4, 4, 5]

const newNums = new Set(nums2)

const result8 = [...newNums]

console.log(result8)


// 9️⃣ Conta quante volte compare una lettera
const parola = "programmazione"
const lettera = "a"

// 🔟 Trasforma un array di numeri in stringhe con “€”
const prezzi = [10, 20, 35]
