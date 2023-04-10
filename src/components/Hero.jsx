import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[70px] max-w-7x1 mx-auto flex flex-row items-start gap-5 `}>
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#ffecb3]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, You can call me <span className="hero-text">Teddy</span>
          </h1>
          <h1 className={`${styles.heroSubText}`}>I'm Frontend developer</h1>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-48 w-full flex justify-center  items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] p-2 rounded-3xl border-4 border-secondary flex justify-center items-center">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 1.5,
              }}
              className=" w-3 h-3 rounded-full bg-secondary mb-5 "
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
