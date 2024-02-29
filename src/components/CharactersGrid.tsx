import { CharacterCard } from ".";

export const CharactersGrid = () => {
  const characters = [
    {
      id: "1",
      name: "Loki",
      image: "https://cdn.marvel.com/content/1x/017lok_ons_crd_03.jpg",
    },
    {
      id: "2",
      name: "Loki",
      image: "https://cdn.marvel.com/content/1x/017lok_ons_crd_03.jpg",
    },
    {
      id: "3",
      name: "Loki",
      image: "https://cdn.marvel.com/content/1x/017lok_ons_crd_03.jpg",
    },
    {
      id: "4",
      name: "Loki",
      image: "https://cdn.marvel.com/content/1x/017lok_ons_crd_03.jpg",
    },
    {
      id: "5",
      name: "Loki",
      image: "https://cdn.marvel.com/content/1x/017lok_ons_crd_03.jpg",
    },
    {
      id: "6",
      name: "Loki",
      image: "https://cdn.marvel.com/content/1x/017lok_ons_crd_03.jpg",
    },
    {
      id: "7",
      name: "Loki",
      image: "https://cdn.marvel.com/content/1x/017lok_ons_crd_03.jpg",
    },
    {
      id: "8",
      name: "Loki",
      image: "https://cdn.marvel.com/content/1x/017lok_ons_crd_03.jpg",
    },
    {
      id: "9",
      name: "Loki",
      image: "https://cdn.marvel.com/content/1x/017lok_ons_crd_03.jpg",
    },
    {
      id: "10",
      name: "Loki",
      image: "https://cdn.marvel.com/content/1x/017lok_ons_crd_03.jpg",
    },
  ];
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          name={character.name}
          image={character.image}
        />
      ))}
    </div>
  );
};
