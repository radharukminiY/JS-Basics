class geo{
    constructor(){
        this.lat = 48.85,
        this.long=2.35,

    }
}


class language extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name = name;
        this.country=country;
    }

    greet=()=>{
        return `Bonjour ${name} welcome to ${country}`
    }

    var French = new language('French','France')
    language {lat: 48.85, long: 2.35, name: "French", country: "France", greet: Bonjour French welcome to France}
