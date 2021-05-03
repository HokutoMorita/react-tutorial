export function fetchUser() {
    return {
        type: "FETCH_USER_FULFILLED",
        payload: {
            id: 0,
            name: "Will",
            age: 23
        }
    };
}

export function setUserName(name) {
    return {
        type: 'SET_USER_NAME',
        pauload: name
    };
}

export function setUserAge(age) {
    return {
        type: 'SET_USER_AGE',
        payload: age
    }
}
