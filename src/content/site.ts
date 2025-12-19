export const site = {
  person: {
    name: "Jules Laconfourque",
    image: {
      src: "/images/profile.png",
      alt: "Jules Laconfourque",
    },
  },
  links: {
    github: "https://github.com/Ju-l-e-s/",
    linkedin: "https://www.linkedin.com/in/jules-l-231377233/",
  },
  contact: {
    emailBase64: "Y29udGFjdEBqdWxlc2xhY29uZm91cnF1ZS5mcg==",
  },
  terminal: {
    promptTitle: "jules \u2014 -zsh",
    help: "Available commands: help, whoami, pwd, ls, cat [file], clear",
    whoami: "Jules Laconfourque - DevOps & Backend Developer. Passionate about automation.",
    pwd: "/home/visitor",
    ls: ["skills.json", "contact.md", "projects.txt", "stack.txt"],
    contactLabels: {
      email: "Email",
      linkedin: "LinkedIn",
    },
    files: {
      skills: {
        backend: ["Node", "Go"],
        cloud: ["AWS", "K8s"],
        ci: ["GitHub Actions"],
      },
      projects: "Check out the projects section below!",
    },
  },
} as const;
