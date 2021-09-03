
import { getJokes } from "./data/JokesData.js";
import { NavBar } from "./nav/NavBar.js";
import { getPosts } from "./data/DataManager.js"
import { PostList } from "./feed/PostList.js"
import { Footer } from "./footer/Footer.js";


const showPostList = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		postElement.innerHTML = PostList(allPosts);
	})
}

const showNavBar = () => {
    //Get a reference to the location on the DOM where the nav will display
    const navElement = document.querySelector("nav");
	navElement.innerHTML = NavBar();
}

const showFooter = () => {
	const footerElement = document.querySelector("footer");
		footerElement.innerHTML = Footer();
}


// const startGiffyGram = () => {
//     const postElement = document.querySelector(".postList");
// 	postElement.innerHTML = "Hello Cohort 51"
// }
// // Are you defining the function here or invoking it?
// startGiffyGram();

// getUsers()
// .then(data => {
//     console.log("User Data", data)
// })


const theJokes = () => {
    const postElement = document.querySelector(".jokesList");
	getJokes().then(apiJoke => {
	postElement.innerHTML = `<h3>${apiJoke.joke}</h3>`
})
}

const applicationElement = document.querySelector(".giffygram");

applicationElement.addEventListener("click", event => {
    console.log("what was cicked", event.target)
	if (event.target.id === "logout"){
		console.log("You clicked on logout")
	}
})



// const aJoke = getJokes()
// 	.then(apijoke =>{
// 		console.log("now we can blah blah blah", apijoke)
// 	})
// 	console.log("a joke", aJoke)



const startGiffyGram = () => {
	showFooter();
    showNavBar();
	showPostList();
    theJokes();
}

startGiffyGram();