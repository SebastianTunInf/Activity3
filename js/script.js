let firstName = 'Sebastian'
let lastName = 'Tun'
let country = 'Mexico'
let city = 'Playa del Carmen'
let age = 19
let isMarried = false
let birthYear = 2005
console.log (typeof firstName)
console.log (typeof lastName)
console.log (typeof country)
console.log (typeof city)
console.log (typeof age)
console.log (typeof isMarried)
console.log (typeof birthYear)
console.log ('10' === 10)
console.log (parseInt('9.8') == 10)

console.log (4 + 8 == 12)
console.log (20 == '20')
console.log (23**2 < 12**3)

console.log ('String' == 10)
console.log (2 < 1)
console.log ('yes' == 'no')

4 > 3 //true
4 >= 3 //true
4 < 3 //false
4 <= 3 //false
4 == 4 //true
4 === 4 //true
4 != 4 //false
4 !== 4 //false
4 != '4' //false
4 == '4' //true
4 === '4' //false

const time = new Date()
console.log ('The year is ' + time.getFullYear())
console.log ('The month today is ' + time.getMonth())
console.log ('Todays date is ' + time.getDate())
console.log ('Todays day is ' + time.getDay())
console.log ('The current hour is ' + time.getHours())
console.log ('The current minutes is ' + time.getMinutes())
console.log ('The number of seconds since Jan 1, 1970 is ' + time.getTime())

let base = Number(prompt('Enter a base'))
let height = Number(prompt('Enter height'))
let area = 0.5 * base * height
alert('The area of a triangle is ' + area)

let A = Number(prompt('Enter a side'))
let B = Number(prompt('Enter the next side'))
let C = Number(prompt('Enter last side'))
let perimeter = A + B + C
alert('The perimeter of the triangle is ' + perimeter)