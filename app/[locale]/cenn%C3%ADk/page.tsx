"use client";
import { useEffect } from "react";

function CennikPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.href = "/pricing";
    }
  }, []);

  return <div></div>;
}

export default CennikPage;
