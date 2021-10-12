function listProcessor(inputArray) {
    let array = []

    let obj = {
        add: str => array.push(str),
        remove: str => (array = array.filter(x => x !== str)),
        print: () => console.log(array.join(","))
    }

    inputArray.forEach(x => {
        const [command, value] = x.split(" ")
        obj[command](value)
    })
}

console.log(listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']));
console.log(listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']));