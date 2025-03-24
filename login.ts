interface User {
    username: string;
    password: string;
}
function register(username: string, password: string): boolean {
    if (users.find(user => user.username === username)) {
        return false; // Username already exists
    }
    users.push({ username, password });
    return true;
}
const users: User[] = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

function login(username: string, password: string): boolean {
    const user = users.find(user => user.username === username && user.password === password);
    return user !== undefined;
}

// Example usage
const username = 'user1';
const password = 'password1';

if (login(username, password)) {
    console.log('Login successful');
} else {
    console.log('Login failed');
}