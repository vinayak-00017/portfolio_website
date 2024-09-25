import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_n2tw9pc",
        "template_v4bnheo",
        {
          from_name: form.name,
          to_name: "vinayak",
          from_email: form.email,
          to_email: "vinayak00017@gmail.com",
          message: form.message,
        },
        "2QG4ZbJJHpQZn-HPD",
      );
      setLoading(false);
      alert("Your message has been sent!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setLoading(false);

      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <section className={"c-space my-20"}>
      <div
        className={
          "relative min-h-screen flex items-center justify-center flex-col"
        }
      >
        <img
          src={"/assets/terminal.png"}
          alt={"terminal background"}
          className={"absolute inset-0 w-full h-full"}
        />
        <div className={"contact-container"}>
          <h3 className={"head-text"}>Lets talk now</h3>
          <p className={"text-lg text-white-600 mt-3"}>
            Whether you are looking for .... ..... .... .... I am here to talk.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={"mt-12 flex flex-col space-y-7"}
          >
            <label className={"space-y-3"}>
              <span className={"field-label"}>Full Name</span>
              <input
                type={"text"}
                name={"name"}
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder={"Connor McGregor"}
              />
            </label>{" "}
            <label className={"space-y-3"}>
              <span className={"field-label"}>Email</span>
              <input
                type={"email"}
                name={"email"}
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder={"ConnorMcGregor@ufc.com"}
              />
            </label>{" "}
            <label className={"space-y-3"}>
              <span className={"field-label"}>Your message</span>
              <textarea
                name={"message"}
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder={"It's just business!"}
              />
            </label>
            <button className={"field-btn "} type={"submit"} disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src={"/assets/arrow-up.png"}
                alt={"arrow-up"}
                className={"field-btn_arrow"}
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
