import styles from "./styles/Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.layers}>
                <div className={styles.layersHeader}>
                    <div className={styles.layersCaption}>WEBJOX</div>
                    <div className={styles.layersTitle}>Parallax</div>
                </div>
                <div
                    className={`${styles.layer} ${styles.layerBase}`}
                    style={{ backgroundImage: "url(/img/layer-base.png)" }}
                ></div>
                <div
                    className={`${styles.layer} ${styles.layerMiddle}`}
                    style={{ backgroundImage: "url(/img/layer-middle.png)" }}
                ></div>
                <div
                    className={`${styles.layer} ${styles.layerFront}`}
                    style={{ backgroundImage: "url(/img/layer-front.png)" }}
                ></div>
            </div>
        </header>
    );
};

export default Header;
