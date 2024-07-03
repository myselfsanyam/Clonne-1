import styles from "../page.module.scss";

export default function Page3() {
    return (
        <div>
            <div>
                <p className={styles.head3}>Skip</p>
                <header style={{ marginTop: "60px" }}>
                    <h1 className={styles.heading}><b>Select your content</b></h1>
                </header>
                <p className={styles.head2}>Pick up to 5 link types to get started.</p>
            </div>
            <div className={styles.flexx}>
                <div className={styles.it}><img className={styles.img} src="https://i.pinimg.com/736x/9c/cb/ab/9ccbabb204ebd47699490f7861f9a7f3.jpg"/><p className={styles.p_in}>Instagram</p></div>
                <div className={styles.it}><img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4N37TIgWC_QLpspNwGddZH8DhzljeYMFnA&s"/><p className={styles.p_in}>Youtube</p></div>
                <div className={styles.it}><img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iC--5zTiupJVMCrdGNKrXI5aWAWL9s11hQ&s"/><p className={styles.p_in}>TikTok</p></div>
                <div className={styles.it}><img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTokBW8NNNPFDXuwJKtJ3TA_N7xlWxvBdygmg&s"/><p className={styles.p_in}>Amazon</p></div>
                <div className={styles.it}><img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPCV3ZRgO97xQMckhw3cz_96ZoMNysl7txw&s"/><p className={styles.p_in}>Spotify</p></div>
                <div className={styles.it}><img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBGZTGfhDdPpOOrCYOKA0sbUOhRbsi5MKtQw&s"/><p className={styles.p_in}>Facebook</p></div>
                <div className={styles.it}><img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDUZ2BWhjNV03w7pRihlkakcm54haTKdQDJA&s"/><p className={styles.p_in}>Whatsapp</p></div>
                <div className={styles.it}><img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfpYcsToPiZ2vuLbCkBRFWv_e7hR6BxQmHCw&s"/><p className={styles.p_in} style={{marginLeft:"42px"}}>X</p></div>
                <div className={styles.it}><img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5t5EajuCEkx7B_Gkv6UdnId73EA223p4Pw&s"/><p className={styles.p_in}>SoundCloud</p></div>
                <div className={styles.it}><img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyInoyZRs4Dnd3W7sXW67da20v9HweRA4slA&s"/><p className={styles.p_in}>Snapchat</p></div>
                <div className={styles.it}><img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9kQLQM6b3SILGflH3b0pOq7xomR22OZ-4Q&s"/><p className={styles.p_in}>Pintrest</p></div>
                <div className={styles.it}><img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREvyU9B7EgkL1eRfPOoifP9onFjZtkTJEd9Q&s"/><p className={styles.p_in}>Telegram</p></div>
            </div>
            <button className={styles.button4} style={{}}>Continue</button>
        </div>
    )
}