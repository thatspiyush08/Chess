import { WebSocket } from "ws";



export class GameManager{
    private game:Game[];
    private pendingUser:WebSocket;
    private users:WebSocket[];
    constructor(){
        this.game=[]; 
    }
    adduser(socket:WebSocket){
        this.users.push(socket);

    }
    removeuser(socket: WebSocket){
        this.users=this.users.filter(user=>user!==socket);
    }
    handlemessage(){

    }
}