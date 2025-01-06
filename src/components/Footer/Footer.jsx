import SocialMedia from "/src/components/comuns/SocialMedia";

const Footer = () => {
  return (
    <footer className="rounded-lg  dark:bg-blue-400">
      <SocialMedia />
      <span className="text-sm text-white  sm:text-center">
        © 2025{" "}
        <a href="#" className="font-semibold hover:underline">
          Tone Lopes™
        </a>
        . Todos os Direitos Reservados.
      </span>
    </footer>
  );
};

export default Footer;
