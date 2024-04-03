"use client";
import { useEffect } from "react";


export default function MSWComponent() {
  useEffect(() => {
    // 브라우저 일 때 돌아감
    if (typeof window !== 'undefined') {
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        require("@/mocks/browser");
      }
    }
  }, []);

  return null;
}
