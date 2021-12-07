import { Tema } from "./Tema";
import { User } from "./Usuario";

export class Postagem{
    public id: number;
    public texto: string;
    public titulo: string;
    public date: Date;
    public usuario: User;
    public tema: Tema; 
}