# Projet Auchan – Documentation et État d'Avancement

## 1. Présentation du projet

Développement d'une application Web e-commerce pour le centre commercial Auchan, permettant de consulter des produits et de gérer un panier d'achat dynamique.

## 2. Travail réalisé

### A. Interface et Design
- Création et organisation des éléments HTML.
- Utilisation de Tailwind CSS pour le design.
- Utilisation de Flexbox pour organiser les éléments.
- Personnalisation des couleurs et des styles.
- Gestion des classes CSS avec JavaScript.
- Travail sur les liens actifs du menu.

### B. Manipulation du DOM
- Sélection des éléments avec `getElementById()`.
- Utilisation de `querySelector()`.
- Gestion des événements avec `addEventListener()`.
- Affichage et masquage des éléments avec `classList`.
- Récupération des informations avec `dataset`.
- Création dynamique des éléments HTML.

### C. Gestion du panier
- Ouverture et fermeture du Popup.
- Récupération des informations des produits.
- Utilisation du Drag & Drop pour ajouter des produits.
- Création dynamique des cartes dans le panier.
- Affichage du nom, de l'image, de la description et du prix.
- Calcul du prix total.
- Suppression des produits du panier.

### D. Gestion des données
- Utilisation des tableaux et des objets JavaScript.
- Utilisation de `push()` pour ajouter des produits.
- Tentative de sauvegarde des données avec `sessionStorage`.
- Utilisation de `JSON.stringify()` et `JSON.parse()`.

## 3. Nouvelles connaissances acquises

Pendant le développement du projet, j'ai appris à :

- Manipuler le DOM avec JavaScript.
- Gérer plusieurs événements.
- Utiliser le système Drag & Drop.
- Récupérer les données HTML avec `dataset`.
- Créer des cartes dynamiquement.
- Manipuler les tableaux et les objets.
- Calculer automatiquement un total.
- Utiliser Tailwind CSS pour simplifier le style.

## 4. Difficultés rencontrées

Certaines fonctionnalités ont demandé plus de temps et de réflexion :

- Comprendre le fonctionnement du Drag & Drop.
- Récupérer correctement les informations des produits.
- Organiser les données dans un tableau d'objets.
- Gérer correctement la suppression des produits.
- Mettre à jour le prix total après chaque modification.
- Éviter les problèmes liés aux événements des éléments créés dynamiquement.
- Comprendre comment gérer les produits en double et leurs quantités.
- Comprendre le fonctionnement du stockage des données.

## 5. Fonctionnalités non encore réalisées

Certaines fonctionnalités du cahier des charges n'ont pas encore été réalisées :

- Chargement des produits avec Fetch API depuis `data.json`.
- Recherche des produits.
- Filtrage par catégorie.
- Tri des produits.
- Pagination.
- Affichage Grille / Liste.
- Gestion des doublons et des quantités dans le panier.
- Bouton d'ajout manuel des produits au panier.
- Gestion complète des quantités.
- Modules JavaScript (`import` / `export`).
- Utilisation des méthodes `map()`, `filter()`, `find()`, `some()` et `reduce()`.
- Validation des formulaires avec Regex.
- Utilisation de l'API RandomUser.
- Création du tableau de bord administrateur.
- CRUD des produits : ajouter, afficher, modifier et supprimer.
- Gestion des prix selon les tailles.
- Génération d'un devis PDF.
- Mode sombre / mode clair.
- Déploiement du site.

**Remarque :** La sauvegarde des données avec LocalStorage et le Drag & Drop ont déjà été réalisés. La gestion de SessionStorage pour la page Contact reste à faire.

## 6. État actuel du projet

Actuellement, le projet est principalement concentré sur la création de l'interface et la gestion du panier.

Les fonctionnalités déjà réalisées sont :

- Création de l'interface avec HTML et Tailwind CSS.
- Manipulation du DOM avec JavaScript.
- Ouverture et fermeture du Popup du panier.
- Récupération des informations des produits.
- Ajout des produits au panier avec Drag & Drop.
- Création dynamique des cartes des produits.
- Sauvegarde et récupération des données avec LocalStorage.

Certaines fonctionnalités restent à améliorer, notamment la gestion des produits en double, l'incrémentation des quantités et l'ajout manuel des produits.

Les prochaines étapes seront de terminer ces fonctionnalités, puis de passer progressivement aux autres parties du cahier des charges.

## 7. Conclusion

Ce projet m'a permis de renforcer mes connaissances en HTML, Tailwind CSS et JavaScript, particulièrement dans la manipulation du DOM, la gestion des événements et la création d'interactions dynamiques.

Il m'a également permis de rencontrer des difficultés techniques et de développer ma capacité à résoudre des problèmes progressivement.
