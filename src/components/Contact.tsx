import "../style/contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact_container">
          <div className="social_media">
            <a href="https://www.instagram.com/yanix.code/" target="blank">
              <img src="src/assets/icons/instagram.png" alt="facebook_icon" />
            </a>
            <a>
              <img src="src/assets/icons/facebook.png" alt="insta_icon" />
            </a>
            <a href="mailto:yanix.code@gmail.com">
              <img src="src/assets/icons/gmail.png" alt="gmail_icon" />
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
