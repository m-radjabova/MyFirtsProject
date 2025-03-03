export class Group {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.users = [];
    }
    addUser(user) {
        this.users.push(user);
    }
}
