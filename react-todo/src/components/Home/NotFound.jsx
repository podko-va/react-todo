import React from "react";
import notFound from "../../404.jpg";

export default function NotFound() {
  return (
    <>
      <img style={{ width: "100vw" }} src={notFound} alt="404-img"/>
    </>
  );
}
