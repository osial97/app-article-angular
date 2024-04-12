Traccia esercizio:

Creare un applicativo che abbia le seguenti viste / funzionalità legate alla visualizzazione, aggiunta, modifica di articoli da parte di utenti registrati a sistema.

1. Pagina di visualizzazione cards riassuntive (titolo, prime righe di testo e data) dei 3 articoli più recenti per data di modifica e creazione fra TUTTE le categorie
2. Pagina/e di visualizzazione cards riassuntive (titolo, prime righe di testo e data) dei 3 articoli più recenti per data di modifica e creazione per SINGOLA categoria
3. Pagina di dettaglio del singolo articolo, raggiungibile cliccando su card riassuntiva o titolo di una card riassuntiva
4. Pagina di log in e sign in (a nuovo utente di default ruolo 'Lettore' e nessun nomePenna)
5. Pagina di visualizzazione informazioni utente (username, password, nomePenna, ruolo)
6. Pagina di modifica informazioni utente da parte di utente stesso (modificabili username, password e nomePenna se presente)
7. Pagina di aggiunta articolo per utenti con ruolo 'Scrittore'
8. Pagina di modifica articolo per utenti con ruolo 'Scrittore' per PROPRI articoli pubblicati
9. Pagina di visualizzazione lista utenti accessibile solo ad 'Admin'
10. Pagina di modifica ruolo utenti accessibile solo ad 'Admin'
    Plus:

- Paginazione per le pagine di visualizzazione delle cards riassuntive degli articoli, per vedere articoli passati
- Utente (qualsiasi ruolo) può salvare articoli "preferiti" e visualizzare questa lista in una sezione nella propria pagina di profilo
- Utente (qualsiasi ruolo) può lasciare un commento nella pagina di dettaglio di un articolo (username, data, testo commento)

Articolo {
id: string | number;
titolo: string;
testo: string;
categoria: string;
autore: string (id autore => ricavare nomePenna);
dataCreazione: Date | string;
dataModifica?: Date | string;
}
User {
id: string | number;
username: string;
password: string;
nomePenna?: string; (presente per 'Scrittore')
ruolo: 'Lettore' | 'Scrittore' | 'Admin';
}
