import React, { createContext, useContext, useEffect, useState } from 'react';

const GameContext = createContext({});

const GameProvider = ({ children }: any) => {
  const [words, setWords] = useState<any>([]);
  useEffect(() => {
    try {
      const wordsData: any = localStorage.getItem('words');

      if (wordsData) {
        setWords(JSON.parse(wordsData));
      }
    } catch (error) {
      console.warn(`Error reading localStorage:`, error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('words', JSON.stringify(words));
  }, [words]);

  const addWords = (newWords: Array<string>) => {
    try {
      setWords(newWords);
    } catch (e) {
      console.log('error', e);
    }
  };

  const removeWord = (id: any) => {
    try {
      setWords((prevItems: any) =>
        prevItems.filter((item: any) => item !== id)
      );
    } catch (error) {
      console.log('error', error);
    }
  };

  const contextValue = {
    words,
    addWords,
    removeWord,
  };
  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
export const useGameContext = () => useContext(GameContext);

export default GameProvider;
