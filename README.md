# Kubernetes Demo: NodeJS Backend and Frontend Deployment

This repository demonstrates a simple full-stack application (NodeJS backend + frontend) deployed to Kubernetes. It’s designed to help beginners understand Kubernetes basics through hands-on experience with containers, deployments, and services.

---

## 📁 Project Structure

```
kubernetes-demo/
├── backend/
│   ├── Dockerfile
│   └── [backend application files]
├── webapp/
│   ├── Dockerfile
│   └── [frontend application files]
├── backend.yaml
├── webapp.yaml
└── README.md
```

- **backend/**: NodeJs backend service code and Dockerfile.
- **webapp/**: NodeJS frontend service code and Dockerfile.
- **backend.yaml**: Kubernetes Deployment and Service for backend.
- **webapp.yaml**: Kubernetes Deployment and Service for frontend.

---

## 🚀 Prerequisites

Ensure you have:

- Docker installed
- Access to a Kubernetes cluster (e.g., via Rancher, EKS, GKE, AKS, etc.)
- `kubectl` configured to communicate with your cluster
- A container registry (Docker Hub, GitHub Container Registry, etc.)

---

## 🛠 Build & Push Docker Images

### 1. Clone the Repository

```bash
git clone https://github.com/niranRameshPeiris/kubernetes-demo.git
cd kubernetes-demo
```

### 2. Build Docker Images

**Backend:**

```bash
cd backend
docker build -t your-registry/backend:latest .
```

**Frontend:**

```bash
cd ../webapp
docker build -t your-registry/webapp:latest .
```

> Replace `your-registry` with your actual registry name (e.g., `docker.io/yourusername`).

### 3. Push Images to Container Registry

```bash
docker push your-registry/backend:latest
docker push your-registry/webapp:latest
```

---

## ☸️ Deploy to Kubernetes

### 1. Update Image References

In `backend.yaml` and `webapp.yaml`, update the `image` field:

```yaml
image: your-registry/backend:latest
```

```yaml
image: your-registry/webapp:latest
```

### 2. Apply the Kubernetes Manifests

```bash
kubectl apply -f backend.yaml
kubectl apply -f webapp.yaml
```

### 3. Verify Resources

```bash
kubectl get deployments
kubectl get services
```

---

## 🌐 Accessing the Application

Depending on your cluster setup, expose the `webapp` service via one of the following:

- **LoadBalancer**: For cloud/Rancher-managed clusters.
- **Ingress**: Use an Ingress controller (e.g., NGINX).
- **Port Forwarding (for development)**:

```bash
kubectl port-forward service/webapp-service 3000:3000
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

> Make sure the frontend points to the correct backend URL (e.g., `http://backend-service:PORT`).

---

## ✅ Summary

- Full-stack Node.js app deployed on Kubernetes.
- Works with any Kubernetes cluster (Rancher, cloud, on-prem).
- Easily extensible with Ingress, monitoring, CI/CD, etc.

---

Feel free to contribute or fork this project for your own use!