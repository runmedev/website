import Image from "next/image";

interface SideBySideProps {
  left: string;
  right: string;
  width: number;
  height: number;
}

export const SideBySide: React.FC<SideBySideProps> = ({ left, right, width, height }) => {
  return (
    <div className="flex flex-col space-y-8 md:space-y-0 md:space-x-12 md:flex-row">
      <div className="flex flex-col w-full space-y-6 md:w-1/2">
        <Image
          priority
          alt="NUX Home"
          layout="responsive"
          width={width}
          height={height}
          src={left}
        />
      </div>
      <div className="w-full md:w-1/2">
        <Image
          priority
          alt="UX Personalize"
          layout="responsive"
          width={width}
          height={height}
          src={right}
        />
      </div>
    </div>
  );
};

export default SideBySide;
