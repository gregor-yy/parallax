import styles from "./styles/Article.module.css";

const Article = () => {
    return (
        <article
            className={styles.article}
            style={{ backgroundImage: "url(/img/dungeon.jpg)" }}
        >
            <div className={styles.articleContent}>
                <h2 className={styles.articleHeader}>To be continued</h2>
                <p className={styles.articleText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi quibusdam culpa, pariatur assumenda quae sed ipsam
                    deleniti inventore cumque ad eaque, velit distinctio quidem
                    molestias! Quibusdam corporis, dolorem velit consectetur id
                    repellat.
                </p>
            </div>
            <div className={styles.copy}>WEBJOX</div>
        </article>
    );
};

export default Article;
