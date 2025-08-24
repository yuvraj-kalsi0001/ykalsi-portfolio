const About = () => {
  return (
    <div name="about" className="w-full bg-[#0a192f] text-gray-300 py-20">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>

        {/* Main Bio */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Yuvraj. Nice to meet you!</p>
          </div>
          <div>
            <p>
              I'm a recent graduate with a Bachelor of Science (Honours) in Computer Science and a minor in Mathematics from Memorial University of Newfoundland with  CGPA of <span className="text-pink-400 font-bold align-baseline text-lg">3.60</span>. 

              During my academic career, I was named to the <span className="text-pink-400 font-semibold">Dean’s List (2021–2022)</span> for academic excellence.
              <br /><br />
              I’m passionate about building scalable software solutions and enjoy working across the full stack. 
              I’ve contributed to innovative projects as a Software Developer at SmartBin Technologies Inc., 
              and worked with biomedical data processing and distributed systems as a Research Assistant at Memorial University.
              <br /><br />
              I'm currently focused on developing AI-driven applications and cloud-native systems using modern frameworks like Spring Boot, React, AWS, and container orchestration tools.
            </p>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="max-w-[1000px] w-full mt-12 px-4">
          <h3 className="text-3xl font-bold border-b-4 border-pink-600 inline-block mb-4">
            Awards & Certifications
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              🎓 <span className="text-pink-400 font-semibold">Dean’s List (2021–2022)</span> — Academic excellence at Memorial University
            </li>
            <li>
              💰 <span className="text-pink-400 font-semibold">LearnLaunch Bursary</span> — $1000 scholarship from the Memorial Centre for Entrepreneurship
            </li>
            <li>
              ☁️ <span className="text-pink-400 font-semibold">AWS Certified Cloud Practitioner</span> —{" "}
              <a
                href="https://www.credly.com/badges/b90478e1-7e25-418d-9c8d-a0c4aca3d6b8/linked_in_profile"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-300 hover:text-pink-400"
              >
                View Credential
              </a>
            </li>
            <li>
              🏆 <span className="text-pink-400 font-semibold">Mel Woodward Cup Winner (2023)</span> — Contributed as a core team member at SmartBin Technologies Inc. whose work led to the startup winning the competition.

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
