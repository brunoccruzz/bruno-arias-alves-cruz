const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bruno Arias Alves Cruz
        </p>
        <p className="text-xs text-muted-foreground/60 font-mono">
          Desenvolvido com React + TypeScript
        </p>
      </div>
    </footer>
  );
};

export default Footer;
