// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.

// Append the katas to this element:
function printKataHeading (parentElement, kataNumber){
    const kata1Heading = document.createElement('h1')
    kata1Heading.append('KATA ' + kataNumber)
    parentElement.append(kata1Heading)
}

function printObject (parentElement, object) {
    const stringifiedObject = JSON.stringify(object)
    parentElement.append(stringifiedObject)
}
const main = document.querySelector('main')
const body = document.createElement('h1')
printKataHeading(main, 1)

// Kata 1: Use the .filter() method
console.groupCollapsed('kata 1')
const isActive = users.filter(user => user.isActive === true)
main.append(JSON.stringify(isActive))
console.log(JSON.stringify(isActive))
console.groupEnd()

// Kata 2: Use the .map() method
printKataHeading(main, 2)
console.groupCollapsed('kata 2')
    const emailAddress = users.map(user => user.email)
    main.append(JSON.stringify(emailAddress))
console.groupEnd()

// Kata 3: Use the .some() method
printKataHeading(main, 3)
console.groupCollapsed('kata 3')
    const ovationPropery = users.some(user => user.company === "OVATION")
    main.append(JSON.stringify(ovationPropery))
console.groupEnd()

// Kata 4: Use the .find() method
printKataHeading(main, 4)
console.groupCollapsed('kata 4')
    const ageMatters = users.find(user => user.age > 38)
   main.append(JSON.stringify(ageMatters))
console.groupEnd()

// Kata 5: Use the .filter() and .find() methods
printKataHeading(main, 5)
console.groupCollapsed('kata 5')
    const overAge = users
    .filter(user => user.age > 38)
    .find(user => user.isActive)
    main.append(JSON.stringify(overAge))
console.groupEnd()

// Kata 6: Use the .filter() and .map() methods
printKataHeading(main, 6)
console.groupCollapsed('kata 6')
const balanceZenco = users
    .filter(user => user.company === 'ZENCO')
    .map(user => user.balance)
    main.append(JSON.stringify(balanceZenco))
console.groupEnd()

// Kata 7: Use the .filter() method with .includes()
printKataHeading(main, 7)
console.groupCollapsed('kata 7')
const ageWithFugiat = users
    .filter(user => user.tags.includes('fugiat'))
    .map(user => user.age)
    main.append(JSON.stringify(ageWithFugiat))
console.groupEnd()
