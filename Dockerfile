FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NEXT_PUBLIC_API_URL=http://localhost:4200/api
EXPOSE 3000
CMD ["npm", "run", "dev"]