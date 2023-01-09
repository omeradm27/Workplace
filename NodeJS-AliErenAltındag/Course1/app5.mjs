var obj = {
    "istanbul": [
        "ahmet",
        "mehmet",
        "ali",
        "eren"
    ],
    "Ankara": [
        "hakan",
        "zeynep",
        "yusuf"
    ]
}

obj[Symbol.iterator] = function () {
    const cityKeys = Object.keys(this);
    // console.log(cityKeys);
    let cityInd = 0;
    let userInd = 0;

    return {
        next: () => {
            if (cityInd > cityKeys.length - 1) {
                return
                {
                    value: undefined
                    done: true
                }
            }
            const users = obj[cityKeys[cityInd]];
            // console.log(users);
            const user = users[userInd];
            const isLastUser = userInd >= users.length - 1;
            console.log(isLastUser);
            if (isLastUser) {
                cityInd++;
                userInd = 0;
            } else {
                userInd++;
            }
            return {
                value: user, done: false
            }
        }
    }
}
const iterator = obj[Symbol.iterator]()
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
for (let valu of obj) {
    console.log(valu);
}


// const arr = Array(Object.entries(obj))
// for ( let key of arr) {
//         console.log(key);

// }