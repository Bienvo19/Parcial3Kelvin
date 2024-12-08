# Usa una imagen de Nginx
FROM nginx:alpine
# Copia el archivo index.html a la carpeta pública de Nginx
COPY index.html /usr/share/nginx/html/index.html