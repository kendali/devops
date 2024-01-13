const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer className="bg-orange-400">
      <div className="container p-5">
        <p className="text-slate-900 font-medium text-center">
          All right reserved Kendali &copy;
          {` ${year}`} 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
