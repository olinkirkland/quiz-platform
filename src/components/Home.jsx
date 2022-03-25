import React from "react";
import DoneAnimation from "../lottie/done.json";
import { useLottie } from "lottie-react";

import { Button, Typography, Link } from "@mui/material";

import { Outlet } from "react-router-dom";
import "../home.css";

export const Home = () => {
  const options = {
    animationData: DoneAnimation,
    loop: true,
    autoplay: true,
    rendererSettings: {},
  };

  const { View } = useLottie(options);

  return (
    <body>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ width: "45%" }}>{View}</div>
        <div style={{ width: "50%", margin: "auto", flexDirection: "column" }}>
          <div className="bodybox">
            <Typography variant="h3">Prepare to</Typography>
            <Typography variant="h1">Leben in</Typography>
            <Typography variant="h1">Deutschland</Typography>
            <Button
              variant="contained"
              size="large"
              style={{ marginTop: "24px", marginBottom: "16px" }}
            >
              Start
            </Button>
            <Typography variant="h6">5 from ‘All Questions’</Typography>
          </div>
          <div>
            <Typography variant="h5" style={{ marginTop: "24px" }}>
              OR SELECT A QUESTION SET{" "}
            </Typography>
            <div className="quizSetm">
              <Link className="quizSet" href="#" color="inherit">
                Berlin
              </Link>
              <Link className="quizSet" href="#" color="inherit">
                Bayern
              </Link>
              <Link className="quizSet" href="#" color="inherit">
                NRW
              </Link>
              <Link className="quizSet" href="#" color="inherit">
                Saxony
              </Link>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
