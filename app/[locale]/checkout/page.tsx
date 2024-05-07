"use client";
import { useEffect } from "react";

function CennikPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.href = "/success";
    }
  }, []);

  return <div></div>;
}

export default CennikPage;
