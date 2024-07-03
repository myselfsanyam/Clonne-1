'use client'
import styles from "../page.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Page2() {

    var user = '';
    const [userName, setUserName] = useState('')

    function handleOnClick(){
        user = userName;
    }
    return (
        <div className={styles.container2}>
            <div className={styles.item3}>
                <Link href={'/'}><img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Linktree_logo.svg/768px-Linktree_logo.svg.png?20230519151448" /></Link>
                <header style={{marginTop:"20px"}}>
                    <h1 className={styles.heading}><b>Welcome to Linktree!</b></h1>
                </header>
                <p className={styles.head2}>Choose your Linktree Username. You can always change it later.</p>
                <input value = {userName} onChange={e=>setUserName(e.target.value)} className={styles.input2} placeholder="linktr.ee/Username" type="text" />
                <div className={styles.section_5}>
                    By continuing, you agree to receve offers, news and updates from Linktree.
                </div>
                <Link href={'/page-3'}><button onClick={handleOnClick} style={{cursor:'pointer'}} className={styles.button3}>Continue</button></Link>
                <p className={styles.section_6}>Already have an account? <Link href={'/login'}><u style={{color:"purple"}}>Log in</u></Link></p>
            </div>
            <div className={styles.item4}>
            </div>
        </div>
    )
}