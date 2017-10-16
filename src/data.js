var dataAPI = new function (){
    // https://github.com/OpenLigaDB/OpenLigaDB-Samples
    this.apiKey = "api_key=wpf3pxpf5dkjfarwd3rgwc2e";
    this.currentSeason = "sr:season:41576";
    this.Bundesliga = "sr:tournament:35";
    this.getTeams = function(_this, _propName){
        axios
        .get("https://api.sportradar.us/soccer-t3/eu/de/tournaments/sr:tournament:35/standings.json?" + this.apiKey)
        .then(response => {
            if(_this){
                //return state for componentDidMount
                var obj = {};
                obj[_propName] = response.data;
                console.log(response.data);
                return _this.setState(obj);
            }else{
                //return only data
                console.log(response.data);
                return response.data;
            }
        })
    };
    this.getTeamInfo = function(_teamid, _this, _propName){
        axios
        .get("https://api.sportradar.us/soccer-t3/eu/de/teams/"+_teamid+"/profile.json?" + this.apiKey)
        .then(response => {
            if(_this){
                //return state for componentDidMount
                var obj = {};
                if(_propName){
                    obj[_propName] = response.data;
                } else{
                    obj = response.data;
                }
                return _this.setState(obj);
            }else{
                //return only data
                return response.data;
            }
        });    
    };
    this.getPlayerInfo = function(_playerid, _this, _propName){
        axios
        .get("https://api.sportradar.us/soccer-t3/eu/de/players/"+_playerid+"/profile.json?" + this.apiKey)
        .then(response => {
            if(_this){
                //return state for componentDidMount
                var obj = {};
                if(_propName){
                    obj[_propName] = response.data;
                } else{
                    obj = response.data;
                    const currentSeason = obj.statistics.seasons.find(e => e.id == this.currentSeason);
                    obj.statistics = currentSeason.statistics;
                }
                return _this.setState(obj);
            }else{
                //return only data
                return response.data;
            }
        });    
    }
}