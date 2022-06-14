let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
        {
             street: "Kulas Light",
             suite: "Apt. 556",
             city: "Gwenborough",
             zipcode: "92998-3874",
        },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

//spread operator
let newData = {
    ...data,
    name: "Apriyanto Dwi Herlambang",
    email: "dwiherlambangapri@gmail.com",
    hobby: "Camping"
}

console.log(newData)

//destructuring
let {street, city} = newData.address;
console.log(street, city)