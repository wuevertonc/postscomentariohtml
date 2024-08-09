<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atividade Posts</title>
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css">    
</head>
<body onload="buscarComentarios()">

    <button onclick="buscarComentarios()">Buscar comentários</button>

    <table class="zebra">
        <thead>
            <tr>
                <td>Post ID</td>
                <td>ID</td>
                <td>name</td>
                <td>email</td>
                <td>body</td>
            </tr>
        </thead>

        <tbody id="tablebody">
        </tbody>
    </table>
    
</body>
</html>