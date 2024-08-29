import React from "react";
import Link from "next/link";
import { BsTwitter, BsInstagram, BsLinkedin, BsSend } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useForm } from "@formspree/react";
import { motion } from "framer-motion";

const Contact = () => {
  // Form validation schema
  const validationSchema = Yup.object({
    Name: Yup.string().required("Name is required"),
    Email: Yup.string().email("Invalid email address").required("Email is required"),
    Subject: Yup.string().required("Subject is required"),
    Message: Yup.string().required("Message is required"),
  });

  // Formik form handler
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Subject: "",
      Message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      toast.success("Message sent successfully!");
      console.log("Form data", values);
    },
  });

  const Icons = [
    {
      href: "https://github.com/souravs3",
      icon: BsInstagram,
    },
    {
      href: "https://www.linkedin.com/in/sourav-s-809b8023b/",
      icon: BsLinkedin,
    },
  ];

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.4,
        duration: 0.3,
        type: "spring",
      },
    },
  };

  const itemdisplay = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      duration: 2,
      type: "spring",
    },
  };

  return (
    <section id="contact" className="py-10 w-full">
      <div className="container">
        <div className="w-full flex flex-col items-start justify-start tab:flex-row gap-10">
          <div className="tab:flex-1 w-full flex flex-col items-start justify-start gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="text-2xl font-semibold md:text-3xl text-secondary"
            >
              Get in touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 4 }}
              className="text-sm md:text-base font-normal"
            >
              I’m very approachable and would love to speak to you. Feel free to
              call, send me an email . Follow me in social media or simply
              complete the enquiry form.
            </motion.p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-start gap-4 flex-wrap lg:flex-none"
            >
              {Icons.map((item, i) => (
                <Link
                  href={item.href}
                  target="_blank"
                  key={i}
                  rel="noreferrer noopener"
                  className="w-12 h-12 flex items-center justify-center bg-[#ffffff1a] rounded-md backdrop-blur-sm border border-[#ffffff1a] hover:bg-secondary hover:text-white hover:origin-bottom transition-all duration-300"
                >
                  <motion.span variants={itemdisplay}>
                    <item.icon size={20} className="hover:text-white" />
                  </motion.span>
                </Link>
              ))}
            </motion.div>
          </div>
          {/* <div className="tab:flex-1 w-full flex flex-col items-start justify-start gap-4">
            <h2 className="text-2xl font-semibold">Send me a message</h2>
            <motion.form
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              className="w-full flex flex-col items-start gap-4"
              onSubmit={formik.handleSubmit}
            >
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Name}
              />
              {formik.touched.Name && formik.errors.Name ? (
                <div className="text-red-500 text-sm">{formik.errors.Name}</div>
              ) : null}

              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Email}
              />
              {formik.touched.Email && formik.errors.Email ? (
                <div className="text-red-500 text-sm">{formik.errors.Email}</div>
              ) : null}

              <input
                type="text"
                name="Subject"
                placeholder="Subject"
                className="w-full p-2 border border-gray-300 rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Subject}
              />
              {formik.touched.Subject && formik.errors.Subject ? (
                <div className="text-red-500 text-sm">{formik.errors.Subject}</div>
              ) : null}

              <textarea
                name="Message"
                placeholder="Your Message"
                className="w-full p-2 border border-gray-300 rounded-md"
                rows={4}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Message}
              />
              {formik.touched.Message && formik.errors.Message ? (
                <div className="text-red-500 text-sm">{formik.errors.Message}</div>
              ) : null}

              <button
                type="submit"
                className="w-full bg-secondary text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-secondary-dark transition-all duration-300"
              >
                Send Message
                <BsSend className="ml-2" />
              </button>
            </motion.form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
