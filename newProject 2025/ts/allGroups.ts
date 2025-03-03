import { User } from "./users.js";
import { Group } from "./group.js";

let groupList = document.getElementById("groupList") as HTMLUListElement;
let content = document.getElementById("content") as HTMLDivElement;
let userNameInp = document.getElementById("name") as HTMLInputElement;
let userAgeInp = document.getElementById("age") as HTMLInputElement;
let groupNameInp = document.getElementById("groupInp") as HTMLInputElement;

let selectedGroup: Group;
let groups: Group[] = [];

let group1 = new Group(1, "1KT-23")
let group2 = new Group(2, "2KT-23")
let group3 = new Group(3, "3KT-23")

groups.push(group1, group2, group3)

function drawGroup() {
    let s = '';
    groups.forEach((group, index) => {
        s += `
        <li class="list-group-item list-group-item-action mt-3" onclick="drawUsers(${index})"> ${group.name} <i onclick="deleteGroup(${index})" class="bi bi-trash3"></i> </li>
        `;
    });
    groupList.innerHTML = s;
}

(window as any).addGroup = function addGroup(e: Event) {
    e.preventDefault();
    let name = groupNameInp.value;
    if (!name) return;
    let group = new Group(groups.length + 1, name);
    groups.push(group);3
    drawGroup();
    groupNameInp.value = '';
};

(window as any).deleteGroup = function deleteGroup(index: number) {
    groups.splice(index, 1);
    drawGroup();
};

(window as any).drawUsers = function drawUsers(groupIndex: number) {
    selectedGroup = groups[groupIndex];
    let group = groups[groupIndex];
    let s = ``;
    group.users.forEach((user, userIndex) => {
        s += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td> 
                    <button class="btn btn-info" onclick="deleteUsers(${groupIndex}, ${userIndex})">
                        delete <i class="bi bi-person-dash-fill"></i>
                    </button> 
                </td>
            </tr>
        `;
    });

    content.innerHTML = `
    <div class="d-flex justify-content-between align-items-center"> 
        <h1>Group: ${group.name} <i class="bi bi-house-heart"></i></h1>
        <button class="btn btn-info btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal"> add users </button>
    </div>
        <table class="table table-striped mt-4 table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>${s}</tbody>
        </table>
    `;
};

(window as any).addStudents = function addStudents(e: Event) {
    e.preventDefault();
    let name = userNameInp.value;
    let age = userAgeInp.valueAsNumber;
    if (!name || !age) return;
    selectedGroup.users.push(new User(selectedGroup.users.length + 1, name, age));
    (e.target as HTMLFormElement).reset();
    (window as any).drawUsers(groups.indexOf(selectedGroup));
};

(window as any).deleteUsers = function deleteUsers(groupIndex: number, userIndex: number) {
    let group = groups[groupIndex];
    if (!group) return;
    group.users.splice(userIndex, 1);
    (window as any).drawUsers(groupIndex);
};

group1.addUser(new User(1, "Mary", 23));
group1.addUser(new User(2, "John", 25));
group1.addUser(new User(3, "David", 26));
group1.addUser(new User(4, "Peter", 27));

group2.addUser(new User(1, "Sarah", 24));
group2.addUser(new User(2, "Emma", 22));
group2.addUser(new User(3, "Oliver", 21));
group2.addUser(new User(4, "William", 20));


drawGroup();