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

  const deleteTeam = (id: string) => {
    setTeams((prevItems: any) =>
      prevItems.filter((item: any) => item.id !== id)
    );
  };

  const changePoints = (teamTitle: any, changeValue: any) => {
    const updatedTeams = teams.map((team: any) => {
      if (team.title === teamTitle) {
        return { ...team, point: team.point + changeValue };
      }
      return team;
    });
    setTeams(updatedTeams);
  };

  const contextValue = {
    teams,
    addTeam,
    deleteTeam,
    changePoints,
  };
  return (
    <TeamsContext.Provider value={contextValue}>
      {children}
    </TeamsContext.Provider>
  );
};
export const useTeamsContext = () => useContext(TeamsContext);

export default TeamsProvider;
