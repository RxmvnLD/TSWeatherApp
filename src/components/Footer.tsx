import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#03070e] px-4 lg:px-80 py-16 lg:py-18 flex flex-col gap-10 ">
      <div className="flex flex-col lg:flex-row justify-between ">
        <div className="lg:w-1/5">
          <h5 className="text-gray-400 text-sm font-semibold mb-5 lg:mb-7">
            Phone
          </h5>
          <div className="mb-10 lg:mb-0">+52 443 2149811</div>
        </div>
        <div className="lg:w-1/5">
          <h5 className="text-gray-400 text-sm font-semibold mb-5 lg:mb-7">
            Email
          </h5>
          <div className="mb-10 lg:mb-0">info@canteradigital.io</div>
        </div>
        <div className="lg:w-1/5">
          <h5 className="text-gray-400 text-sm font-semibold mb-5 lg:mb-7">
            Address
          </h5>
          <p className="mb-10 lg:mb-0">
            Boulevard García de León #490 Piso 2, Col. Nueva Chapultepec
            Morelia, Michoacán México
          </p>
        </div>
        <div className="lg:w-1/5">
          <div>
            <h5 className="text-gray-400 text-sm font-semibold mb-5 lg:mb-7">
              Follow us
            </h5>
            <div className="mb-10 flex flex-row gap-10">
              <a href="https://www.facebook.com/canteradigital" target="_blank">
                Facebook
              </a>
              <a
                href="https://www.instagram.com/canteradigital"
                target="_blank"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/canteradigital"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-gray-400 text-sm font-semibold mb-5">Legal</h5>
            <div className="mb-10 lg:mb-0 flex flex-row gap-10">
              <a href="https://www.facebook.com/canteradigital" target="_blank">
                Disclaimer
              </a>
              <a
                href="https://www.instagram.com/canteradigital"
                target="_blank"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>© 2022 - Cantera Digital</div>
    </footer>
  );
};

export default Footer;
