import realm, { insertDBTeam, getAllDBTeams, getDBTeam, updateDBName, updateDBWins, updateDBLosses, updateDBSeed } from "../DAOs/AddTeamDao"
import dao from './AddTeamDao';

let players = [];
insertDBTeam('testTeam', 5, 0, 1, players);

test('Getting team', function(){
    let team = getDBTeam("testTeam");
    expect(team.teamName).toBe("testTeam");
    expect(team.wins).toBe(5);
    expect(team.losses).toBe(0);
    expect(team.seed).toBe(1);  
    expect(team.players).toBe(null);
})

//getAllTeams();