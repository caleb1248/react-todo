import { useEffect } from "react";
import { useEffect, useRef } from "react";

export default function Thing() {
  const isRunned = useRef(false);

  useEffect(() => {
    if(isRunned.current) return;
    isRunned.current = true;
  }, []);
}