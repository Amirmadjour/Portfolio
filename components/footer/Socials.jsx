import Link from "next/link";
import GithubSVG from "@/public/SVG/GithubSVG";
import LinkedInSVG from "@/public/SVG/LinkedInSVG";

const socials = [
  {
    label: "Github",
    svg: <GithubSVG />,
    link: "https://github.com/Amirmadjour",
  },
  {
    label: "LinkedIn",
    svg: <LinkedInSVG />,
    link: "https://www.linkedin.com/in/amir-madjour-2a0a46263",
  },
];

const Socials = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-5">
      <h4 className="text-[14px] text-background_light text-left w-full">
        Socials
      </h4>
      <div className="flex w-full items-center justify-between text-base">
        {socials.map(({ label, svg, link }) => (
          <Link
            target="_blank"
            href={link}
            key={label}
            className="flex items-center justify-center gap-3"
          >
            {svg}
            <h5 className="font-medium">{label}</h5>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Socials;
