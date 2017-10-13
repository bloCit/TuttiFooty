var dataAPI = new function (){
    this.baseURL = "https://www.openligadb.de/api/";
    this.leagueId = "/bl1/2017";
    this.getCurrentMatchDay = function(_this, _propName){
        axios
        .get(this.baseURL + "getavailableteams" + this.leagueId)
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
    }
}