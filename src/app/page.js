'use client'
import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  const obj = {
    email:'',
    password:'',
  }
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');

  const handleOnClick=()=>{
    obj.email=email;
    obj.password=password;
  }
  return (
    <div className={styles.container}>
      <div className={styles.item1}>
        <Link href={'/'}><img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Linktree_logo.svg/768px-Linktree_logo.svg.png?20230519151448"/></Link>
        <header>
          <h1 className={styles.heading}><b>Join Linktree</b></h1>
        </header>
        <p className={styles.head2}>Sign up for free!</p>
        <div className={styles.mid_section}>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} className={styles.input} placeholder="Email" type="email" /><br />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} className={styles.input} placeholder="Password" type="password" /><br />
        <Link href={'/page-2'}><button style={{cursor:'pointer'}} onClick={handleOnClick} className={styles.button}>Create account</button></Link>
        </div>
        <div className={styles.section_2}>
        By clicking <b>Create account</b>, you agree to Linktree's <Link href={'/terms'}><u>Terms and Conditions</u></Link> and confirm you have read our <Link href={'/policy'}><u>Privacy Notice</u></Link>. You may receive offers, news and updates from us.
        </div>
        <p className={styles.section_3}>OR</p>
        <Link href={'/google'}><button className={styles.button2} style={{cursor:'pointer'}}><img className={styles.button_image} src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google image" /> <b> Sign up with Google</b></button></Link>
        <Link href={'/apple'}><button className={styles.button2} style={{cursor:'pointer'}}><img className={styles.button_image} src="https://toppng.com/uploads/preview/apple-logo-logo-png-hd-11659045607tbk23cqe0z.png" alt="Apple logo png" /> <b> Sign up with Apple</b></button></Link>
        <p className={styles.section_4}>Already have an account? <Link href={'/login'}><u style={{color:"purple"}}>Log in</u></Link></p>
        <footer className={styles.footer}>
          <p>This site protected by reCAPTCHA and the <u>Google Privacy Policy</u> and <u>Terms of Service</u> apply.</p>
        </footer>
      </div>
      <div className={styles.item2}>
      </div>
    </div>
  );
}
