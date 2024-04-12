export class Article {
  id!: string | number;
  titolo!: string;
  testo!: string;
  categoria!: string;
  autore!: string | number; // (id autore => ricavare nomePenna);
  dataCreazione!: Date | string;
  dataModifica!: Date | string;
  constructor(article: Partial<Article>) {
    if (article.id) this.id = article.id;
    this.titolo = article.titolo ? article.titolo : '';
    this.testo = article.testo ? article.testo : '';
    this.categoria = article.categoria ? article.categoria : '';
    this.autore = article.autore ? article.autore : '';
    this.dataCreazione = article.dataCreazione ? article.dataCreazione : '';
    this.dataModifica = article.dataModifica ? article.dataModifica : '';
  }
}
