import FadeIn from "./FadeIn";

export default function Projects() {
  return (
    <section id="projects">
      <FadeIn className="section-label">Work</FadeIn>
      <FadeIn as="h2" className="section-title">
        My Best Creations.
      </FadeIn>

       <FadeIn as="div">
        <a
          href="https://web-churn-prediction-telco-ncvt4xouveak9nk23l4xi4.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div
            className="project-orb"
            style={{ width: 300, height: 300, background: "rgba(139,92,246,0.15)", top: -80, right: -80 }}
          />
          <div
            className="project-orb"
            style={{ width: 200, height: 200, background: "rgba(99,102,241,0.1)", bottom: -40, left: "20%" }}
          />
          <div className="project-tags">
            <span style={{ fontSize: "2rem" }}>&#128225;</span>
            <span className="project-tag">Data Science</span>
            <span className="project-tag">Machine Learning</span>
            <span className="project-tag">EDA</span>
            <span className="project-tag">Streamlit</span>
            <span className="project-tag">Classification</span>
          </div>
          <h3 className="project-title">Telco Customer Churn Prediction</h3>
          <p className="project-desc">
            An end-to-end machine learning project predicting customer churn risk
            for a telecommunications company using the public Telco Customer Churn
            dataset (IBM/Kaggle). Covers EDA, data preparation, multiple
            classification model experiments, model evaluation and interpretation,
            deployed as an interactive web dashboard.
          </p>
          <div className="project-link">
            <span>View Project</span>
            <div className="project-link-arrow">-&gt;</div>
          </div>
        </a>
      </FadeIn>

      <FadeIn as="div">
        <a
          href="https://huggingface.co/spaces/p4nduu/ravenstack-churn"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div
            className="project-orb"
            style={{ width: 300, height: 300, background: "rgba(139,92,246,0.15)", top: -80, right: -80 }}
          />
          <div
            className="project-orb"
            style={{ width: 200, height: 200, background: "rgba(99,102,241,0.1)", bottom: -40, left: "20%" }}
          />
          <div className="project-tags">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a78bfa"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="12" width="4" height="8" fill="#a78bfa" fillOpacity="0.25" />
              <rect x="10" y="8" width="4" height="12" fill="#a78bfa" fillOpacity="0.4" />
              <rect x="17" y="4" width="4" height="16" fill="#a78bfa" fillOpacity="0.6" />
              <path d="M3 9 L10 5 L14 7 L21 2" />
              <path d="M17 2 L21 2 L21 6" />
            </svg>
            <span className="project-tag">Data Science</span>
            <span className="project-tag">Machine Learning</span>
            <span className="project-tag">Streamlit</span>
            <span className="project-tag">Churn Prediction</span>
            <span className="project-tag">B2B SaaS</span>
          </div>
          <h3 className="project-title">RavenStack Churn Prediction</h3>
          <p className="project-desc">
            An end-to-end churn prediction pipeline for a fictional B2B SaaS Customer Success platform. 
            Trained a Random Forest model achieving 86% recall on a 500-account dataset, 
            including a self-conducted data leakage audit that identified and removed 14 contaminated features. 
            Deployed as an interactive Streamlit app on Hugging Face Spaces.
          </p>
          <div className="project-link">
            <span>View Project</span>
            <div className="project-link-arrow">-&gt;</div>
          </div>
        </a>
      </FadeIn>
      <FadeIn as="div">
          <a
            href="https://web-ihsg-historical-market-analysis.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div
              className="project-orb"
              style={{
                width: 300,
                height: 300,
                background: "rgba(139,92,246,0.15)",
                top: -80,
                right: -80
              }}
            />
            <div
              className="project-orb"
              style={{
                width: 200,
                height: 200,
                background: "rgba(99,102,241,0.1)",
                bottom: -40,
                left: "20%"
              }}
            />

            <div className="project-tags">
              <span style={{ fontSize: "2rem" }}>&#128200;</span>
              <span className="project-tag">Data Analysis</span>
              <span className="project-tag">Data Management</span>
              <span className="project-tag">Python</span>
              <span className="project-tag">Statistics</span>
              <span className="project-tag">Tableau</span>
            </div>

            <h3 className="project-title">
              Historical IHSG Market Analysis
            </h3>

            <p className="project-desc">
              An end-to-end analysis of 7,681 IHSG trading days from 1995–2025,
              covering data validation, feature engineering, exploratory data analysis,
              market volatility, drawdown, crisis-recovery cycles, seasonality, and
              volume-price relationships. Statistical validation was performed using
              non-parametric tests, with findings presented through an interactive
              Tableau dashboard.
            </p>

            <div className="project-link">
              <span>View Case Study</span>
              <div className="project-link-arrow">-&gt;</div>
            </div>
          </a>
        </FadeIn>


      <FadeIn as="div">
  <a
    href="https://ihsg-market-database-and-risk-analytics-sql.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="project-card"
  >
    <div
      className="project-orb"
      style={{
        width: 300,
        height: 300,
        background: "rgba(139,92,246,0.15)",
        top: -80,
        right: -80
      }}
    />
    <div
      className="project-orb"
      style={{
        width: 200,
        height: 200,
        background: "rgba(99,102,241,0.1)",
        bottom: -40,
        left: "20%"
      }}
    />

    <div className="project-tags">
      <span style={{ fontSize: "2rem" }}>&#128451;&#65039;</span>
      <span className="project-tag">SQL</span>
      <span className="project-tag">PostgreSQL</span>
      <span className="project-tag">Data Management</span>
      <span className="project-tag">Data Quality</span>
      <span className="project-tag">Window Functions</span>
    </div>

    <h3 className="project-title">
      Historical IHSG Analysis with SQL
    </h3>

    <p className="project-desc">
    End-to-end PostgreSQL data analytics project exploring 31 years of market evolution (1995–2026) across 7,681+ historical trading days. 
    Engineered using 23 complex SQL queries (including advanced window functions, CTEs, and automated anomaly checks) 
    to extract 4 core headline metrics and 4 deep-dive technical insights on growth, risk, and liquidity.
    </p>

    <div className="project-link">
      <span>View Case Study</span>
      <div className="project-link-arrow">-&gt;</div>
    </div>
  </a>
</FadeIn>        




      <FadeIn as="div">
      <a
        href="https://lead-conversion-project-edu-tech.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="project-card"
      >
        <div
          className="project-orb"
          style={{ width: 300, height: 300, background: "rgba(139,92,246,0.15)", top: -80, right: -80 }}
        />
        <div
          className="project-orb"
          style={{ width: 200, height: 200, background: "rgba(99,102,241,0.1)", bottom: -40, left: "20%" }}
        />
        <div className="project-tags">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 3 L3 20 L21 20" />
            <rect x="6" y="13" width="3" height="5" fill="#a78bfa" fillOpacity="0.25" />
            <rect x="11" y="9" width="3" height="9" fill="#a78bfa" fillOpacity="0.4" />
            <rect x="16" y="6" width="3" height="12" fill="#a78bfa" fillOpacity="0.6" />
          </svg>
          <span className="project-tag">Data Analysis</span>
          <span className="project-tag">EDA</span>
          <span className="project-tag">Python</span>
          <span className="project-tag">Statistical Analysis</span>
          <span className="project-tag">Tableau</span>
        </div>
        <h3 className="project-title">Lead Conversion Analysis</h3>
        <p className="project-desc">
          An end-to-end data analysis project exploring 4,612 EdTech leads to
          identify patterns associated with lead conversion. Covers
          demographic characteristics, acquisition channels, website
          engagement, and statistical validation, with findings presented
          through an interactive Tableau dashboard.
        </p>
        <div className="project-link">
          <span>View Case Study</span>
          <div className="project-link-arrow">-&gt;</div>
        </div>
      </a>
    </FadeIn>
      


       <FadeIn as="div">
        <a
          href="https://public.tableau.com/shared/95HDQKTNZ?:display_count=n&:origin=viz_share_link"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div
            className="project-orb"
            style={{ width: 300, height: 300, background: "rgba(139,92,246,0.15)", top: -80, right: -80 }}
          />
          <div
            className="project-orb"
            style={{ width: 200, height: 200, background: "rgba(99,102,241,0.1)", bottom: -40, left: "20%" }}
          />
          <div className="project-tags">
            <span style={{ fontSize: "2rem" }}>&#128200;</span>
            <span className="project-tag">Data Visualization</span>
            <span className="project-tag">Tableau</span>
            <span className="project-tag">Data Analysis</span>
          </div>
          <h3 className="project-title">Tableau Data Visualization</h3>
          <p className="project-desc">
            An interactive Tableau Public dashboard turning raw data into clear,
            explorable visual insights.
          </p>
          <div className="project-link">
            <span>View Project</span>
            <div className="project-link-arrow">-&gt;</div>
          </div>
        </a>
      </FadeIn>


      <FadeIn as="div">
        <a
          href="https://lifedashboardpandu.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div
            className="project-orb"
            style={{ width: 300, height: 300, background: "rgba(139,92,246,0.15)", top: -80, right: -80 }}
          />
          <div
            className="project-orb"
            style={{ width: 200, height: 200, background: "rgba(99,102,241,0.1)", bottom: -40, left: "20%" }}
          />
          <div className="project-tags">
            <span style={{ fontSize: "2rem" }}>&#128202;</span>
            <span className="project-tag">Web Development</span>
            <span className="project-tag">React</span>
            <span className="project-tag">Dashboard</span>
          </div>
          <h3 className="project-title">Life Dashboard</h3>
          <p className="project-desc">
            A personal dashboard web app for tracking daily activities, goals,
            and habits in one clean, centralized interface.
          </p>
          <div className="project-link">
            <span>View Project</span>
            <div className="project-link-arrow">-&gt;</div>
          </div>
        </a>
      </FadeIn>

      <FadeIn as="div">
        <a
          href="https://huggingface.co/spaces/p4nduu/garbage-classification"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div
            className="project-orb"
            style={{ width: 300, height: 300, background: "rgba(139,92,246,0.15)", top: -80, right: -80 }}
          />
          <div
            className="project-orb"
            style={{ width: 200, height: 200, background: "rgba(99,102,241,0.1)", bottom: -40, left: "20%" }}
          />
          <div className="project-tags">
            <span style={{ fontSize: "2rem" }}>&#9851;&#65039;</span>
            <span className="project-tag">Deep Learning</span>
            <span className="project-tag">Computer Vision</span>
            <span className="project-tag">Gradio</span>
            <span className="project-tag">HuggingFace</span>
          </div>
          <h3 className="project-title">Garbage Classification App</h3>
          <p className="project-desc">
            A computer vision app deployed on Hugging Face Spaces that classifies
            images of trash into cardboard, glass, metal, paper, plastic, or
            general waste in real time.
          </p>
          <div className="project-link">
            <span>View Project</span>
            <div className="project-link-arrow">-&gt;</div>
          </div>
        </a>
      </FadeIn>
     
      <FadeIn as="div">
        <a
          href="https://klasifikasistuntingapp-upikbl6mkjbfbbwxbxhxli.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div
            className="project-orb"
            style={{ width: 300, height: 300, background: "rgba(139,92,246,0.15)", top: -80, right: -80 }}
          />
          <div
            className="project-orb"
            style={{ width: 200, height: 200, background: "rgba(99,102,241,0.1)", bottom: -40, left: "20%" }}
          />
          <div className="project-tags">
            <span style={{ fontSize: "2rem" }}>&#129516;</span>
            <span className="project-tag">Machine Learning</span>
            <span className="project-tag">Flask</span>
            <span className="project-tag">SQLite</span>
            <span className="project-tag">SVM</span>
          </div>
          <h3 className="project-title">Child Growth Classification App</h3>
          <p className="project-desc">
            A web-based application built with Flask and SQLite that utilizes Support Vector
            Machine (SVM) models via joblib to classify and track child development metrics.
          </p>
          <div className="project-link">
            <span>View Project</span>
            <div className="project-link-arrow">-&gt;</div>
          </div>
        </a>
      </FadeIn>

    </section>
  );
}