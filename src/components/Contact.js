import emailjs from 'emailjs-com';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wdedsaw',
        'template_d1cllmb',
        e.target,
        'user_EZ5DhQdL9bwW4BXaw2gcN'
      )
      .then(
        (result) => {
          alert('Contact Form Submitted!');
        },
        (error) => {
          alert(
            'Error! Please try again or send an email to: gianlucazin1990@gmail.com'
          );
        }
      );

    e.target.reset();
  }

  return (
    <div className="contact">
      <div className="container u-max-width-small">
        <h1 id="contact" className="heading-primary u-center-text">
          Contact<span>.</span>
        </h1>
        <form onSubmit={sendEmail} className="contact__form">
          <label htmlFor="name" className="label contact__label">
            Name:
          </label>
          <input
            className="contact__input"
            type="text"
            placeholder="Enter your Name here"
            name="name"
          />
          <label htmlFor="email" className="label contact__label">
            Email:
          </label>
          <input
            className="contact__input"
            type="email"
            placeholder="Enter your Email here"
            name="email"
          />
          <label htmlFor="message" className="label contact__label">
            Message:
          </label>
          <textarea
            className="contact__text-area"
            type="textarea"
            cols="40"
            rows="8"
            placeholder="Enter your Message here"
            name="message"
          />
          <input type="submit" className="contact__btn" value="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
