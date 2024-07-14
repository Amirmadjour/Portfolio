import Footer from "@/components/footer/Footer";
import hero_image from "@/public/images/nature-lake.jpg";
import Image from "next/image";
import clsx from "clsx";

const cards = [
  {
    number: "01",
    label: "Frontend Development",
    desc: "Having a proven background in frontend development, I deliver robust and user-friendly digital interfaces. A seamless and engaging user experience is the foundation of any successful website or application.",
  },
  {
    number: "02",
    label: "Backend Development",
    desc: "With extensive experience in backend development using Node and Express.js, I deliver robust and efficient server-side solutions. Building reliable and scalable RESTful APIs is the foundation of any successful digital product.",
  },
  {
    number: "03",
    label: "Full stack and mobile",
    desc: "A website or mobile app, from A to z is what makes me stand out. I am able to develop a digital app from start to finish with great sense of creativity.",
  },
];

const About = () => {
  return (
    <div className="w-screen h-fit flex flex-col text-text items-center gap-3">
      <h2
        className={clsx(
          "text-[calc(clamp(3.25em,7vw,8em)*0.875)] w-full px-[25px] leading-[1.1] pt-[20vh]"
        )}
      >
        Empowering brands to succeed in the digital realm.
      </h2>
      <div className="w-screen h-fit">
        <div className="w-full h-fit flex flex-col items-center justify-center px-[25px] py-5">
          <p className="w-full h-fit text-xl py-14">
            With God's help, I help Businesses achieve their endeavours in
            developing high-quality digital products, from websites to mobile
            applications, your product is in good hands.
          </p>
          <Image
            className="w-full h-auto"
            src={hero_image}
            width={0}
            height={0}
            style={{ objectFit: "cover" }}
            alt="a picture of me"
          />
        </div>
        <div className="w-full h-fit flex flex-col items-center justify-center gap-10 px-[25px] pt-10 pb-20">
          <h3 className="text-4xl font-medium">I can be of service with...</h3>
          <div className="flex flex-col items-center justify-center gap-[30px]">
            {cards.map(({ number, label, desc }) => (
              <div
                key={number}
                className={clsx(
                  "flex flex-col items-center justify-center gap-5",
                  "*:text-left *:w-full"
                )}
              >
                <p className="text-text_light text-[14px] leading-snug">
                  {number}
                </p>
                <h4 className="font-medium text-3xl">{label}</h4>
                <div className=" h-[1px] bg-text_light"></div>
                <p className="h-fit text-lg">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
