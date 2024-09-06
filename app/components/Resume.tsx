"use client";
export default function Resume() {
  return (
    <div
      className="container-fluid mt-5 animate__animated animate__fadeInLeft"
      id="resume"
    >
      <h1 className="fw-bold">
        <i className="fas fa-user"></i> Resume
      </h1>
      <div className="hr-like mb-4"></div>
      <div className="text-box">
        <h4 className="fw-bold mt-3">
          <i className="fas fa-graduation-cap"></i> Education
        </h4>
        <div className="row">
          <div className="col-sm mt-4">
            <span className="fw-bold">Computer Science MSc</span>
            <br />
            <span>University Of Pannonia</span>
            <br />
            <span>2024 sep.</span>
            <br />
          </div>
          <div className="col-sm mt-4">
            <span className="fw-bold">Computer Science BSc with Honors</span>
            <br />
            <span>University Of Pannonia</span>
            <br />
            <span>2020 sep. - 2024 jan.</span>
            <br />
            <a href="https://kanizsamediahaz.hu/hir/202401/zarovizsgaztak-az-informatikusok-a-pen-en">
              [interview]
            </a>
          </div>
        </div>

        <h4 className="fw-bold mt-5">
          <i className="fas fa-plus-square"></i> Experience
        </h4>
        <div className="row">
          <div className="col-sm mt-4">
            <span className="fw-bold">AI & Full-stack Developer</span>
            <br />
            <a href="https://peakfs.io/">Peak Financial Services</a>
            <br />
            <span>2024 apr. - </span>
            <br />
          </div>
          <div className="col-sm mt-4">
            <span className="fw-bold">Software Engineer</span>
            <br />
            <a href="https://zensetup.hu/">Zensetup Lacontrol Kft.</a>
            <br />
            <span>2024 jan. - 2024 apr.</span>
            <br />
            <span className="text-muted small">4 mos</span>
            <br />
          </div>
          <div className="col-sm mt-4">
            <span className="fw-bold">ML & Backend Engineer</span>
            <br />
            <a href="https://standupai.com/">StandupAI (Growth Engine Inc.)</a>
            <br />
            <span>2022 aug. - 2023 nov.</span>
            <br />
            <span className="text-muted small">1 yr 4 mos</span>
            <br />
          </div>
          <div className="col-sm mt-4">
            <span className="fw-bold">Embedded Developer</span>
            <br />
            <a href="https://ie-medlingen.de/">IndustrieElektrik GmbH HS</a>
            <br />
            <span>2018 jun. - 2020 aug.</span>
            <br />
            <span>2022 jun. - 2022 aug.</span>
            <br />
            <span className="text-muted small">2 yrs 6 mos</span>
            <br />
          </div>
        </div>

        <h4 className="fw-bold mt-5">
          <i className="fas fa-flask"></i> Research
        </h4>
        <div className="row">
          <div className="col-sm mt-4">
            <span className="fw-bold">
              Efficient Models for Fake News Detection: Hungarian and
              Multilingual Perspectives
            </span>
            <br />
            <span>
              ACM Transactions on Asian and Low-Resource Language Information
              Processing,
            </span>
            <br />
            <span>With Dr. Szilárd Jaskó - University Of Pannonia</span>
            <br />
            <span>2023 sep. (under review)</span>
            <br />
          </div>
          <div className="col-sm mt-4">
            <span className="fw-bold">
              Hungarian fake news detection using neural networks
            </span>
            <br />
            <span>
              Faculty Scientific Student Circle (TDK), University Of Pannonia,
            </span>
            <br />
            <a href="https://tdk.mik.uni-pannon.hu/index.php/196-ktdk-2023-eredmenyek/">
              Awarded for 2. place
            </a>
            <br />
            <span>2023 apr.</span>
            <br />
          </div>
        </div>

        <h4 className="fw-bold mt-5">
          <i className="fas fa-language"></i> Language
        </h4>
        <div className="row">
          <div className="col-sm mt-3">
            <span className="fw-bold">Hungarian</span>
            <br />
            <span>Mother Tongue</span>
            <br />
          </div>
          <div className="col-sm mt-3">
            <span className="fw-bold">English</span>
            <br />
            <span>Vantage (B2)</span>
            <br />
          </div>
        </div>

        <h4 className="fw-bold mt-5">
          <i className="fas fa-lightbulb"></i> Patents
        </h4>
        <div>
          <div className="mt-4">
            <span className="fw-bold">
              GENERATIVE AI WORKFLOW SERVICE TO CUSTOMER MATCHING
            </span>
            <br />
            <span>
              With Alan Harris, Ankur Patel, Derek Allar, Jerry Castanos, Lucy
              Tai, Tri Nguyen
            </span>
            <br />
            <span>2023 dec. (pending)</span>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
