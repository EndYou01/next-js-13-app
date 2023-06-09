

import Link from "next/link";

const fetchSinglePost = (id) => {
    //Incremental static regeneration
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function Post({ params }) {

    const { id } = params

    const post = await fetchSinglePost(id)

    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/posts/${id}/comments`}>Ver Comentarios</Link>
        </article>
    );
}

