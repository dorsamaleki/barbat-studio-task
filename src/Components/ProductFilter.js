import React from "react";
import { cn } from "../utils/classNames";
import styles from "./ProductFilter.module.css";

export const ProductFilter = ({ title, isSelected, onClick }) => (
  <div
    onClick={() => {
      if (isSelected) {
        onClick("");
      } else {
        onClick(title);
      }
    }}
    className={cn([styles.items, isSelected ? styles.selected : ""])}
  >
    {title}
  </div>
);
