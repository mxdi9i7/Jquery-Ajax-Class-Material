

function getPosts() {
	$.ajax({
		method: "GET",
		url: "https://jsonplaceholder.typicode.com/posts",
		success: function(data) {
			console.log(data)
			for (var x = 0; x < data.length; x++) {
				$('.container').append(`
					<div class="item">
						<h1>${data[x].title}</h1>
						<p>${data[x].body}</p>
					</div>
				`)
			}
		},
		error: function(err) {
			console.log(err)
		}
	})
}

$('#getPosts').click(()=> {
	getPosts()
})

function getMovieStar() {
	var profileBase = "http://image.tmdb.org/t/p/w185"
	$.ajax({
		method: 'GET',
		url: 'https://api.themoviedb.org/3/search/person?api_key=46ce9ed4c1328f252f1df01a5aab79d7&language=en-US&query=xia%20hu&page=1&include_adult=false',
		success: function(data) {
			$('.container').append(`
				<div class="item">
					<h1>${data.results[0].name}</h1>
					<img src="${profileBase}${data.results[0].profile_path}" alt="" />
			`)
		}
	})
}
$('#getMovieStar').click(() => {
	getMovieStar();
})