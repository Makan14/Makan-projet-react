import react from 'react'
import styles from "./caroussel.module.css";
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

export const Caroussel = () => {
    return (
        <div id={styles.carrousel}> 
            <div id={styles.container}></div> 

            <Image
                width={30} 
                height={30}
                src={'/assets/icons/back.png'} 
                className={styles.bouton}
                id={styles.g} 
            /> 

            <Carousel autoPlay="true" showThumbs={false}> 
                <div>
                    <img src="assets/icons/ville.jpg"  /> 
                    
                </div>
                <div>
                    <img src="assets/icons/desert.jpg" /> 
                    
                </div>
                <div>
                    <img src="assets/icons/iceberg.jpg" /> 
                    
                </div>
            </Carousel> 

            <Image
                width={30}
                height={30}
                src={'/assets/icons/next.png'} 
                className={styles.bouton}
                id={styles.d} 
            /> 
        </div>


        // document.body.onload=function(){ 
        //     nbr=5;
        //     p=0;
        //     container=document.getElementById("container"); 
        //     g=document.getElementById("g");
        //     d=document.getElementById("d"); 
        //     container.style.width=(800*nb)+"px";
        //     for(i=1;i<=nbr;i++){
        //         div=document.createElement("div");
        //         div.className="photo"; 
        //         div.style.backgroundImage="url('/assets/icons/desert"+i+".png')"; 
        //         container.appendChild(div);
        //     };  
        // };

        // g.onClick=function(){
        //     if(p>_nbr+1);
        //     p--;
        //     container.style.tranform="translate("+p*800+"px)";
        //     container.style.transition="all 0.5s ease";
        // }
    );
};