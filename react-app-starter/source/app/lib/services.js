const fetch = require('isomorphic-fetch'); 
const shortid = require('shortid') 

const API_ROOT = 'https://service.us.apiconnect.ibmcloud.com/gws/apigateway/api/a3ba2a4e09d604c8268276a46076fb7efb447e8060ed52a5618f0a63426dcec1/ddac1bb9-5e21-46d5-9469-b38a89f6917a'

const getPosts = () => {
	const endpoint = `${API_ROOT}/mongo/getAll`
	return fetch(endpoint, {
		method: 'GET',
	})
	.then((response) => {
		return response.json(); 
	})
	.then((json) => {
		return json.response; 
	})
	.catch((error) => {
		throw new Error(error)
	}); 
}

// const PostSchema = mongoose.Schema({
//     postID: String,  
//     postUser: {
//         ibmID: { type: String, default: null},
//         name: String,  
//         email: String, 
//     },
//     postDate: String, 
//     postBody: String,
// });

const savePost = (postBody, userObject) => {
	const postID = shortid.generate(); 
	let postDate = new Date(); 
	postDate = postDate.toString(); 

	let postObject = {
		postID: postID, 
		postDate: postDate, 
		postBody: postBody, 
		postUser: userObject, 
	}

	const endpoint = `${API_ROOT}/mongo/save`; 
	return fetch(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ 
			postObject: postObject 
		})
	})
	.then((response) => {
		console.log('MONGO SAVE RESPONSE');
		return response.json(); 
	})
	.then((json) => {
		console.log(json);
		if (json.error) {
			throw new Error(json.error);
		}

		return json; 
	})
	.catch((error) => {
		throw new Error(error)
	});
}

module.exports = {
	getPosts, 
	savePost,
}