# Étape 1: Construire l'application React avec Node.js
FROM --platform=$BUILDPLATFORM node:14-alpine AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier le reste du code de l'application
COPY . .

# Construire l'application pour la production
RUN npm run build

# Étape 2: Servir l'application avec NGINX
FROM --platform=$TARGETPLATFORM nginx:alpine

# Copier les fichiers de build de React vers NGINX
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80 pour le serveur
EXPOSE 80

# Commande pour démarrer NGINX
CMD ["nginx", "-g", "daemon off;"]