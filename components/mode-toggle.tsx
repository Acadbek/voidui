"use client";
import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "../registry/carbon/button/button";
import { Icon } from "@iconify/react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const changeMode = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <Button
        className="fixed top-3 right-3"
        size="icon"
        kind="ghost"
        onClick={changeMode}
      >
        <Icon icon="carbon:color-switch" />
      </Button>
    </>
  );
}
