# SkillsTestSolution

# ESERCIZIO

Creazione di una piccola web-app Angular che si occupi di presentazione e manipolazione di dati.

-------------------------------------------------------------------

# RISORSE

- interfaccia Person
- interfaccia Car

- array compilato "people"
- array compilato "cars"

-------------------------------------------------------------------

# OBIETTIVI

## STEP 1: Setup

Crazione del progetto tramite CLI.

**N.B.**: usare una versione >= 17.0.0

-------------------------------------------------------------------

## STEP 2: Reactive data flow

Servire i dati forniti (array people e array cars) in modo reattivo; il risultato dovrà fare in modo che qualsiasi componente/servizio possa sottoscriversi ai dati ed essere notificato ad ogni modifica.

-------------------------------------------------------------------

## STEP 3: Data visualization

Servire due rotte distinte:


- `/people`
- `/cars`

Le rotte dovranno essere raggiungibili tramite navbar.
(Obiettivo secondario: il componente navbar dovrà essere richiamato solo una volta in tutta l'applicazione)

In ogni rotta sarà presente una tabella che dovrà mostrare la lista completa di persone o auto.

-------------------------------------------------------------------

## STEP 4: Basic Filtering - People

Sulla lista di persone implementare una barra di ricerca che permetta di cercare le persone per nome.

**OBBLIGATORIO**:
- il componente della barra di ricerca dovrà essere riutilizzabile e non specifico per le persone

-------------------------------------------------------------------

## STEP 5: Basic Filtering - Cars

Sulla lista di auto implementare una barra di ricerca che permetta di cercare le auto per modello.

**OBBLIGATORIO**:
- utilizzare lo stesso componente "searchbar" dello step precedente

-------------------------------------------------------------------

## STEP 5: Sorting - People

Permettere di ordinare la lista di persone per nome, specificando se in ordine crescente o decrescente.

-------------------------------------------------------------------

## STEP 6: Sorting - Cars

Permettere di ordinare la lista di auto per modello, specificando se in ordine crescente o decrescente.

-------------------------------------------------------------------

## STEP 7: Inserting data - People

Permettere la creazione di una nuova persona.

**OBBLIGATORIO**:
- il componente di creazione della persona deve essere diverso da quello della lista di persone;
- la nuova persona aggiunta deve essere immediatamente visualizzabile sulla lista

-------------------------------------------------------------------

## STEP 8: Inserting data - Cars

Permettere la creazione di una nuova auto.

**OBBLIGATORIO**:
- il componente di creazione dell'auto deve essere diverso da quello della lista di auto;
- la nuova auto aggiunta deve essere immediatamente visualizzabile sulla lista

-------------------------------------------------------------------

## STEP 9: Advanced Filtering - People

Migliorare la barra di ricerca sulle persone in modo che con un unico input la ricerca comprenda nome, cognome, età, e indirizzo mail.

-------------------------------------------------------------------

## STEP 10: Advanced Filtering - Cars

Migliorare la barra di ricerca sulle auto in modo che con un unico input la ricerca comprenda marca, modello, colore, e anno.

-------------------------------------------------------------------

 
