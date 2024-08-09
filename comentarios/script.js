document.addEventListener('load', (event) => {
    var url = "https://jsonplaceholder.typicode.com/comments";

    var tablebody = document.querySelector("#tablebody");
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {

            console.log("mensagem");
            console.log(data);
            
            data.forEach(post => {
                //post.postid post.id post.nome post.email post.body
                tablebody.innerHTML += '<tr>' 
                        + '<td>' + post.postId + '</td>'
                        + '<td>' + post.id + '</td>'
                        + '<td>' + post.name + '</td>'
                        + '<td>' + post.email + '</td>'
                         + '<td>' + post.body + '</td>'
                        + '</tr>';
            });            

            for (let i = 0; i < data.length; i++) {
                //                
            }

        }).catch((error) => {
            console.error("Deu erro na requisição " + error);
        });            
});

function buscarComentarios(){
    var url = "https://jsonplaceholder.typicode.com/comments";

    var tablebody = document.querySelector("#tablebody");
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {

            console.log("mensagem");
            console.log(data);
            
            data.forEach(post => {
                //post.userId post.id post.title post.body
                tablebody.innerHTML += '<tr>' 
                                + '<td>' + post.postId + '</td>'
                                + '<td>' + post.id + '</td>'
                                + '<td>' + post.name + '</td>'
                                + '<td>' + post.email + '</td>'
                                + '<td>' + post.body + '</td>'
                                + '</tr>';
            });            

            for (let i = 0; i < data.length; i++) {
                //                
            }

        }).catch((error) => {
            console.error("Deu erro na requisição " + error);
        });
    

}