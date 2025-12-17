# TaskBoardPro

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Séquence 2 – Logique réactive du flux de données
### 1. Structure du flux
- Le service `TaskService` utilise un **BehaviorSubject** pour stocker et diffuser la liste des tâches.
- Le composant `Home` s’abonne à ce flux via `tasks$` et le **pipe async**.
### 2. Mise à jour des données
- La méthode `addTask()` ajoute une tâche puis appelle `next()` pour émettre la nouvelle liste.
- La méthode `removeTask()` supprime une tâche puis émet à nouveau la liste mise à jour.
- La vue est automatiquement réactualisée sans rechargement.
### 3. Points clés retenus
- Pas besoin d’appeler `getTasks()` à chaque fois : la donnée est **vivante**.
- `| async` gère l’abonnement et le désabonnement automatiquement.
- Le flux reste cohérent entre le service et la vue.

## Perso

### 1. Points Fort
- Angular est un framework principalement front qui permet (en complément d'éléments tels que RxJS) d'obtenir une page web entièrement dynamique. De plus, ce Framework permet une navigation entre les différentes pages de manière instantanée, sans chargement ou rechargement de page web.

- L'organisation interne du framework se décompose en `Component`créables avec la commande `ng g c "Nom du composant"`.



## Séquence 4 — Tests Unitaires Angular

### 📚 Ce que j'ai appris

#### 1. Pourquoi tester ?
Les tests permettent de contrôler et vérifier le bon fonctionnement de l’ensemble des fonctionnalités de notre projet de manière fiable, rapide et automatisée.
En une simple exécution, on peut vérifier si notre dernier ajustement ou modification n’a pas rendu inopérante une autre partie du code ou un autre module, par exemple parce que le nom d’une variable a été modifié, qu’un retour de fonction a changé de type, ou qu’une plage d’entrée a été décalée, etc.
Sans tests, le risque est de rendre inopérantes certaines fonctionnalités de notre code sans s’en rendre compte immédiatement, puis de ne le découvrir que plus tard, avec le risque potentiel d’engendrer des déconvenues pour les utilisateurs finaux.
Exemple concret : On crée une fonction et un ensemble de processus permettant d’ajouter une tâche. On modifie ensuite l’objet en lui ajoutant des champs et en modifiant le type de la durée, qui passe de float à int (exprimée en secondes). On valide les modifications et, ultérieurement, on se rend compte qu’un utilisateur bloque sa page avec une erreur inattendue apparaissant lors de l’enregistrement de la durée de la tâche.
En effet, la fonction chargée d’enregistrer la durée de la tâche sauvegarde le temps en incluant les millisecondes, alors que seules les secondes sont désormais admissibles dans le champ de l’objet. Ce problème n’aurait pas eu lieu si un test avait été rédigé afin de vérifier, dès le départ, tous les cas possibles d’enregistrement de la durée d’une tâche.

#### 2. Outils utilisés
- **Jasmine** : Framework de tests JavaScript utilisé pour écrire les tests unitaires. Il fournit une syntaxe claire et lisible pour décrire les comportements attendus du code (describe, it, expect…), ainsi que des outils pour créer des assertions, des espions (spies) et gérer les tests asynchrones.
- **Karma** : Test runner qui permet d’exécuter automatiquement les tests écrits avec Jasmine dans un ou plusieurs navigateurs. Il lance les tests, affiche les résultats, détecte les erreurs et peut relancer les tests à chaque modification du code afin de faciliter le développement et le débogage.
- **TestBed** : Utilitaire fourni par Angular permettant de configurer un environnement de test proche de celui de l’application réelle. Il permet d’initialiser des composants, d’injecter des dépendances, de simuler des services et de tester les composants et services Angular de manière isolée.

#### 3. Concepts clés maîtrisés
- **AAA Pattern** : Arrange, Act, Assert
- **Mocks** : Objets simulés utilisés pour remplacer des dépendances et tester un composant de manière isolée.
- **Spies** : Outils permettant de vérifier qu’une méthode a été appelée et de contrôler son comportement lors d’un test.
- **Fixture & detectChanges()** : La fixture permet d’accéder au composant testé, et detectChanges() déclenche la mise à jour du template pour refléter les changements de données.

######################### Important ##################################

Tests non fonctionnels, BUGs en cascade rencontrés lors de l'implémentation des tests et fdescribe non reconnu malgrès de nombreuses tentatives. Modifications à de nombreuses reprises de tsconfig.spec.json sans aboutissement, idem pour angular.json.

######################################################################

#### 4. Types de tests pratiqués
- ✅ Test d'une classe simple (sans Angular)
- ✅ Test d'un service
- ✅ Test d'un composant avec TestBed
- ✅ Test des @Input
- ✅ Test des @Output
- ✅ Test du DOM

#### 5. Erreurs courantes rencontrées
- Oublier `detectChanges()` : [conséquence]
- `No provider for...` : [solution]
- Tests qui dépendent les uns des autres : [solution]

#### 6. Commandes importantes
```bash
ng test                    # Lancer les tests
ng test --code-coverage 
ng test --include='**/*.spec.ts'  
```

#### 7. Code Coverage atteint
- Objectif : 70-80%
- Mon résultat : **XX%** sur TaskBoard Pro

#### 8. Difficultés rencontrées et solutions
| Difficulté | Solution trouvée |
|------------|------------------|
| [Exemple] | [Comment j'ai résolu] |

#### 9. Points à approfondir
- [ ] Tests d'intégration
- [ ] Tests E2E avec Cypress
- [ ] Mocking avancé pour HttpClient
- [ ] Tests de services asynchrones

### 🎯 Projet : Tests TaskBoard Pro

#### Tests implémentés
- [x] TaskService
- ✅ `addTask()`
- ✅ `deleteTask()`
- ✅ `getTasks()`
- [x] TaskHighlight Component
- ✅ Affichage du titre
- ✅ @Input title
- ✅ Rendu dans le DOM

#### Résultats
- **Tests réussis** : XX / XX
- **Code coverage** : XX%
- **Temps d'exécution** : XX secondes

### 💡 Réflexion personnelle
Il est intéressant de découvrir l’implémentation des tests unitaires dans un autre langage, personnellement peu maîtrisé. Sa logique et son implémentation restent cependant identiques à celles pratiquées en Python (expérience personnelle). Leur usage est extrêmement important et permet une productivité accrue, en empêchant — ou du moins en limitant fortement — les erreurs potentielles qui découlent d’une programmation par incrémentation, sur des projets souvent longs et s’étalant dans le temps.

### 📚 Ressources consultées
- [Angular Testing Guide](https://angular.io/guide/testing)
- [Jasmine Documentation](https://jasmine.github.io/)
- [Notes de cours - Séquence 4]

