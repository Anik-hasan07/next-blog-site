import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {

  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/mitu.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Fashion</span>
          <h3 className={styles.postTitle}>
          Zahara Mitu defends 'Joy Bangla' poster after backlash...
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Anik Hasan Bijoy</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/khan.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
          Fashion
          </span>
          <h3 className={styles.postTitle}>
          Shakib Khan set to star Pan-Indian film 'Dard' alongside Sonal Chauhan...
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Anik Hasan Bijoy</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/zayed.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Fashion</span>
          <h3 className={styles.postTitle}>
          Zayed Khan to dance at National Film Awards ceremony...
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Anik Hasan Bijoy</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/puja.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
          Puja Cherry pairs up with Mr. Khan again...
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Anik Hasan Bijoy</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MenuPosts