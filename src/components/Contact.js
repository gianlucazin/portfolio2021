const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact__wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="contact__wave-fill"
          ></path>
        </svg>
      </div>
      <div className="container u-max-width-small">
        <h2 className="heading-secondary">Contact.</h2>
        <form className="contact__form" onSubmit="">
          <label for="name" className="contact__label">
            Name
            <input
              className="contact__input"
              type="text"
              value=""
              onChange=""
              name="name"
            />
          </label>
          <label for="email" className="contact__label">
            Email
            <input
              className="contact__input"
              type="email"
              value=""
              onChange=""
              name="email"
            />
          </label>
          <label for="message" className="contact__label">
            Message
            <textarea
              className="contact__text-area"
              type="textarea"
              value=""
              cols="40"
              rows="8"
              onChange=""
              name="message"
            />
          </label>
          <input type="submit" className="contact__btn" value="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
