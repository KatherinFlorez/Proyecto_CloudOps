# Define la base del contenedor. Servidor:SistemaOperativo
FROM nginx:alpine

# Transfiere todo Mi Proyecto (App_Web) a la ruta interna del Servidor Nginx
COPY ./App_Web /usr/share/nginx/html 
