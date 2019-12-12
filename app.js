const apiUrl = "apiurl";


function getUser(id) {
    return fetch(apiUrl + endpoint + "/getUser/" + id).then(
        response => response.json(),
    );
}

function createUser(data = {}) {
    return fetch(apiUrl + endpoint + "/createUser", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data),
    })
        .then(response => response.json());
}

function removeUser(id) {
    fetch(apiUrl + endpoint + "/deleteUser/" + id, {
        method: 'DELETE'
    }).then(() => {
        console.log('removed');
    }).catch(err => {
        console.error(err)
    });
};



getUser(1)
    .then(user => console.log(user))
    .catch(err => console.log(err));

createUser({email: 'email', password: 'password'})
    .then(user => console.log(user))
    .catch(err => console.log(err));
removeUser(2);
