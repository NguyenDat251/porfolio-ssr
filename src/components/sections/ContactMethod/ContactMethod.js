import classNames from "classnames";
import ContactMethodStyles from "./ContactMethod.module.scss";
import { contactLink, contactNames } from "./constants";
import { getContactIconComponent } from "./helpers";

export default function ContactMethod() {
  return (
    <>
      <ul
        className={classNames(
          ContactMethodStyles.contactMethodBoundary,
          " hidden md:flex flex-col fixed left-8 bottom-0 gap-6",
        )}
      >
        {contactNames.map((contactName, index) => (
          <li
            className={classNames(ContactMethodStyles.contactMethodBoundary)}
            key={contactName}
          >
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
        <div className={ContactMethodStyles.verticalLine}></div>
      </ul>
    </>
  );
}
