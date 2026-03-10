# App de Relacionamento (estilo Tinder) — MVP

Este repositório contém uma base inicial para um aplicativo de relacionamento focado em:

- **Conexão real** (matching por interesses + proximidade)
- **Segurança** (base pronta para moderação e denúncias)
- **Escalabilidade** (API stateless + cache + WebSocket)
- **Evolução incremental** (começo simples, pronto para IA no futuro)

## Stack escolhida

- **Mobile**: React Native (Expo) ✅ (MVP implementado em `mobile/`)
- **Backend**: Node.js + Express + Socket.IO ✅
- **Banco de dados gratuito (longo prazo)**: **PostgreSQL** (recomendado com Supabase/Neon free tier)
- **Cache**: Redis (opcional no MVP)

## Funcionalidades implementadas no MVP

1. Cadastro/Login com JWT (backend)
2. Perfil do usuário (backend)
3. Feed de descoberta (backend)
4. Swipe (backend + front com gesto)
5. Match quando houver like mútuo (backend)
6. Chat em tempo real por match (backend com Socket.IO)
7. Endpoint de denúncia/bloqueio (backend)
8. Interface mobile de cards com curtir/passar e estado local

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
  App.js
  src/
    components/
    services/
    theme/
```

## Como executar

### Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

Servidor padrão: `http://localhost:3000`

### Mobile (Expo)

```bash
cd mobile
npm install
npm run start
```

## Próximos passos

- Conectar PostgreSQL real via Prisma
- Implementar autenticação OAuth (Google/Apple)
- Push notifications (Expo/Firebase)
- Moderação automatizada (texto/imagem)
- Ajustar algoritmo de ranking com telemetria
- Integrar front com os endpoints reais (`/users/discovery` e `/swipes`)
