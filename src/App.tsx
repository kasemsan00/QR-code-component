import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="card">
        <div className="qr-code-image">
          <img src={"./images/image-qr-code.png"} alt={"qrcode"} />
        </div>
        <div className="qr-code-title">
          Improve your front-end skills by building projects
        </div>
        <div className="qr-code-detail">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </div>
      </div>
    </div>
  );
}

export default App;
