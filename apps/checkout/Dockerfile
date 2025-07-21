# Dockerfile para o app Checkout
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
COPY apps/checkout/package.json ./apps/checkout/

# Instalar dependências
RUN pnpm install --frozen-lockfile

# Copiar código fonte
COPY . .

# Build dos packages necessários
RUN pnpm turbo run build --filter=@repo/ui --filter=@repo/shared

EXPOSE 3001

CMD ["pnpm", "dev:checkout"]

# Stage para produção
FROM base AS production

# Copiar arquivos necessários
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY packages/ ./packages/
COPY apps/checkout/ ./apps/checkout/

# Instalar apenas dependências de produção
RUN pnpm install --frozen-lockfile --prod

# Build da aplicação
RUN pnpm turbo run build --filter=@repo/checkout

EXPOSE 3001

CMD ["pnpm", "start:checkout"]