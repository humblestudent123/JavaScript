import React from "react";
import "../second.css";
import { FiCopy } from "react-icons/fi";

function SecondPage() {
  return (
    <div className="page">
      <h2>Знакомство с JavaScript</h2>
      <h3>Напишите свой первый код!</h3>

      <div className="code-block">
        <span
          className="copy-icon"
          onClick={() => {
            const code = document.querySelector(".code-block code").innerText;
            navigator.clipboard.writeText(code);
          }}
          title="Скопировать"
        >
          <FiCopy />
        </span>

        <pre>
          <code>
{`function greet(name) {
  alert("Привет, " + name + "!");
}
greet("Анна");`}
          </code>
        </pre>
      </div>

        <div className="output" id="output-block">
          <p>Output: Привет Анна! </p>
        </div>


        <div className="error">
          <p>И тут уже первая проблема, как запустить код?</p>
          <p>Установите node.js</p>
        </div>
    </div>
  );
}

export default SecondPage;
