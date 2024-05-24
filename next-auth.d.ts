import 'auth';

declare module 'auth' {
    interface AdapterUser{
        userGames:string [],
    }
  interface AdapterSession {
    userGames: string [];
  }
  
  interface Session {
    user: {
      userGames: string [];
    } & Session['user'];
  }
}