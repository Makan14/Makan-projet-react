import react from 'react'
import styles from "./section_title.module.css"; 

export const Sectiontitle = () =>{
    return(
        <div className={styles.titleButton}>
            <h1>Feature categories</h1>
            <p>Lorem ipsum dolor sit amet</p>

            <button className={styles.btn}>View all</button> 
        </div>
    );
};