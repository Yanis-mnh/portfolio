import "../style/contact.css";
const Contact = () => {
  const baseUrl: string = import.meta.env.BASE_URL;
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact_container">
          <div className="social_media">
            <a href="https://www.instagram.com/yanix.code/" target="blank">
              <img src={baseUrl + "icons/instagram.png"} alt="insta_icon" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61564108437013&locale=fr_FR"
              target="blank"
            >
              <img src={baseUrl + "icons/facebook.png"} alt="insta_icon" />
            </a>
            <a target="blank" href="https://github.com/Yanis-mnh">
              <img src={baseUrl + "icons/github.png"} alt="gmail_icon" />
            </a>
            <a href="mailto:yanix.code@gmail.com">
              <img src={baseUrl + "icons/gmail.png"} alt="gmail_icon" />
            </a>
          </div>

          <form className="contact_form">
            <label> full name</label>
            <input></input>
            <label>email</label>
            <input></input>
            <label>message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message here..."
            ></textarea>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
