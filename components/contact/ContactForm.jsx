import { useState, useEffect } from "react";
import clsx from "clsx";
import Confetti from "react-confetti";
import { useFormik } from "formik";
import * as Yup from "yup";

const formElements = [
  { id: "name", label: "Your name", placeHolder: "Rodrego gostav" },
  { id: "email", label: "Your email", placeHolder: "info@something.com" },
  {
    id: "organization",
    label: "Your organization",
    placeHolder: "Organization & smh",
  },
  {
    id: "services",
    label: "What services are you looking for",
    placeHolder: "Frontend development, database integration",
  },
  { id: "message", label: "Your Message", placeHolder: "Your Message" },
];

const ContactForm = () => {
  const [confettiIsAppearing, setConfettiIsAppearing] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      organization: "",
      services: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "minimum 3 letters")
        .max(30, "maximum 30 letters")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      organization: Yup.string().max(),
      services: Yup.string().max(),
      message: Yup.string().max(),
    }),
    onSubmit: async (values, { resetForm }) => {
      const response = await fetch(
        "https://madjouramir.madjria.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        setConfettiIsAppearing(true);
        console.log("confetti should appear");
        setTimeout(() => {
          setConfettiIsAppearing(false);
        }, 2000);
        resetForm();
      } else {
        alert("Failed to send email.");
      }
    },
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full h-fit flex flex-col items-center justify-center py-[10px] lg:max-w-[50vw]"
    >
      {formElements.map(({ id, label, placeHolder }) => (
        <div
          key={id}
          className={clsx(
            "relative w-full flex flex-col justify-center items-center gap-5 pl-[70px] py-10 text-base",
            "border-y border-y-background_light",
            "last-of-type:pb-10 input_number "
          )}
        >
          <label className="w-full text-left" htmlFor={id}>
            {label}
          </label>
          <input
            className="font-medium placeholder:text-background_light bg-inherit w-full focus:outline-none"
            name={id}
            id={id}
            placeholder={placeHolder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[id]}
          ></input>
          {formik.touched[id] && formik.errors[id] ? (
            <div className="absolute top-2 left-0 text-red-500 text-sm">
              {formik.errors[id]}
            </div>
          ) : null}
        </div>
      ))}
      <button className="button border-background_light my-10" type="submit">
        Send it
      </button>
      <div className="fixed w-screen h-screen inset-0 pointer-events-none">
        <Confetti
          numberOfPieces={confettiIsAppearing ? 200 : 0}
          width={dimensions.width}
          height={dimensions.height}
        />
      </div>
    </form>
  );
};

export default ContactForm;
