const translations = {

    en: {
        home: "Home",
        projects: "Projects",
        contact: "Contact",
        about: "About",

        greeting: "Hi, I'm Tiyasha Malakar",
        profession: "WEB DEVELOPER & DESIGNER",

        intro: "I create sleek, responsive websites with HTML, CSS, and JavaScript. Let’s build something amazing together.",

        projectsBtn: "Projects",
        contactBtn: "Contact Me",

        aboutTitle: "About Me",
        aboutD: "I am a passionate web developer and designer who enjoys creating modern, responsive, and user-friendly websites. I work with HTML, CSS, and JavaScript and enjoy turning creative ideas into functional web projects. I am continuously improving my web development skills and looking forward to gaining practical experience by working on real-world projects. My goal is to build useful and engaging websites and applications while growing as a developer",
        aboutSkills: "Skills: HTML, CSS, JavaScript",
        aboutGoal: "Career Goal: Web / App Developer",

        projectsTitle: "My Projects",

        pTitle1: "Calculator",
        pd1:"A responsive calculator built using HTML, CSS and JavaScript. It includes basic arithmetic operations, keyboard support and calculation history.",

        pTitle2: "Admission Form",
        pd2:"A responsive admission form designed with HTML and CSS with JavaScript validation for user input.",

        pTitle3: "Image Gallery",
        pd3:"A responsive image gallery built using HTML, CSS and JavaScript.",
        dt:"Development Tools",

        contactTitle: "Contact Me",

        name: "Name",
        email: "Email",
        message: "Message",
        sendMessage: "Send Message"
    },


    es: {
        home: "Inicio",
        projects: "Proyectos",
        contact: "Contacto",

        greeting: "Hola, soy Tiyasha Malakar",
        profession: "DESARROLLADORA WEB Y DISEÑADORA",

        intro: "Creo sitios web modernos y responsivos utilizando HTML, CSS y JavaScript. Construyamos algo increíble juntos.",

        projectsBtn: "Proyectos",
        contactBtn: "Contáctame",

        aboutTitle: "Sobre mí",
        aboutD: "Soy una desarrolladora y diseñadora web apasionada que disfruta creando sitios web modernos, responsivos y fáciles de usar. Trabajo con HTML, CSS y JavaScript, y me gusta convertir ideas creativas en proyectos web funcionales. Mejoro continuamente mis habilidades en desarrollo web y espero adquirir experiencia práctica trabajando en proyectos del mundo real. Mi objetivo es crear sitios web y aplicaciones útiles y atractivos mientras sigo creciendo como desarrolladora.",
        aboutSkills: "Habilidades: HTML, CSS, JavaScript",
        aboutGoal: "Objetivo profesional: Desarrolladora web / de aplicaciones",

        projectsTitle: "Mis Proyectos",

        pTitle1: "Calculadora",
        pd1:"Una calculadora responsiva desarrollada con HTML, CSS y JavaScript. Incluye operaciones aritméticas básicas, compatibilidad con el teclado y un historial de cálculos.",
        
        pTitle2: "Formulario de Admisión",
        pd2:"Un formulario de admisión responsivo diseñado con HTML y CSS, con validación de JavaScript para los datos introducidos por el usuario.",

        pTitle3: "Galería de Imágenes",
        pd3:"Una galería de imágenes responsiva construida con HTML, CSS y JavaScript.",
        dt:"Herramientas de Desarrollo",

        contactTitle: "Contáctame",

        name: "Nombre",
        email: "Correo electrónico",
        message: "Mensaje",
        sendMessage: "Enviar mensaje"
    },


    de: {
        home: "Startseite",
        projects: "Projekte",
        contact: "Kontakt",

        greeting: "Hallo, ich bin Tiyasha Malakar",
        profession: "WEBENTWICKLERIN & DESIGNERIN",

        intro: "Ich erstelle moderne, responsive Websites mit HTML, CSS und JavaScript. Lass uns gemeinsam etwas Großartiges schaffen.",

        projectsBtn: "Projekte",
        contactBtn: "Kontakt",

        aboutTitle: "Über mich",
        aboutD: "Ich bin eine leidenschaftliche Webentwicklerin und Webdesignerin, die gerne moderne, responsive und benutzerfreundliche Websites erstellt. Ich arbeite mit HTML, CSS und JavaScript und setze kreative Ideen gerne in funktionale Webprojekte um. Ich verbessere kontinuierlich meine Fähigkeiten in der Webentwicklung und freue mich darauf, durch die Arbeit an realen Projekten praktische Erfahrungen zu sammeln. Mein Ziel ist es, nützliche und ansprechende Websites und Anwendungen zu entwickeln und mich dabei als Entwicklerin weiterzuentwickeln.",
        aboutSkills: "<strong>Fähigkeiten:</strong> HTML, CSS, JavaScript",
        aboutGoal: "<strong>Berufsziel:</strong> Web- / App-Entwicklerin",

        projectsTitle: "Meine Projekte",

        pTitle1: "Taschenrechner",
        pd1:"Ein responsiver Taschenrechner, entwickelt mit HTML, CSS und JavaScript. Er bietet grundlegende Rechenoperationen, Tastaturunterstützung und einen Berechnungsverlauf",

        pTitle2: "Aufnahmeformular",
        pd2:"Ein responsives Aufnahmeformular, das mit HTML und CSS sowie JavaScript-Validierung für Benutzereingaben gestaltet wurde.",

        pTitle3: "Bildergalerie",
        pd3:"Eine responsive Bildergalerie, entwickelt mit HTML, CSS und JavaScript.",
        dt:"Entwicklungstools",

        contactTitle: "Kontakt",

        name: "Name",
        email: "E-Mail",
        message: "Nachricht",
        sendMessage: "Nachricht senden"
    }

};


function changelanguage(language) {

    const selectedLanguage = translations[language];

    if (!selectedLanguage) {
        return;
    }

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.getAttribute("data-i18n");

        if (selectedLanguage[key]) {
            element.textContent = selectedLanguage[key];
        }

    });

    localStorage.setItem("selectedLanguage", language);
}

const savedLanguage = localStorage.getItem("selectedLanguage");

if (savedLanguage) {
    changelanguage(savedLanguage);
}