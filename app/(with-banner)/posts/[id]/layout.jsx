import Link from "next/link";

const fetchSinglePost = (id) => {
    //Incremental static regeneration
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function Post({children, params }) {

    const { id } = params

    const post = await fetchSinglePost(id)

    return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link href={`/posts/${id}/comments`}>Ver Comentarios</Link>
            {children}
        </article>
    );
}

