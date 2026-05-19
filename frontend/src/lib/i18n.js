import React, { createContext, useContext, useState, useCallback } from "react";

export const translations = {
  no: {
    nav: {
      services: "Tjenester",
      portfolio: "Portefølje",
      about: "Om oss",
      contact: "Kontakt",
      cta: "Start prosjekt",
    },
    hero: {
      eyebrow: "Digitalt studio · Norge",
      title_1: "Vi bygger nettsider",
      title_2: "som faktisk leverer.",
      lede:
        "Nettekspertene er et lite studio som lager skreddersydde nettsider, nettbutikker og digitale opplevelser for ambisiøse bedrifter. Ingen maler. Ingen snarveier.",
      primary: "Snakk med oss",
      secondary: "Se arbeidet",
    },
    services: {
      label: "Tjenester",
      title: "Det vi gjør best.",
      items: [
        {
          n: "01",
          t: "Nettsideutvikling",
          d: "Raske, sikre og skalerbare nettsider bygget med moderne teknologi. Fra landingsside til komplekse plattformer.",
        },
        {
          n: "02",
          t: "Nettbutikk / E-handel",
          d: "Strømlinjeformede nettbutikker som konverterer. Integrasjoner med Vipps, Klarna, Shopify og mer.",
        },
        {
          n: "03",
          t: "SEO",
          d: "Teknisk SEO, innholdsstrategi og lokal søkemotoroptimalisering som setter bedriften din på kartet.",
        },
        {
          n: "04",
          t: "Webdesign / UI-UX",
          d: "Skandinavisk minimalisme møter klar funksjon. Vi designer grensesnitt folk faktisk har lyst til å bruke.",
        },
      ],
    },
    portfolio: {
      label: "Portefølje",
      title: "Et utvalg av vårt arbeid.",
      sub:
        "Hver nettside vi lager begynner med ett spørsmål: hva trenger din virksomhet egentlig? Resten følger av det.",
      case1_title: "Bygd for å selge",
      case1_sub: "Klient · Konfidensielt",
      case2_title: "Designet for å bli husket",
      case2_sub: "Klient · Konfidensielt",
    },
    about: {
      label: "Om studioet",
      title: "Lite team. Stor omtanke.",
      p1:
        "Nettekspertene ble grunnlagt med én ambisjon: å lage nettsider som ikke bare ser bra ut, men som faktisk gjør jobben de er bygget for. Hver linje med kode og hver piksel har en hensikt.",
      p2:
        "Vi jobber tett med deg fra første samtale til lansering — og lenge etter. Du får direkte kontakt med de som faktisk bygger nettsiden din, ikke en kjede av kontoer.",
      stat1_v: "100%",
      stat1_l: "Skreddersydd",
      stat2_v: "0",
      stat2_l: "Maler brukt",
      stat3_v: "1:1",
      stat3_l: "Direkte kontakt",
    },
    contact: {
      label: "Kontakt",
      title: "La oss bygge noe sammen.",
      sub:
        "Fortell oss kort om prosjektet ditt. Vi svarer vanligvis innen 24 timer.",
      business_name: "Bedriftsnavn",
      business_name_ph: "Din bedrift AS",
      contact_number: "Telefonnummer",
      contact_number_ph: "+47 000 00 000",
      contact_email: "E-post",
      contact_email_ph: "navn@bedrift.no",
      looking_for: "Hva ser du etter?",
      looking_for_ph:
        "Beskriv kort hva du trenger — en ny nettside, nettbutikk, redesign, SEO …",
      budget: "Budsjett",
      budget_ph: "Velg budsjett",
      budget_options: [
        { value: "5000 NOK", label: "5 000 NOK" },
        { value: "7500 NOK", label: "7 500 NOK" },
        { value: "10000 NOK", label: "10 000 NOK" },
        { value: "15000+ NOK", label: "15 000 NOK eller høyere" },
      ],
      submit: "Send henvendelse",
      submitting: "Sender …",
      success: "Takk! Vi tar kontakt så snart som mulig.",
      error: "Noe gikk galt. Prøv igjen.",
      validation: "Vennligst fyll ut alle feltene.",
    },
    footer: {
      tagline: "Digitalt studio basert i Norge.",
      rights: "Alle rettigheter forbeholdt.",
      org: "Org. nr.",
      sections: {
        nav: "Naviger",
        contact: "Kontakt",
        legal: "Selskap",
      },
    },
  },
  en: {
    nav: {
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact",
      cta: "Start a project",
    },
    hero: {
      eyebrow: "Digital studio · Norway",
      title_1: "We build websites",
      title_2: "that actually perform.",
      lede:
        "Nettekspertene is a small studio crafting bespoke websites, online stores and digital experiences for ambitious businesses. No templates. No shortcuts.",
      primary: "Talk to us",
      secondary: "See the work",
    },
    services: {
      label: "Services",
      title: "What we do best.",
      items: [
        {
          n: "01",
          t: "Web Development",
          d: "Fast, secure and scalable websites built with modern stacks. From landing pages to complex platforms.",
        },
        {
          n: "02",
          t: "E-commerce",
          d: "Streamlined online stores that convert. Integrations with Vipps, Klarna, Shopify and more.",
        },
        {
          n: "03",
          t: "SEO",
          d: "Technical SEO, content strategy and local search optimisation that puts your business on the map.",
        },
        {
          n: "04",
          t: "Web Design / UI-UX",
          d: "Scandinavian minimalism meets clear function. We design interfaces people actually want to use.",
        },
      ],
    },
    portfolio: {
      label: "Portfolio",
      title: "A selection of our work.",
      sub:
        "Every site we build starts with one question: what does your business actually need? The rest follows from there.",
      case1_title: "Built to sell",
      case1_sub: "Client · Confidential",
      case2_title: "Designed to be remembered",
      case2_sub: "Client · Confidential",
    },
    about: {
      label: "About the studio",
      title: "Small team. Big care.",
      p1:
        "Nettekspertene was founded with a single ambition: to make websites that don't just look good, but actually do the job they were built for. Every line of code and every pixel has a purpose.",
      p2:
        "We work closely with you from the first call to launch — and long after. You talk directly to the people building your site, not a chain of accounts.",
      stat1_v: "100%",
      stat1_l: "Bespoke",
      stat2_v: "0",
      stat2_l: "Templates used",
      stat3_v: "1:1",
      stat3_l: "Direct contact",
    },
    contact: {
      label: "Contact",
      title: "Let's build something together.",
      sub: "Tell us briefly about your project. We usually reply within 24 hours.",
      business_name: "Business name",
      business_name_ph: "Your business Ltd.",
      contact_number: "Phone number",
      contact_number_ph: "+47 000 00 000",
      contact_email: "Email",
      contact_email_ph: "name@business.com",
      looking_for: "What are you looking for?",
      looking_for_ph:
        "Briefly describe what you need — a new website, online store, redesign, SEO …",
      budget: "Budget",
      budget_ph: "Select budget",
      budget_options: [
        { value: "5000 NOK", label: "5,000 NOK" },
        { value: "7500 NOK", label: "7,500 NOK" },
        { value: "10000 NOK", label: "10,000 NOK" },
        { value: "15000+ NOK", label: "15,000 NOK or higher" },
      ],
      submit: "Send enquiry",
      submitting: "Sending …",
      success: "Thanks! We'll be in touch shortly.",
      error: "Something went wrong. Please try again.",
      validation: "Please fill in every field.",
    },
    footer: {
      tagline: "Digital studio based in Norway.",
      rights: "All rights reserved.",
      org: "Org. no.",
      sections: {
        nav: "Navigate",
        contact: "Contact",
        legal: "Company",
      },
    },
  },
};

const LangContext = createContext({
  lang: "no",
  t: translations.no,
  toggle: () => {},
  setLang: () => {},
});

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("no");
  const toggle = useCallback(() => {
    setLang((prev) => (prev === "no" ? "en" : "no"));
  }, []);
  const value = { lang, t: translations[lang], toggle, setLang };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);
