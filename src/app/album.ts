// Classe Album
export class Album {

    id !: string; 
    ref !: string; 
    name !: string; 
    title !: string; 
    description !: string; 
    duration !: number; 
    status !: string; 
    url? : string; 
    tags? : Array<String>; 
    like? : string
    
}


// Classe list 
export class List {
    id !: string;
    list !: string[];
}