const HamburgerSVG = ({ color }) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      className={color === "white" ? "stroke-white" : "stroke-[#1E1E1E]"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33374 12.8333H12.8337M36.6671 12.8333H20.1671"
        strokeWidth="2.75"
        strokeLinecap="round"
      />
      <path
        d="M36.6671 31.1667H31.1671M7.33374 31.1667H23.8337"
        strokeWidth="2.75"
        strokeLinecap="round"
      />
      <path
        d="M7.33374 22H12.8337H36.6671"
        strokeWidth="2.75"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HamburgerSVG;
