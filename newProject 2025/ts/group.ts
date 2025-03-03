import { User } from "./users.js";

export class Group {
    id: number;
    name: string;
    users: User[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.users = [];
    }
    addUser(user: User) {
        this.users.push(user);
    }
}