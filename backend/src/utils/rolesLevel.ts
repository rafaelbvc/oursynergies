export const rolesLevel = (role: string) => {
    switch (role){
        case "admin":
            return 3;
        case "member":
            return 2;
        case "viewer":
            return 1
        default: 1    
    }
}