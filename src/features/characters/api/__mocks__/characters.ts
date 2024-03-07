import { Character } from "@/features/characters/models";
import {
  CharacterApiResponse,
  Extension,
  ItemType,
  Result,
  URLType,
} from "../interfaces/characters.interface";

export const mockApiResultCharacter: Result = {
  id: 1,
  name: "Test Character 1",
  description: "Character description 1",
  modified: "2022-01-01T00:00:00Z",
  thumbnail: {
    path: "http://example.com/image1",
    extension: Extension.Jpg,
  },
  resourceURI: "http://example.com/character/1",
  comics: {
    available: 1,
    collectionURI: "http://example.com/comics",
    items: [{ resourceURI: "http://example.com/comic/1", name: "Comic 1" }],
    returned: 1,
  },
  series: {
    available: 1,
    collectionURI: "http://example.com/series",
    items: [{ resourceURI: "http://example.com/series/1", name: "Series 1" }],
    returned: 1,
  },
  stories: {
    available: 1,
    collectionURI: "http://example.com/stories",
    items: [
      {
        resourceURI: "http://example.com/story/1",
        name: "Story 1",
        type: ItemType.Cover,
      },
    ],
    returned: 1,
  },
  events: {
    available: 1,
    collectionURI: "http://example.com/events",
    items: [{ resourceURI: "http://example.com/event/1", name: "Event 1" }],
    returned: 1,
  },
  urls: [
    { type: URLType.Comiclink, url: "http://example.com/comiclink" },
    { type: URLType.Detail, url: "http://example.com/detail" },
    { type: URLType.Wiki, url: "http://example.com/wiki" },
  ],
};

export const mockCharacterApiResponse: CharacterApiResponse = {
  code: 200,
  copyright: "",
  status: "Ok",
  attributionText: "Data provided by Marvel. © 2024 MARVEL",
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2024 MARVEL</a>',
  etag: "e062da7e85a1b43cf9e9e8e3c10f42f98140ab91",
  data: {
    offset: 0,
    limit: 20,
    total: 1,
    count: 1,
    results: [mockApiResultCharacter],
  },
};

export const mockAdaptedCharacters: Character[] = [
  {
    id: 1,
    images: {
      big: "http://example.com/image1/detail.jpg",
      little: "http://example.com/image1/standard_xlarge.jpg",
    },
    description: "Character description 1",
    name: "Test Character 1",
  },
  {
    id: 2,
    images: { big: "/big_image_url_2", little: "/little_image_url_2" },
    description: "Character description 2",
    name: "Character 2",
  },
];
