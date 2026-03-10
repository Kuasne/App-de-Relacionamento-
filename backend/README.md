# Backend API — MVP

## Endpoints

- `GET /api/health`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/users/me` (Bearer token)
- `GET /api/users/discovery` (Bearer token)
- `POST /api/swipes` (Bearer token)
- `GET /api/matches` (Bearer token)
- `POST /api/safety/report` (Bearer token)

## Exemplo rápido

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"ana@demo.com","password":"123456","name":"Ana","age":28}'
```
