// Descrizione:
// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// Genero in un array 5 numeri casuali invocando una funzione apposita
    // Creazione array randomNumbers
    // Con una funzione creo in un loop dei numeri random 
    // Per ogni numero SE non è già presente nell'array ce lo pusho 
    // Continuo FINCHE' non arrivo a 5 elementi nell'array

// Creo un alert in cui si visualizzeranno per 30 secondi i numeri casuali
    // Creo una funzione setTimeout con un tempo d'attesa di 30000 ms e richiamo in una funzione anonima un alert
    // Inserisco nell'alert l'array con i 5 numeri generati casualmente

// Chiedo all'utente per 5 volte di seguito di inserire in un prompt i numeri che ha visualizzato precedentemente
    // Creo un array userNumbers
    // In un loop chiedo all'utente per 5 volte di inserire un numero provando a trovare corrispondenza con quelli visualizzati nel precedente alert
    // Per ogni numero:
        // Lo pusho nell'array userNumbers

// In un alert si visualizzeranno quanti e quali numeri sono stati individuati
    // Creo un array rightNumbers
    // Con un ciclo for scorro i numeri inseriti dall'utente -> array userNumbers
    // Per ogni numero:
        // SE è incluso nell'array randomNumbers ALLORA lo pusho nell'array righNumbers
    // Creo un alert in cui stamperò quanti (rightNumbers.length) e quali (rightNumbers) numeri sono stati individuati