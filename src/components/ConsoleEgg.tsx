"use client";

import { useEffect } from "react";

export function ConsoleEgg() {
  useEffect(() => {
    const style1 = "font-size: 20px; font-weight: bold; color: #ff5c7a;";
    const style2 = "font-size: 12px; color: #888;";
    console.log(
      "%c 👋 Salut les curieux ! \n%c Vous regardez sous le capot ? Excellent réflexe. \n Si vous cherchez un profil qui aime comprendre comment ça marche : jules.laconfourque@icloud.com",
      style1,
      style2
    );
  }, []);

  return null;
}
