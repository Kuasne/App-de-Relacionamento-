# App de Relacionamento (estilo Tinder) — MVP

Este repositório contém uma base inicial para um aplicativo de relacionamento focado em:

- **Conexão real** (matching por interesses + proximidade)
- **Segurança** (base pronta para moderação e denúncias)
- **Escalabilidade** (API stateless + cache + WebSocket)
- **Evolução incremental** (começo simples, pronto para IA no futuro)

## Stack escolhida

- **Mobile**: React Native (Expo)
- **Backend**: Node.js + Express + Socket.IO
- **Banco de dados gratuito (longo prazo)**: **PostgreSQL** (recomendado com Supabase/Neon free tier)
- **Cache**: Redis (opcional no MVP)

## Funcionalidades do MVP

1. Cadastro/Login com JWT
2. Perfil do usuário (bio, idade, interesses, localização)
3. Feed de descoberta (mockado inicialmente)
4. Swipe (like/pass)
5. Match quando houver like mútuo
6. Chat em tempo real após match
7. Endpoint de denúncia/bloqueio (estrutura inicial)

## Estrutura

```text
backend/
  src/
    config/
    controllers/
    middleware/
    routes/
    services/
    utils/
mobile/
```

## Como executar backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

Servidor padrão: `http://localhost:3000`

## Próximos passos

- Conectar PostgreSQL real via Prisma
- Implementar autenticação OAuth (Google/Apple)
- Push notifications (Expo/Firebase)
- Moderação automatizada (texto/imagem)
- Ajustar algoritmo de ranking com telemetria
