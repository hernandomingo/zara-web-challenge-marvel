import Image from "next/image";
import { Character } from "../models";
import { HeartIconOutline } from "@/components";

interface CharacterResumeProps {
  character: Character;
}

export const CharacterResume = ({ character }: CharacterResumeProps) => {
  const { description, images, name } = character;

  return (
    <div className="bg-black text-white">
      <div className="flex flex-col md:flex-row md:gap-12 w-full max-w-[960px] md:h-72 lg:h-80 mx-auto">
        <div className="relative w-full aspect-square md:max-w-72 lg:max-w-80 md:max-h-72 lg:max-h-80">
          <Image
            src={images.big}
            alt={`${name} Image`}
            fill
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-col flex-1 justify-center px-4 py-6 md:pr-12 lg:p-0">
          <div className="flex justify-between mb-6">
            <h1 className="text-[32px] lg:text-[40px] font-bold uppercase">
              {name}
            </h1>
            <HeartIconOutline color="white" size={24} />
          </div>
          <p className="text-base font-normal">{description}</p>
        </div>
      </div>
    </div>
  );
};
