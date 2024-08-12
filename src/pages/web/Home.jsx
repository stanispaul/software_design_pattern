
import Hometoy2 from '@/assets/img/Hometoy2.png'
import SparklesText from "@/components/magicui/sparkles-text";
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import '@/assets/css/Loginstyle.css'

const Home = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
    return (
      <>
      
        <div className='h-full w-100 flex justify-center items-center pt-14 pl-8 '>
        <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          TOYTOPIA<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>
 
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
        Unlock the Magic of Play!{" "}
          {/* <span className="text-[#5046e6]">Design Engineers</span> */}
        </h2>
      </BoxReveal>
 
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
            -&gt; 20+ free and open-source animated components built with
            <span className="font-semibold text-[#5046e6]"> React</span>,
            <span className="font-semibold text-[#5046e6]"> Typescript</span>,
            <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
            and
            <span className="font-semibold text-[#5046e6]"> Framer Motion</span>
            . <br />
            -&gt; 100% open-source, and customizable. <br />
          </p>
        </div>
      </BoxReveal>
 
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
      </BoxReveal>
    </div>
           {/* <label className='text-2xl font-bold'>First Smlie !!</label> */}

           <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><img src='https://ik.imagekit.io/7noyasgt8/Web/Hometoy2.png'/></div>
        <div className="embla__slide"><img src='https://ik.imagekit.io/7noyasgt8/Web/pexels-kovyrina-12211-removebg-preview.png'/></div>
        <div className="embla__slide"><img src='https://ik.imagekit.io/7noyasgt8/Web/pexels-cottonbro-3661222-removebg-preview.png'/></div>
      </div>
    </div>
     </div>  
     <div>
      <img src='https://ik.imagekit.io/7noyasgt8/Web/pexels-punttim-246576.jpg?updatedAt=1721990706318'/>
     </div>
   
    </>    
    )
}

export default Home