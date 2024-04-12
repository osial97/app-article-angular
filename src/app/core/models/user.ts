export type UserRole = 'Lettore' | 'Scrittore' | 'Admin';

export class User {
  id!: string | number;
  username!: string;
  password!: string;
  nomePenna?: string; //(presente per 'Scrittore')
  ruolo!: UserRole;
  constructor(user: Partial<User>) {
    if (user.id) this.id = user.id;
    this.username = user.username ? user.username : '';
    this.password = user.password ? user.password : '';
    this.nomePenna = user.nomePenna ? user.nomePenna : '';
    this.ruolo = user.ruolo ? user.ruolo : 'Lettore';
  }
}
