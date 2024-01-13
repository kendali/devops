import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Feature from "./feature/Feature";

const Hero = () => {
  const codeString =
    'import SyntaxHighlighter from "react-syntax-highlighter";';
  return (
    <main className="container mt-16 mb-36">
      <div className="hero lg:flex text-center lg:text-start justify-between">
        <div className="text-hero py-20 flex flex-col gap-4">
          <h3 className="font-medium text-3xl">
            Automate code integration <br />{" "}
            <span className="text-orange-400">test</span>,{" "}
            <span className="text-orange-400">build</span>, and{" "}
            <span className="text-orange-400">deploy</span>
          </h3>
          <div className="text-dsc">
            <p className="w-[75%]">
              Continuous Integration and Continuous Deployment processes
              typically involve multiple steps and configurations.
            </p>
          </div>
          <div className="text-btn">
            <button className="bg-blue-500 px-6 py-3 rounded-full text-white flex items-center">
              <span>Code in Github</span>
              <i className="fa-brands fa-github px-2 text-white text-2xl"></i>
            </button>
          </div>
        </div>
        <div className="img-hero mx-auto">
          <img
            width={700}
            src="https://img.freepik.com/free-vector/flat-design-devops-illustration_52683-84086.jpg?size=626&ext=jpg&ga=GA1.1.1745215084.1705160203&semt=sph"
            alt=""
          />
        </div>
      </div>
      <div className="feature my-14">
        <h3 className="text-center text-2xl font-medium">
          Features Continuous Integration and Continuous Deployment{" "}
        </h3>
        <div className="feature-container gap-4 lg:flex">
          <Feature title="Automated Builds" img="https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149379500.jpg?w=1060&t=st=1705164446~exp=1705165046~hmac=4887b57f9d621537d9492a29a59fea9b55750e1aeadb5193dd6f96217d46183a" dsc="Automatically compile and build code whenever changes are pushed to the version control system"  />
          <Feature title="Automated Testing" img="https://img.freepik.com/free-vector/hand-drawn-flat-design-intranet-illustration_23-2149379501.jpg?t=st=1705164446~exp=1705165046~hmac=4dc52b6351f2bf517163cdab87571d1f82f72b00ffec9ada54fcd0f3bec85ea8" dsc="Run automated tests  to validate the functionality and quality of the code" />
          <Feature title="Continuous Deployment" img="https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149379502.jpg" dsc="Automatically deploy code to various environments  after successful builds and tests" />
        </div>
      </div>
      <div>
        <h5>Etape 1</h5>
        <div className="border-l- border-orange-600">
        <SyntaxHighlighter language="jsx" style={atomOneDark}>
          {codeString}
        </SyntaxHighlighter>
        </div>
        <h5>Etape 2</h5>
        <SyntaxHighlighter language="jsx" style={atomOneDark}>
          {codeString}
        </SyntaxHighlighter>
        <h5>Etape 3</h5>
        <SyntaxHighlighter language="jsx" style={atomOneDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </main>
  );
};

export default Hero;
