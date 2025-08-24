import {
  FaAws,
  FaReact,
  FaJava,
  FaPython,
  FaDocker,
  FaGithub,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaPhp 
} from "react-icons/fa";
import {
  SiSpringboot,
  SiTailwindcss,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiTerraform,
  SiRabbitmq,
  SiJupyter,
  SiLatex,
  SiGooglecloud,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 w-full py-20 px-4">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center">
        <div className="animate-fadeUp">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
          <p className="py-4">Technologies I’ve worked with across software, cloud, and research.</p>
        </div>

        {/* Section Blocks */}
        <SkillSection title="Backend & DevOps" skills={[
          { icon: <FaJava className="text-red-500 text-5xl  " />, name: "Java" },
          { icon: <SiSpringboot className="text-green-500 text-5xl" />, name: "Spring Boot" },
          { icon: <SiRabbitmq className="text-orange-400 text-5xl" />, name: "RabbitMQ" },
          { icon: <SiPostgresql className="text-blue-400 text-5xl" />, name: "PostgreSQL" },
          { icon: <SiMongodb className="text-green-400 text-5xl" />, name: "MongoDB" },
          { icon: <FaDocker className="text-blue-500 text-5xl" />, name: "Docker" },
          { icon: <SiTerraform className="text-purple-400 text-5xl" />, name: "Terraform" },
          { icon: <FaLinux className="text-gray-300 text-5xl" />, name: "Linux" },
          { icon: <FaGithub className="text-white text-5xl" />, name: "GitHub Actions" },
          { icon: <FaPhp className="text-indigo-400 text-5xl" />, name: "PHP" }
        ]} />

        <SkillSection title="Frontend & UI" skills={[
          { icon: <FaReact className="text-cyan-400 text-5xl  " />, name: "React.js" },
          { icon: <SiTailwindcss className="text-sky-400 text-5xl" />, name: "Tailwind CSS" },
          { icon: <SiJavascript className="text-yellow-300 text-5xl" />, name: "JavaScript" },
          { icon: <FaHtml5 className="text-orange-500 text-5xl" />, name: "HTML5" },
          { icon: <FaCss3Alt className="text-blue-500 text-5xl" />, name: "CSS3" },
          { icon: <FaNodeJs className="text-green-600 text-5xl" />, name: "Node.js" }
        ]} />

        <SkillSection title="Cloud & Distributed Systems" skills={[
          { icon: <FaAws className="text-yellow-400 text-5xl  " />, name: "AWS (EC2, S3, IAM)" },
          { icon: <SiGooglecloud className="text-blue-300 text-5xl" />, name: "Google Cloud (Gemini API)" },
          { icon: <FaDatabase className="text-cyan-300 text-5xl" />, name: "HTCondor & SLURM" },
          { icon: <FaLinux className="text-gray-400 text-5xl" />, name: "Apptainer (Singularity)" },
          { icon: <FaDatabase className="text-white text-5xl" />, name: "Compute Canada HPC" }
        ]} />

        <SkillSection title="AI, Research & Tools" skills={[
          { icon: <FaPython className="text-yellow-300 text-5xl  " />, name: "Python (Pandas, NumPy)" },
          { icon: <SiJupyter className="text-orange-300 text-5xl" />, name: "Jupyter Notebook" },
          { icon: <SiLatex className="text-red-300 text-5xl" />, name: "LaTeX (Research Docs)" },
          { icon: <BsGit className="text-orange-400 text-5xl" />, name: "Git & GitHub" }
        ]} />

        
      </div>
    </div>
  );
};

// Reusable Skill Section
const SkillSection = ({ title, skills }) => (
  <div className="py-6 animate-fadeUp">
    <h3 className="text-2xl font-semibold text-pink-400">{title}</h3>
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4">
      {skills.map((skill, idx) => (
        <li
          key={idx}
          className="flex items-center gap-4 p-4 bg-[#112240] rounded-lg shadow-md hover:shadow-pink-500 hover:scale-105 transition duration-300"
        >
          {skill.icon}
          <span className="text-lg">{skill.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Skills;
