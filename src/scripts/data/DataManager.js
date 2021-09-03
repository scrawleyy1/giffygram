const loggedInUser = {
	id: 1,
	name: "Sydney",
	email: "sydney@gmail.com",
	dateJoined: 1630513631166,
}

export const getLoggedInUser = () => {
	return loggedInUser;
}


export const getUsers = () => {
	return fetch("http://localhost:8088/users")
	.then(response => response.json())
}

export const getPosts = () => {
	return fetch("http://localhost:8088/posts")
	.then(response => response.json())
}

			// console.log("what is response", response)
		// return response.json()