// import Counter from "./Counter";

export default function PostsLayout({ children }) {
    return (
        <div>
            {/* <Counter /> */}
            <marquee style={{color: 'purple', background: 'white'}}>El mejor canal de Twitch de programacion: @midudev</marquee>
            {children}
        </div>
    );
}

