const HamburgerSVG = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="*:stroke-background"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.00024 6.99997H7.00024M20.0002 6.99997H11.0002"
        stroke=""
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20.0002 17H17.0002M4.00024 17H13.0002"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.00024 12H7.00024H20.0002"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HamburgerSVG;
