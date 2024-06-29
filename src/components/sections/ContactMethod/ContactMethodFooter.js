import { contactLink, contactNames } from "./constants";
import ContactMethodStyles from "./ContactMethod.module.scss";
import { getContactIconComponent } from "./helpers";

export default function ContactMethodFooter() {
  return (
    <div className="flex justify-around md:hidden w-full mt-4">
      {contactNames.map((contactName, index) => (
        <div
          className={ContactMethodStyles.contactMethodComponent}
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
        </div>
      ))}
    </div>
  );
}
