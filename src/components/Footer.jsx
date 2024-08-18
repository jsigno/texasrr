import { socialLinks, contactLinks } from "../constants";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="px-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* <img className="h-48 mr-2" src={logo} alt="Logo" /> */}
        <div>
          <h3 className="text-md font-semibold mb-4">Socials</h3>
          <ul className="space-y-2">
            {contactLinks.map((contact, index) => (
              <li key={index}>
                <a
                  href={contact.href}
                >
                  {contact.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 px">
            {socialLinks.map((links, index) => (
              <li key={index}>
                <a
                  href={links.href}
                >
                  {links.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;