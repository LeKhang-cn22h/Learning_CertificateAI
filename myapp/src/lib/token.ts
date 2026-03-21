const ACCESS_KEY="certai_access_token"
const REFRESH_KEY="certai_refresh_token"

export const tokenStorage={
    getAccess():string | null {
        if(typeof window ==="undefined") return null
        return localStorage.getItem(ACCESS_KEY)
    },
    getRefresh(): string | null{
        if (typeof window === "undefined") return null
        return localStorage.getItem(REFRESH_KEY)
    },
    set(access:string, refresh:string):void {
        if(typeof window === "undefined") return
        localStorage.setItem(ACCESS_KEY,access)
        localStorage.setItem(REFRESH_KEY,refresh)
    },
    clear():void{
        if(typeof window ===  "undefined") return
        localStorage.removeItem(ACCESS_KEY)
        localStorage.removeItem(REFRESH_KEY)
    },
    hasToken():boolean{
        if(typeof window ==="undefined") return false
        return !!localStorage.getItem(ACCESS_KEY)
    },
}
