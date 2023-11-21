"use client"
import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import ReactTyped from "react-typed";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Bangladesh Cultural Practice Forum</b> 
        <br/>
        
        <ReactTyped strings={["Discover our stories and creative ideas."]} typeSpeed={100} loop style={{ color: 'green',fontWeight: 'bold' }} />
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/raju.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Zakir hossain raju receiving national award from primeminister.</h1>
          <p className={styles.postDesc}>
          Zakir Hossain Raju is a Bangladeshi film director. Besides film-making, he is also a story writer, screenplay and dialogue writer. He won three National Film Awards for the films Bhalobaslei Ghor Bandha Jay Na and Moner Moto Manush Pailam Na.
          </p>
          <button className={styles.button}>Donate Us</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;