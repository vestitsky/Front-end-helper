/* Basic construct */
for (let i = 0; i < 5; i++) {
    console.log('Loop'+ i)
}

console.log('Basic Loop')

for (let i = 5; i > 0; i--) {
    console.log('Loop'+ i)
}

console.log('Invert Loop')

for (let i = 0; i < 5; i++) {
    console.log('Loop'+ i)
    if (i === 3) break
}

console.log('Loop with statements')

const names = ['john','bob','mary','joe']
for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

console.log('Basic for varible')

// for (name of names) console.log(name)
for (name of names) {
    console.log(name)
}

console.log('Loop with "of"')

const user = {'firtName':'John', 'lastName':'Doe'}
for (key in user) console.log(user[key])

console.log('Loop with "in"')

/* Loop threw document elements */ 

var friends = ["Oscar", "Angela", "Kevin"]
/*
for (var i = 0; i < friends.length; i++) {
    document.write(friends[i] + "<br>")
}
*/
friends.forEach(function(element){
    document.write(element + "<br>")
})