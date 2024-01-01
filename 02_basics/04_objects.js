// const tinderUser = new Object()  - This creates a singleton object
 const tinderUser = {} // This is a non singleton object.

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


// We can use object nesting in following way.
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// We can use multiple dot operators to go deep inside the nesting like we are accessing the firstname of the user in this case.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 }     // Prints { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// This is clearly a wrong way of combining 2 different objects if we do so we get object of objects. Instead of a single object.


// Instead we can use Object.assign method to assign multiple objects into single object. 
// In this syntax the first empty object serves as the target and rest all other objects serves as a source. 
// The catch is if we remove the empty object from the 1st arguement passed inside the assign function then it will assign all the objects into obj1.
// const obj3 = Object.assign({}, obj1, obj2, obj4) 


// We can use spread operator like used below to add multiple objects to single objects.
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// Scenario - WE GOT USERS ARRAY OF OBJECTS AND WE WANT TO ACCESS IT.
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// This could be one of the ways to access the objects but it is not very useful because not necessarily everytime we know the number/index of required object in array.
// console.log(users[1].email)


// 2nd way of accessing it is using Object.keys or Object.values or Object.entries
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));        // This Prints all the keys of tiderUser object in the form of an array.
// console.log(Object.values(tinderUser));      // This Prints all the values(of Keys/Properties) of tinderUser object in the form of an array.
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));        // We can check any object that its having a specific property or not using .hasOwnProperty.
// If the asked property exists then in that case it will return true else false.

// OBJECT DESTRUCTURING - Process of taking a single key/Property to store it in a variable is known as Destructuring of object.
// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// course.courseInstructor   // Accessing this value using this syntax is quite complex so here we use destructuring.


// HERE WE ARE DESTRUCTURING THE key CourseInstructor saperately, by this we can access courseInstructor value directly by typing courseInstructor instead of course.courseInstructor.

// const {courseInstructor} = course

// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

