# Mobile (React Native / Expo)

Agora este diretório já contém um front funcional de MVP com:

- Card de perfil com gesto de swipe (esquerda/direita)
- Botões de ação para curtir/passar
- Estado local de contagem de likes/passes
- Dados mockados prontos para trocar por API

## Rodar localmente

```bash
cd mobile
npm install
npm run start
```

## Estrutura

```text
mobile/
  App.js
  src/
    components/
      SwipeCard.js
      ActionButtons.js
    services/
      mockCandidates.js
    theme/
      theme.js
```

## Próxima integração com backend

Trocar `mockCandidates` por `GET /api/users/discovery` e enviar ações para `POST /api/swipes`.
