import React from "react";

export interface ButtonBlue {
  text: string;
  url: string | undefined;
}

export interface AuthorizationButtonBlue {
  text: string;
  url: string | undefined;
}

export interface InputUI {
  label: string;
  placeholder: string;
  type:
    | "search"
    | "submit"
    | "email"
    | "date"
    | "datetime-local"
    | "radio"
    | "text"
    | "password"
    | "time";
  multiline?: boolean;
  icon?: React.ReactNode;
}

export interface AuthorizationInputUI {
  label: string;
  placeholder: string;
  type:
    | "search"
    | "submit"
    | "email"
    | "date"
    | "datetime-local"
    | "radio"
    | "text"
    | "password"
    | "time";
  multiline?: boolean;
  icon?: React.ReactNode;
}

export interface CustomButton {
  icon: React.ReactNode;
  text: string;
}
