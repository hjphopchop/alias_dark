import { Team } from '@/modules/game/types/TeamTypes';
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const TeamsContext = createContext({} as ITeamContext);
type TeamsProviderProps = {
  children: React.ReactNode;
};
interface ITeamContext {
  teams: Team[];
  addTeam: (newTeam: Team) => void;
  deleteTeam: (id: string) => void;
  changePoints: (id: string, changeValue: number) => void;
  reorderTeams: (teams: Team[]) => void;
  resetPoints: () => void;
}
const TeamsProvider = ({ children }: TeamsProviderProps) => {
  const [teams, setTeams] = useState<Team[]>([]);
  useEffect(() => {
    try {
      const teamsData: string | null = localStorage.getItem('teams');

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

  const addTeam = (newTeam: Team) => {
    setTeams([...teams, newTeam]);
  };

  const deleteTeam = (id: string) => {
    setTeams((prevItems: any) =>
      prevItems.filter((item: any) => item.id !== id)
    );
  };

  const changePoints = (id: string, changeValue: number) => {
    const updatedTeams = teams.map((team: any) => {
      if (team.id === id) {
        return { ...team, points: team.points + changeValue };
      }
      return team;
    });
    setTeams(updatedTeams);
  };

  const reorderTeams = (teams: Team[]) => {
    setTeams(teams);
  };

  const resetPoints = () => {
    const updatedTeams = teams.map((team: Team) => {
      team.points = 0;
      return { ...team };
    });
    setTeams(updatedTeams);
  };

  const contextValue = {
    teams,
    addTeam,
    deleteTeam,
    changePoints,
    resetPoints,
    reorderTeams,
  };
  return (
    <TeamsContext.Provider value={contextValue}>
      {children}
    </TeamsContext.Provider>
  );
};
export const useTeamsContext = () => useContext(TeamsContext);

export default TeamsProvider;
