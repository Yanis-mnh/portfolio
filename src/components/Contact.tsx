import "../style/contact.css";
const Contact = () => {
  const baseUrl: string = import.meta.env.BASE_URL;
  return (
    <>
      <footer className="contact_container" id="contact">
        <div>
          <a href="https://web.facebook.com/yanis.mounnah.165" target="blank">
            <img src={baseUrl + "icons/facebook.png"} alt="insta_icon" />
          </a>
          <a target="blank" href="https://github.com/Yanis-mnh">
            <img src={baseUrl + "icons/github.png"} alt="gmail_icon" />
          </a>
          <a href="mailto:mounnah.yanis2002@gmail.com">
            <img src={baseUrl + "icons/gmail.png"} alt="gmail_icon" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Contact;
