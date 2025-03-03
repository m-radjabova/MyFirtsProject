interface Person {
    id: number;
    name: string;
    age: number;
    email: string;

    greet(): void;
    getName(): void;
}

class Student implements Person {
    id: number;
    name: string;
    age: number;
    email: string;

    constructor(id: number, name: string, age: number, email: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. My email is ${this.email}.`);
    }

    getName() {
        console.log(`My name is ${this.name}`);
    }
}

let student1 = new Student( 1, "John Doe", 25, "john.doe@example.com")

student1.getName()
student1.greet()


interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

axios.get<User[]>(
    'https://jsonplaceholder.typicode.com/users',
).then(res => {
    drawUsers(res.data)
})

function drawUsers(users: User[]) {
    let s = ''
    users.forEach(user => {
        s += `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <p class="card-text">${user.username}</p>
                <p class="card-text">${user.email}</p>
            </div>
        </div>
        `
    })

    document.getElementById('container')!.innerHTML = s
}