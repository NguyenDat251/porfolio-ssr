import "./ContactMethod.module.scss";
import { contactNames, contactLink } from "./constants";
import { getContactIconComponent } from "./helpers";

export default function ContactMethod() {
  return (
    <>
      <ul className="contact-method__boundary hidden md:flex flex-col fixed left-8 bottom-0 gap-6">
        {contactNames.map((contactName, index) => (
          <li className="contact-method__component" key={contactName}>
            {contactName === "Gmail" ? (
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nguyenquocdat2511998@gmail.com "
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                {getContactIconComponent(contactName)}
              </a>
            ) : (
              <a
                href={contactLink[index]}
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                {getContactIconComponent(contactName)}
              </a>
            )}
          </li>
        ))}
        <div className="vertical-line"></div>
      </ul>
    </>
  );
}
