function buscarPosts(){
    var url = "https://jsonplaceholder.typicode.com/posts";
    var tablebody = document.querySelector("#tablebody");

    fetch(`${url}`)
        .then((response ) => response.json())
        .then((data) => {

            console.log("mensagem");
            console.log(data);

            data.forEach(post => {
                //post.userId  post.id post.title post.body
                tablebody.innerHTML  += '<tr>'
                                        +'<td>'+ post.userId +'</td>'
                                        +'<td>'+ post.id +'</td>'
                                        +'<td>'+ post.title+'</td>'
                                        +'<td>'+ post.body+'</td>'
                                        +'</tr>';
            });
        }).catch(error => {console.error("deu erro na requisição" + error)});
}