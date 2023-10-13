import React from "react";
import { Viewer } from "@grapecity/activereports-react";
import { useLoaderData } from "react-router-dom";

const ActiveReport = () => {
  const returnReport = useLoaderData();

  return (
    <div id="viewer-host">
      <Viewer report={returnReport}></Viewer>
    </div>
  );
};

export default ActiveReport;
