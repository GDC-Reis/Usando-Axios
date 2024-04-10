import axios from 'axios';
import { useEffect, useState } from 'react';

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const RequestPOST = () => {

    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`${baseURL}/5`) // Realiza o GET na constante baseURL parametrizando ela com o id 5
             .then((response) => { // Manipula o sucesso da requisição
                console.log(response.data);
                setPost(response.data); // a constante setPost recebe o valor de response.data
             })
    }, []);

    function createPost(){
        axios.post(baseURL, { // Realiza o POST na constante baseURL 
            title: "Hello World", // Passando os valores title e
            body: "This is a new post.", // Body da requisição
        })
        .then((response) => { // Manipula o sucesso da requisição
            console.log(response.data);
            setPost(response.data) // a constante setPost recebe o valor de response.data
        });
    }

    if(!post){ // Se o posto for vazio traz a mensagem "No post!"
        return "No post!";
    }

    return ( 
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={createPost}>Create Post</button>
        </div>
     );
}
 
export default RequestPOST;