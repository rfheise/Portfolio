

export interface RequestRoute {
    route:string,
    method?:string,
    data?:FormData, 
}

export default class API {
    public static baseURL:string = "http://127.0.0.1:8000"
    public static generateURL(api:string):string {
        return `${API.baseURL}${api}`
    }
    public static async queryJson(route:RequestRoute) {
        let path:string = `${API.baseURL}/api/${route.route}`
        let data:any = {}
        if (route.method) {
            data.method = route.method
        }
        if(route.data) {
            data.body = route.data;
        }
        let req = fetch(path,data)
        let json = await (await req).json()
        return json
    }
    public static home:string = API.generateURL("/")
}