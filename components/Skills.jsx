import FadeIn from "./FadeIn";

const SKILLS = [
  // Languages
  { icon: "devicon-python-plain", label: "Python", type: "dev" },
  { icon: "devicon-javascript-plain", label: "JavaScript", type: "dev" },
  { icon: "devicon-typescript-plain", label: "TypeScript", type: "dev" },

  // Data Science & Machine Learning
  { emoji: "&#129404;", label: "Data Science" },
  { emoji: "&#129302;", label: "Machine Learning" },
  { emoji: "&#128300;", label: "Scikit-learn" },
  { icon: "devicon-tensorflow-original", label: "TensorFlow/Keras", type: "dev" },
  { emoji: "&#127795;", label: "XGBoost" },
  { emoji: "&#127796;", label: "Random Forest" },
  { emoji: "&#128432;", label: "Logistic Regression" },
  { emoji: "&#128200;", label: "SVM Model" },
  { icon: "devicon-numpy-plain", label: "NumPy", type: "dev" },
  { icon: "devicon-pandas-plain", label: "Pandas", type: "dev" },
  { emoji: "&#128230;", label: "Joblib" },
  { emoji: "&#9881;&#65039;", label: "Algorithm Design" },

  // Data Analysis & Visualization
  { emoji: "&#128202;", label: "Data Analysis" },
  { emoji: "&#128203;", label: "Tableau" },
  { emoji: "&#128201;", label: "Power BI" },
  { emoji: "&#128225;", label: "Plotly" },

  // Software Engineering & Tools
  { icon: "devicon-react-original", label: "React JS", type: "dev" },
  { icon: "devicon-html5-plain", label: "HTML/CSS", type: "dev" },
  { icon: "devicon-flask-original", label: "Flask", type: "dev" },
  { icon: "devicon-sqlite-plain", label: "SQLite", type: "dev" },
  { emoji: "&#9889;", label: "Streamlit" },
  { icon: "devicon-docker-plain", label: "Docker", type: "dev" },
  { icon: "devicon-git-plain", label: "Git/GitHub", type: "dev" },
];

function ToolCard({ skill, keyPrefix }) {
  return (
    <div className="tool-card">
      {skill.type === "dev" ? (
        <i className={skill.icon} />
      ) : (
        <span className="emoji-i" dangerouslySetInnerHTML={{ __html: skill.emoji }} />
      )}
      <span>{skill.label}</span>
    </div>
  );
}

export default function Skills() {
  const doubled = [...SKILLS, ...SKILLS];

  return (
    <section className="skills-section" id="skills">
      <div style={{ textAlign: "center", marginBottom: 32, padding: "0 80px" }}>
        <FadeIn className="section-label">Expertise</FadeIn>
        <FadeIn as="h2" className="section-title" style={{ marginBottom: 0 }}>
          Tools &amp; Skills
        </FadeIn>
      </div>
      <div className="marquee-wrap">
        <div className="marquee-track">
          {doubled.map((skill, i) => (
            <ToolCard key={`${skill.label}-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}