import Link from "next/link"
import { LikeButton } from "./LikeButton"

const fetchPost = () => {

    //getStaticProps
    // => return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

    //getServerProps
    // => return fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store}).then(res => res.json())

    //Incremental static regeneration
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export async function ListOfPosts() {

    const posts = await fetchPost()

    return posts.slice(0, 5).map(post => (
        <article key={post.id}>
            <Link href={`/posts/${post.id}`} rel="preload">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </Link>
            <LikeButton id={post.id} />

        </article>
    ))
}



