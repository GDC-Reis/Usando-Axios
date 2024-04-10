import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";


const RequestGET = () => {

    // Verificar como utilizar o useState e useEffect

    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(baseURL) // Realiza o GET na constante baseURL
        .then((response) => { // Manipula o sucesso da requisição
            setPost(response.data); // a constante setPost recebe o valor de response.data
            console.log(response.data.title);
            console.log(response.data.body);
        })
    }, []);

    if(!post){  // Se o post for vazio 
        return null;  // Retorne null
    }


    return ( 
        <div className="App">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
     );
}
 
export default RequestGET;