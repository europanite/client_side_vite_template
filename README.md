# [Frontend Vite Template](https://github.com/europanite/frontend_vite_template "Frontend Vite Template")

A Client Side Vite Template.

---

##  🚀 PlayGround
 [Frontend Vite Template](https://europanite.github.io/frontend_vite_template/)

---

## 🚀 Getting Started

### 1. Prerequisites
- [Docker Compose](https://docs.docker.com/compose/)

### 2. Build and start all services:

```bash

# Build the image
docker compose build

# Run the container
docker compose up

```

### 3. Test:
```bash
docker compose \
-f docker-compose.test.yml up \
--build --exit-code-from \
frontend_test
```

---

# License
- Apache License 2.0