"use client";
import React, { useState, useEffect } from "react";

function ScreenLoading() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="screenLoading">
      <div className="loading" />
    </div>
  );
}

export default ScreenLoading;
