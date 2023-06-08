import { LikeButton } from "./LikeButton"


const fetchPost = () => {

    console.log('FETCHING POSTS!!!!!')

    return fetch('https://jsonplaceholder.typicode.com/posts', { 
        next:{
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export async function ListOfPosts() {

    const posts = await fetchPost()


    return posts.slice(0, 5).map(post => (
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <LikeButton id={post.id} />
        </article>
    ))
}


