var dataAPI = new function (){
    // https://github.com/OpenLigaDB/OpenLigaDB-Samples
    this.apiKey = "api_key=wpf3pxpf5dkjfarwd3rgwc2e"
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