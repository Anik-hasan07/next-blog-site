import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

const page = () => {
  return (
    <div className={styles.aboutus}>
    <div className={styles.about}>
      {/* <Image src="/p1.jpeg" alt="" fill className={styles.pic} /> */}
      <div className={styles.text}>
        <h2>About Us</h2>
        <h5>Front-end Developer & <span>Designer</span></h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
        <div className={styles.data}>
        <a href="#" className={styles.hire}>Hire Me</a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default page;