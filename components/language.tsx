"use client";


import { createContext, useContext, useEffect, useState, Children, cloneElement, isValidElement, type ReactNode, type ReactElement } from "react";
import { english } from "../i18n/en";

type Language = "es" | "en";
const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({ language: "es", setLanguage: () => {} });
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, updateLanguage] = useState<Language>("es");
  useEffect(() => {
    try { if (localStorage.getItem("agromia-language") === "en") updateLanguage("en"); } catch {}
  }, []);
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  function setLanguage(value: Language) {
    updateLanguage(value);
    try { localStorage.setItem("agromia-language", value); } catch {}
  }
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}
export function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);
  return <div className="language-selector" role="group" aria-label={language === "es" ? "Idioma" : "Language"}>
    <button type="button" lang="es" aria-label="Español" aria-pressed={language === "es"} onClick={() => setLanguage("es")}>ES</button>
    <span aria-hidden="true">/</span>
    <button type="button" lang="en" aria-label="English" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</button>
  </div>;
}
export function translate(text: string): string {
  const trimmed = text.replace(/\s+/g, " ").trim();
  if (english[trimmed]) return text.replace(text.trim(), english[trimmed]);
  if (trimmed.startsWith("Fotografía de ") && trimmed.endsWith(" no disponible")) return "Photo of " + translate(trimmed.slice(14, -14)) + " unavailable";
  if (trimmed.startsWith("Ilustración de ")) return "Illustration of " + translate(trimmed.slice(15));
  if (/^ETAPA \d+ DE \d+$/.test(trimmed)) return trimmed.replace("ETAPA", "STAGE").replace(" DE ", " OF ");
  return text;
}
// Translate React content without changing routes, event handlers or component state.
export function LanguageContent({ children }: { children: ReactNode }) {
  const { language } = useContext(LanguageContext);
  if (language === "es") return children;
  function visit(node: ReactNode): ReactNode {
    if (typeof node === "string") return translate(node);
    if (!isValidElement(node)) return node;
    const element = node as ReactElement<Record<string, unknown>>;
    const props: Record<string, unknown> = {};
    for (const key of ["aria-label", "aria-roledescription", "alt", "title"]) {
      if (typeof element.props[key] === "string") props[key] = translate(element.props[key] as string);
    }
    if (typeof element.props.href === "string" && element.props.href.startsWith("https://wa.me/")) {
      const url = new URL(element.props.href);
      const message = url.searchParams.get("text") ?? "";
      if (message.startsWith("Hola Agromia")) {
        url.searchParams.set("text", "Hello Agromia, I would like information about " + (message.includes("Academy:") ? "Academy: " + translate(message.split("Academy: ")[1].split(". ¿")[0]) + ". Please share upcoming dates, format, price and availability." : message.includes("experiencia") ? "this experience kit, its contents, price and availability." : "your products, prices and availability."));
        props.href = url.toString();
      }
    }
    if (element.props.children !== undefined) props.children = Children.map(element.props.children as ReactNode, visit);
    return cloneElement(element, props);
  }
  return Children.map(children, visit);
}
