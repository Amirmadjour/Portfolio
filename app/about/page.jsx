import Footer from "@/components/footer/Footer";
import hero_image from "@/public/images/other/nature-lake.jpg";
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
    <div className="w-screen h-fit flex flex-col text-text items-center gap-3 lg:px-[25px]">
      <h2
        className={clsx(
          "text-[calc(clamp(3.25em,7vw,8em)*0.875)] w-full px-[25px] leading-[1.1] pt-[20vh] lg:py-[30vh]",
          "px-[25px] sm:px-[65px] md:px-40"
        )}
      >
        Empowering brands to succeed in the digital realm.
      </h2>
      <div className="w-screen h-fit">
        <div className="flex lg:px-[25px]">
          <div
            className={clsx(
              "w-full h-fit flex flex-col items-center justify-center py-5 lg:flex-row lg:justify-between",
              "px-[25px] sm:px-[65px] md:px-40"
            )}
          >
            <p className="w-full h-fit text-xl py-14 lg:max-w-[400px]">
              {"With God's help"}, I help Businesses achieve their endeavours in
              developing high-quality digital products, from websites to mobile
              applications, your product is in good hands.
            </p>
            <Image
              className="w-full h-auto lg:max-w-[600px]"
              src={hero_image}
              width={0}
              height={0}
              style={{ objectFit: "cover" }}
              alt="a picture of me"
            />
          </div>
        </div>
        <div className="w-full h-fit flex flex-col items-center justify-center gap-10 lg:px-[25px] pt-10 pb-20 lg:py-[100px]">
          <h3
            className={clsx(
              "text-4xl font-medium lg:text-left lg:w-full",
              "px-[25px] sm:px-[65px] md:px-40"
            )}
          >
            I can be of service with...
          </h3>
          <div
            className={clsx(
              "flex flex-col items-center justify-center gap-[30px] lg:flex-row",
              "px-[25px] sm:px-[65px] md:px-40"
            )}
          >
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
