import { leagueData } from "../test-data.js/league.data"

export class LeaguePage {
    constructor(page) {
        this.page=page
        this.premierLeagueLogo=this.page.getByRole('link', { name: 'premierleague logo' })
        this.premierLeagueTitle=this.page.getByRole('heading', { name: leagueData.premierLeague.leagueHeading })
        
    }
}