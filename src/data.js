var dataAPI = new function (){
    // https://github.com/OpenLigaDB/OpenLigaDB-Samples
    this.baseURL = "https://www.openligadb.de/api/";
    this.leagueId = "/bl1";
    this.getTeams = function(_this, _propName){
        axios
        .get(this.baseURL + "getavailableteams" + this.leagueId + "/2017")
        .then(response => {
            if(_this){
                //return state for componentDidMount
                var obj = {};
                obj[_propName] = response.data;
                return _this.setState(obj);
            }else{
                //return only data
                return response.data;
            }
        })
    };
    this.getCurrentMatchDay = function(_this, _propName){
        axios
        .get(this.baseURL + "getmatchdata" + this.leagueId)
        .then(response => {
            if(_this){
                //return state for componentDidMount
                var obj = {};
                obj[_propName] = response.data;
                return _this.setState(obj);
            }else{
                //return only data
                return response.data;
            }
        });    
    };
    //CORS
    this.getTransfermarkt = function(){
        axios.get('https://api.sportradar.us/soccer-t3/eu/de/tournaments/sr:tournament:35/standings.json?api_key=wpf3pxpf5dkjfarwd3rgwc2e')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
}