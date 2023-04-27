import Tilt from 'react-tilt';
import { styles } from '../styles';
import { git, github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { motion } from 'framer-motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#ada8a5] p-5 rounded-2xl sm:w-[360px] w-full">
        <div
          onClick={() => window.open(source_code_link, '_blank')}
          className="black-gradient w-10 h-10 rounded-full flex justify-center cursor-pointer items-center absolute top-8 right-8 z-40">
          <img
            className="w-1/2 h-1/2 object-contain"
            src={github}
            alt="github"
          />
        </div>
        <div
          className="relative w-full h-[230px] cursor-pointer"
          onClick={() => window.open(link, '_blank')}>
          <div className="w-full h-full cursor-pointer">
            <img src={image} alt={name} className="w-full h-full rounded-2xl" />
          </div>
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover"></div>
        </div>

        <div className="mt-5">
          <a href={link}>
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-[#161616] text-[14px]">{description}</p>
          </a>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn(',', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skill and experience through studycase
          examples. Each project is briedfly decribed with links to code
          repositories and live demos. My projects reflect my ability to solve
          problems, work with different technologies.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works);
