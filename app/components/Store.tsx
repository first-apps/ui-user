"use client";
import { useEffect } from "react";

export const Store = ({ data }) => {
  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(data));
  }, [data]);
  return null;
};
