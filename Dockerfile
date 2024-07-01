# Utilisez une image de base officielle de Node.js
FROM node:14-alpine

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le fichier package.json et le fichier package-lock.json (s'ils existent)
COPY package*.json ./

# Installez les dépendances de l'application
RUN npm install

# Copiez tout le reste du code de l'application dans le conteneur
COPY . .

# Construisez l'application pour la production
RUN npm run build

# Utilisez une image de serveur Nginx pour servir les fichiers statiques
FROM nginx:alpine

# Copiez les fichiers de build de React dans le répertoire de Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Exposez le port sur lequel l'application va tourner
EXPOSE 3000

# Commande pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
