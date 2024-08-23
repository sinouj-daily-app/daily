import { UrlService } from "./UrlService.ts";

export class ApiService {
    urlService = new UrlService()
    
    public get (path: string, params?: string) {
        return fetch(this.urlService.sanitizeUrl(`http://localhost:1337/api/${path}?${params ?? ''}`), {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + import.meta.env.VITE_API_TOKEN
            }
        })
            .then(res => res.json())
    }
}