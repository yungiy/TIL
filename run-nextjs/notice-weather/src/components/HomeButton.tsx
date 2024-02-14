"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <Button variant="outlined" sx={{ m: 1 }} onClick={handleClick}>
      홈으로
    </Button>
  );
}
