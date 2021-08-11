

//used to specify a request route to the server
//route is the route
//method isn't requried but defaults to get 
//data is any form data for the request
export interface RequestRoute {
    route:string,
    method?:string,
    data?:FormData, 
}

export default class API {
    public static baseURL:string = "http://127.0.0.1:8000"
    //generates url for given route
    //just concats it with baseURL
    //this way you only change the base url in one location
    // useful for debugging
    public static generateURL(api:string):string {
        return `${API.baseURL}${api}`
    }
    //just querys json from a specific route
    //route will always be in the form
    // {django server url}/api/{path}
    public static async queryJson(route:RequestRoute) {
        let path:string = `${API.baseURL}/api/${route.route}`
        let data:any = {}
        //sets data body and method
        if (route.method) {
            data.method = route.method
        }
        if(route.data) {
            data.body = route.data;
        }
        //gets json data from route and returns it
        let req = await fetch(path,data)
        if (req.status != 200) {
            return null;
        }
        let json = await req.json()
        return json
    }
    //generates url for home path
    public static home:string = API.generateURL("/")
}