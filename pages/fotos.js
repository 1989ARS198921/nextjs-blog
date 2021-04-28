
import React from 'react'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image';



export default function Foto () {
    return (
        <div className={utilStyles.headingFOT}>
      <div className={utilStyles.headingFOT}>
        <div className={utilStyles.headingMYR}><Link href={"/"}>!!bye bye!!</Link></div>
        </div> 
        
        <div className={utilStyles.headinFotosl}>
<div className ={utilStyles.blockrow}>
<div className ={utilStyles.blockcolumn}>
  
        <div className={utilStyles.headinGimgforce1}>
        <Image
        src="/images/photo_12.jpg"
        alt="Picture of the author"
        width={350}
        height={350}
        />
         </div>

         <div className={utilStyles.headinGimgforce2}>
        <Image
        src="/images/photo_13.jpg"
        alt="Picture of the author"
        width={350}
        height={350}
      />
      </div>
      <div className={utilStyles.headinGimgforce3}>
      
        <Image
        src="/images/photo_14.jpg"
        alt="Picture of the author"
        width={350}
        height={350}
      />
     
     </div>

     <div className={utilStyles.headinGimgforce4}>
      <Image
        src="/images/photo_15.jpg"
        alt="Picture of the author"
        width={300}
        height={450}
      />
      </div>

      <div className={utilStyles.headinGimgforce5}>
      <Image
        src="/images/photo_16.jpg"
        alt="Picture of the author"
        width={350}
        height={350}
      />
      </div>

      <div className={utilStyles.headinGimgforce7}>
      <Image
        src="/images/photo_18.jpg"
        alt="Picture of the author"
        width={350}
        height={350}
      />  
      </div>
      <div className={utilStyles.headinGimgforce8}>
       <Image
        src="/images/photo_1.jpg"
        alt="Picture of the author"
        width={400}
        height={400}
      />
      </div>

      
      <div className={utilStyles.headinGimgforce10}>
      <Image
        src="/images/photo_3.jpg"
        alt="Picture of the author"
        width={400}
        height={400}
      />
      </div>

      <div className={utilStyles.headinGimgforce11}>
      <Image
        src="/images/photo_4.jpg"
        alt="Picture of the author"
        width={400}
        height={370}
      />
      </div>
     
      <div className={utilStyles.headinGimgforce11}>
      <Image
        src="/images/photo_6.jpg"
        alt="Picture of the author"
        width={400}
        height={400}
      />
      </div>
      </div>
      </div>
      <div className={utilStyles.headingMYR}>
      <p>Все в наших руках ,
        продолжение следует..
      </p>
      </div>
</div>
      
        </div>
        
        

                                                       
    )
    
}
