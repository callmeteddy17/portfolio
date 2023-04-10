import {} from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="py-5 rounded-[20px] bg-[#ada8a5] flex flex-col justify-evenly min-h-[280px] px-12 items-center">
          <img src={icon} alt={title} className="w-14 h-14 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[20px] max-w-3x1 leading-[30px]">
        I'm a web developer with experience in JavaScript and expertise in
        frameworks React. I'm a quick and studious learner. I always love to
        improve my skill and knowledge to find solution that solve problems.
        Let's work and upgrade together.
      </motion.p>
      <div className="mt-20 flex justify-center flex-wrap gap-10">
        {services.map((service, index) => {
          return (
            <ServiceCard key={service.tittle} index={index} {...service} />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
