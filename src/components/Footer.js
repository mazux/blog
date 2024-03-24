function Footer() {
  var currentYear = new Date().getFullYear();
  return (
    <footer className="text-light text-center mb-3">
      Copy right reserverd &copy;{currentYear}
    </footer>
  );
}

export default Footer;
