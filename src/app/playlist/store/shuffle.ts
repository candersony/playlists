import { PlaylistResponse } from '../api/models/playlist-response';

const shuffle = <T>(array: T[]) => {
  const shuffledArray = [...array];
  let currentIndex = shuffledArray.length;
  let temporaryValue: T;
  let randomIndex: number;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = shuffledArray[currentIndex];
    shuffledArray[currentIndex] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = temporaryValue;
  }

  return shuffledArray;
};

export const shuffleResponse = (response: PlaylistResponse) =>
  Object.fromEntries(
    Object.entries(response).map(([key, value]) => [
      key,
      { ...value, content: shuffle(value.content) },
    ])
  );
