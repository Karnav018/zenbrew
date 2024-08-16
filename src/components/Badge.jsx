import Image from "next/image";
const Badge = ({ containerStyle }) => {
  return (
    <div className={`relative ${containerStyle}`}>
      <Image
        src="/assets/badge.svg"
        fill
        alt="Badge"
        className=" object-contain"
      />
    </div>
  );
};

export default Badge;
