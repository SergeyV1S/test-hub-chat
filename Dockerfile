FROM node:22.12.0-alpine AS builder

WORKDIR /var/www

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:22.12.0-alpine

WORKDIR /var/www

COPY --from=builder /var/www/node_modules ./node_modules
COPY --from=builder /var/www/dist ./dist

COPY package.json yarn.lock ./

ENV BASE_API_URL="${BASE_API_URL}"
ENV BASE_YANDEX_API_URL="${BASE_YANDEX_API_URL}"

ENV YANDEX_REDIRECT_URI="${YANDEX_REDIRECT_URI}"
ENV YANDEX_CLIENT_ID="${YANDEX_CLIENT_ID}"
ENV YANDEX_CLIENT_SECRET="${YANDEX_CLIENT_SECRET}"

EXPOSE 5173

CMD ["yarn", "preview", "--host", "0.0.0.0", "--port", "5173"]
