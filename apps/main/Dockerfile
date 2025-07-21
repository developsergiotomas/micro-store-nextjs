# Dockerfile para o app Main
FROM node:18-alpine AS base

# Instalar pnpm
RUN npm install -g pnpm@latest

WORKDIR /app

# Stage para desenvolvimento
FROM base AS development

# Copiar arquivos de configuração
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY packages/ui/package.json ./packages/ui/
COPY packages/shared/package.json ./packages/shared/
COPY apps/main/package.json ./apps/main/

# Instalar dependências
RUN pnpm install --frozen-lockfile

# Copiar código fonte
COPY . .

# Build dos packages necessários
RUN pnpm turbo run build --filter=@repo/ui --filter=@repo/shared

EXPOSE 3000

CMD ["pnpm", "dev:main"]

# Stage para produção
FROM base AS production

# Copiar arquivos necessários
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY packages/ ./packages/
COPY apps/main/ ./apps/main/

# Instalar apenas dependências de produção
RUN pnpm install --frozen-lockfile --prod

# Build da aplicação
RUN pnpm turbo run build --filter=@repo/main

EXPOSE 3000

CMD ["pnpm", "start:main"]