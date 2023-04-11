import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';

const TeamsContext = createContext({});

const TeamsProvider = ({ children }: any) => {
  const [teams, setTeams] = useState<any>([]);
  useEffect(() => {
    try {
      const teamsData: any = localStorage.getItem('teams');

      if (teamsData) {
        setTeams(JSON.parse(teamsData));
      }
    } catch (error) {
      console.warn(`Error reading localStorage:`, error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('teams', JSON.stringify(teams));
  }, [teams]);

  const addTeam = (newTeam: any) => {
    setTeams([...teams, newTeam]);
  };

  const contextValue = {
    teams,
    addTeam,
  };
  return (
    <TeamsContext.Provider value={contextValue}>
      {children}
    </TeamsContext.Provider>
  );
};
export const useTeamsContext = () => useContext(TeamsContext);

export default TeamsProvider;
