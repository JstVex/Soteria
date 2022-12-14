import styles from "../styles/Websites.module.css"

const ShowPosts = ({ post, i }) => {
    return (
        <a href={post.urls[i]} target="_blank">
            <div className={styles.card2}>
                <img src={post.imgs[i]} alt="" className={styles.img} />
                <p className={styles.title}>{post.titles[i]}</p>
                <span className={styles.text}>{post.texts[i].slice(0, 150) + '...'}</span>
                <div className={styles.extra}>
                    <span className={styles.topic}>{post.topic}</span>
                    <span className={styles.date}>{post.dates[i]}</span>
                    <span className={styles.name}>{post.website}</span>
                </div>
            </div>
        </a>
    );
}

export default ShowPosts;