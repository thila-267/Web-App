const usersURL = "https://jsonplaceholder.typicode.com/users"
const postsURL = "https://jsonplaceholder.typicode.com/posts"

const vm = new Vue({
	el: '#app',
	data: function () {
		return {
			posts: [],
			users: []
		}
	},

	mounted() {
		this.loadUsers();
		this.loadPosts();
	},

	methods: {
		loadUsers: function () {
			axios.get(usersURL).then((response) =>{
				this.users = response.data;
			})
			.catch(function (error){
				console.log(error);
			});

			console.log(this.users);
		},

		loadPosts: function () {
			axios.get(postsURL).then((response) =>{
				this.posts = response.data;
			})
			.catch(function (error){
				console.log(error);
			});

			console.log(this.posts);
		}
	}
});