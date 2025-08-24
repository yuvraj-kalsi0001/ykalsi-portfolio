
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Satellite from "../assets/Satellite.png";
import Satellite2 from "../assets/satellite-2.jpg";
import Printer from "../assets/detailedactivityview.png";
import AiWatch from "../assets/AIWatch.png";
import HTCondor from "../assets/HTCondor_red_blk_notag.png";
import HTCondor2 from "../assets/htcondor-poster.png";
import Fitnesslogo from "../assets/pexels-victorfreitas-841130.jpg";
import Library_icon from "../assets/library.png";
import Library_icon2 from "../assets/library_index.PNG";

const projects = [
        {
    title: "AI-Powered Fitness Tracker",
    image: Fitnesslogo,
    modalImage: Printer,
    description:
      "This full-stack application tracks workouts, calories, and metrics with support for AI-based suggestions. It uses Spring Boot microservices (user, activity, gateway), React frontend, PostgreSQL, RabbitMQ for messaging, and Google Gemini API for generating workout summaries. I led backend integration and token-based Keycloak auth setup.",
    codeLink: "https://github.com/yuvraj-kalsi0001/fitness_app",
  },
 {
  title: "AiWatch RCMP Monitor",
  image: AiWatch,
  modalImage: AiWatch,
  description: (
    <>
      As co-developer at SmartBin Technologies, I worked on <strong>AiWatch</strong> — an AI-powered behavioral monitoring system for RCMP holding cells. After successfully clearing Phase 1 of funding through Innovative Solutions Canada, we are now developing a functional prototype. AiWatch uses real-time video analytics and machine learning to detect medical emergencies, aggressive behavior, and mental health risks among detainees. I contributed to designing detection logic and building the web-based dashboard for reviewing and managing alerts.{" "}
      <a
        href="https://ised-isde.canada.ca/site/innovative-solutions-canada/en/artificial-intelligence-behaviour-monitoring-solution"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>


        </p>
        Click here to learn more
      </a>
      .
    </>
  ),
  codeLink: "https://github.com/yuvraj-kalsi0001/aiwatch",
}

,
  
  {
    title: "HTCondor HPC Integration",
    image: HTCondor,
    modalImage: HTCondor2,
    description:
      "As a research assistant at Memorial University's DIAG labs, I deployed HTCondor across cloud virtual machines and the Compute Canada supercluster. I integrated Slurm with HTCondor using Apptainer containers and wrote Bash automation scripts to manage biomedical image pipelines for parallel execution at scale. I also presented this work at the MUN Scientific Endeavours in Academia (SEA) Conference as part of my honours thesis. ",
    codeLink: "Null",
  },
  
  {
    title: "Satellite Data Visualization",
    image: Satellite2,
    modalImage: Satellite,
    description:
      "Built using Python, Matplotlib, and Seaborn, this project explores satellite launch trends from the GCAT dataset. It includes country-wise launch filters, orbit breakdowns, and time-series plots to visualize public and commercial space race developments. This project was presented as part of my data visualization coursework.",
    codeLink: "https://github.com/yuvraj-kalsi0001/Satellite-Data-Visualization-Project",
  }

  ,
  
  {
    title: "Library Management System",
    image: Library_icon,
    modalImage: Library_icon2,
    description:
      "This project is a PHP and MySQL-based Library Management System that provides a web interface for managing common library operations. The codebase includes features for user authentication, book requests, issuance, and returns, along with an admin dashboard for adding or deleting books, managing users, and approving requests. The backend logic is handled in PHP files that interact with a MySQL database (via db.php), while library_managment.sql defines the schema and initial data. Frontend presentation is managed with HTML and CSS, and uploaded files (such as book images) are stored in dedicated directories. The system demonstrates CRUD operations, role-based functionality (admin vs. user), and integration of PHP with MySQL for a practical web application.",
    codeLink: "https://github.com/yuvraj-kalsi0001/library_management",
  }
];


const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] w-full text-gray-300 py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Work</p>
          <p className="py-4">Explore some of my featured, academic, and professional projects. These reflect my experiences as a software developer, researcher, and startup contributor at SmartBin Technologies and Memorial University.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${project.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto bg-cover h-64 relative overflow-hidden"
            >
              <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center transition duration-300">
                <h3 className="text-white text-xl font-bold mb-2 text-center px-2">{project.title}</h3>
                <Popup
                  trigger={<button className="rounded px-4 py-2 bg-white text-gray-700 font-semibold">View</button>}
                  modal
                  nested
                  contentStyle={{ background: "#fff", borderRadius: "8px", padding: "20px", width: "80%" }}
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    <img src={project.modalImage} className="rounded w-full sm:w-1/2" alt="project preview" />
                    <div className="text-black text-left text-sm sm:text-base leading-relaxed">
                      <h4 className="font-bold text-lg mb-2">{project.title}</h4>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </Popup>
                {project.title === "HTCondor HPC Integration" ? (
  <Popup
    trigger={
      <button className="mt-2 rounded px-4 py-2 bg-white text-gray-700 font-semibold">
        Code
      </button>
    }
    modal
    nested
    contentStyle={{
      background: "#fff",
      borderRadius: "8px",
      padding: "20px",
      width: "60%",
    }}
  >
    <div className="text-black text-left leading-relaxed p-4">
      <h4 className="font-bold text-lg mb-2">Access Restricted</h4>
      <p>
        This project is the intellectual property of DIAG Labs, Memorial University. Please contact{" "}
        <a
          href="https://diaglab.cs.mun.ca/"
          target="_blank"
          rel="noreferrer"
          className="underline text-blue-500 hover:text-pink-600"
        >
          diaglab.cs.mun.ca
        </a>{" "}
        for any access to code, documentation, or additional details.
      </p>
    </div>
  </Popup>
) : project.title === "AiWatch RCMP Monitor" ? (
  <Popup
    trigger={
      <button className="mt-2 rounded px-4 py-2 bg-white text-gray-700 font-semibold">
        Code
      </button>
    }
    modal
    nested
    contentStyle={{
      background: "#fff",
      borderRadius: "8px",
      padding: "20px",
      width: "60%",
    }}
  >
    <div className="text-black text-left leading-relaxed p-4">
      <h4 className="font-bold text-lg mb-2">Restricted Access</h4>
      <p>
        This project is the property of <strong>SmartBin Technologies Inc.</strong> and currently under development for RCMP under Innovative Solutions Canada. 
        For source code or technical details, please contact us through our official communication channels.
      </p>
      <p className="mt-2">
        Visit{" "}
        <a
          href="https://thesmartbin.ca/"
          target="_blank"
          rel="noreferrer"
          className="underline text-blue-500 hover:text-pink-600"
        >
          SmartBin Technologies
        </a>
        .
      </p>
    </div>
  </Popup>
) : (
  <a href={project.codeLink} target="_blank" rel="noreferrer">
    <button className="mt-2 rounded px-4 py-2 bg-white text-gray-700 font-semibold">Code</button>
  </a>
)}


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
