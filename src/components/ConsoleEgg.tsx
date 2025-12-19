"use client";

import { useEffect } from "react";

export function ConsoleEgg() {
  useEffect(() => {
    const style1 = "font-size: 20px; font-weight: bold; color: #ff5c7a;";
    const style2 = "font-size: 12px; color: #888;";
    console.log(
      "%c 👋 Salut les curieux ! \n%c Vous regardez sous le capot ? Excellent réflexe. \n Retrouvez mon contact via le bouton 'Me contacter' du site.",
      style1,
      style2
    );
  }, []);

  return null;
}
