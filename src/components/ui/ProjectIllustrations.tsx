// @/components/ui/ProjectIllustrations.tsx

const CrmIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 25H40" stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
    <path d="M45 25H180" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
    <path d="M20 40H70" stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
    <path d="M75 40H180" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
    <path d="M20 55H50" stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
    <path d="M55 55H180" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
    <path d="M20 70H80" stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
    <path d="M85 70H180" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
    <rect x="15" y="68" width="10" height="4" fill="rgba(255, 92, 122, 0.9)" className="animate-pulse" />
  </svg>
);

const SecurityIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10 L90 30 L90 60 C90 80 50 95 50 95 C50 95 10 80 10 60 L10 30 Z" stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
    <path d="M50 10 L90 30 L90 60 C90 80 50 95 50 95 C50 95 10 80 10 60 L10 30 Z" fill="rgba(255, 92, 122, 0.14)" />
    <path d="M40 50 L50 60 L65 45" stroke="rgba(255, 92, 122, 0.9)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SocialIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="10" stroke="rgba(255,255,255,0.34)" strokeWidth="2" fill="rgba(255, 92, 122, 0.14)" />
    <circle cx="25" cy="30" r="6" stroke="rgba(255,255,255,0.26)" strokeWidth="2" />
    <circle cx="75" cy="30" r="6" stroke="rgba(255,255,255,0.26)" strokeWidth="2" />
    <circle cx="30" cy="70" r="6" stroke="rgba(255,255,255,0.26)" strokeWidth="2" />
    <circle cx="70" cy="70" r="6" stroke="rgba(255,255,255,0.26)" strokeWidth="2" />
    <path d="M50 40 L50 20 M50 60 L50 80 M60 50 L80 50 M40 50 L20 50" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
    <path d="M31 33 L45 45" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
    <path d="M69 33 L55 45" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
    <path d="M34 67 L45 55" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
    <path d="M66 67 L55 55" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
  </svg>
);

const ScrapingIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20 L80 80" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
    <path d="M80 20 L20 80" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
    <path d="M50 10 L50 90" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
    <path d="M10 50 L90 50" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
    <circle cx="50" cy="50" r="5" fill="rgba(255, 92, 122, 0.9)" />
    <circle cx="20" cy="20" r="3" fill="rgba(255,255,255,0.26)" />
    <circle cx="80" cy="80" r="3" fill="rgba(255,255,255,0.26)" />
    <circle cx="80" cy="20" r="3" fill="rgba(255,255,255,0.26)" />
    <circle cx="20" cy="80" r="3" fill="rgba(255,255,255,0.26)" />
  </svg>
);


const illustrations = {
  crm: CrmIllustration,
  security: SecurityIllustration,
  social: SocialIllustration,
  scraping: ScrapingIllustration,
};

export const ProjectIllustration = ({ name }: { name: keyof typeof illustrations }) => {
  const Illustration = illustrations[name];
  if (!Illustration) return null;
  return (
    <div className="w-full h-full flex items-center justify-center p-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
      <Illustration />
    </div>
  );
};
