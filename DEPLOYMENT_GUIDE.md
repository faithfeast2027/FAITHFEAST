# Faith Feast Deployment Guide

This guide walks through deploying Faith Feast to production.

## Prerequisites

- Node.js 18+
- PostgreSQL 13+
- Git
- Docker (optional, for containerized deployment)
- Access to your chosen hosting platform

## Local Development

### 1. Setup Local Environment

```bash
# Clone the repository
git clone https://github.com/faithfeast2027/FAITHFEAST.git
cd FAITHFEAST

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Edit .env.local with your local settings
nano .env.local
```

### 2. Setup Local Database

```bash
# Using Docker Compose (recommended)
docker-compose up -d db

# Wait for database to be ready
sleep 5

# Connect to database and run schema
psql -h localhost -U faithfeast -d faithfeast < db/schema.sql

# Or run migrations
npm run migrate:dev
```

### 3. Run Development Server

```bash
npm run dev

# Open http://localhost:3000
```

## Production Deployment Options

### Option A: Deploy to Vercel (Recommended for Next.js)

Vercel is the recommended platform for Next.js applications.

#### Steps:

1. **Push code to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect repository to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Select the `faithfeast2027/FAITHFEAST` repo

3. **Configure environment variables**
   - In Vercel dashboard, go to Settings > Environment Variables
   - Add all variables from `.env.example`:
     ```
     DATABASE_URL=<your-production-database-url>
     JWT_SECRET=<generate-random-secret>
     NEXT_PUBLIC_APP_URL=https://yourdomain.com
     // ... other variables
     ```

4. **Configure database**
   - Provision PostgreSQL (AWS RDS, Supabase, Railway, etc.)
   - Run migrations:
     ```bash
     # Connect to your production database
     psql <DATABASE_URL> < db/schema.sql
     ```

5. **Deploy**
   - Every push to main branch will automatically deploy
   - Or click "Deploy" in Vercel dashboard

### Option B: Deploy to AWS (ECS/Fargate)

#### Prerequisites:
- AWS account
- AWS CLI configured
- ECR repository created

#### Steps:

1. **Build Docker image**
   ```bash
   # Build the image
   docker build -t faithfeast:latest .

   # Tag for ECR
   docker tag faithfeast:latest 123456789.dkr.ecr.us-east-1.amazonaws.com/faithfeast:latest

   # Push to ECR
   aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 123456789.dkr.ecr.us-east-1.amazonaws.com
   docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/faithfeast:latest
   ```

2. **Create RDS Database**
   ```bash
   # Using AWS CLI or Console
   # Save connection string to Parameter Store
   aws ssm put-parameter --name /faithfeast/DATABASE_URL --value "<connection-string>" --type SecureString
   ```

3. **Create ECS Cluster and Task Definition**
   - Create ECS cluster
   - Create task definition with Docker image
   - Set environment variables from Parameter Store
   - Configure CloudWatch logging

4. **Create ECS Service**
   - Create service in cluster
   - Configure load balancer (ALB/NLB)
   - Set desired task count
   - Enable auto-scaling

5. **Setup API Gateway (optional)**
   - Configure custom domain
   - Setup SSL/TLS certificate
   - Configure DNS

### Option C: Deploy to Railway

Railway offers simple deployment for web apps.

#### Steps:

1. **Connect repository**
   - Go to https://railway.app
   - Click "New Project"
   - Import GitHub repository

2. **Add PostgreSQL plugin**
   - Click "Add Plugin"
   - Select "PostgreSQL"
   - Railway will auto-populate DATABASE_URL

3. **Configure environment**
   - Add variables in "Variables" tab:
     ```
     JWT_SECRET=<generate-random-secret>
     NEXT_PUBLIC_APP_URL=https://yourdomain.railway.app
     NODE_ENV=production
     // ... other variables
     ```

4. **Deploy**
   - Railway automatically deploys on push
   - Monitor logs in dashboard

### Option D: Deploy to DigitalOcean App Platform

#### Steps:

1. **Connect GitHub repository**
   - Go to https://cloud.digitalocean.com/apps
   - Click "Create App"
   - Connect your GitHub account
   - Select `faithfeast2027/FAITHFEAST` repository

2. **Configure app**
   - Set build command: `npm ci && npm run build`
   - Set run command: `npm start`
   - Configure HTTP port: 3000

3. **Add database**
   - Click "Database" component
   - Select PostgreSQL
   - DigitalOcean creates managed PostgreSQL instance

4. **Set environment variables**
   - Add all required variables
   - Database connection string is auto-populated

5. **Deploy**
   - Review configuration
   - Click "Deploy App"

### Option E: Self-Hosted with Docker

For more control, deploy to your own server.

#### Prerequisites:
- Linux server (Ubuntu 20.04+)
- Docker & Docker Compose installed
- Domain with DNS configured

#### Steps:

1. **Prepare server**
   ```bash
   # SSH into server
   ssh user@your-server.com

   # Create app directory
   mkdir -p /opt/faithfeast
   cd /opt/faithfeast

   # Clone repository
   git clone https://github.com/faithfeast2027/FAITHFEAST.git .
   ```

2. **Setup environment**
   ```bash
   # Create .env file
   cp .env.example .env

   # Edit with production values
   nano .env
   ```

3. **Deploy with Docker Compose**
   ```bash
   # Start services
   docker-compose up -d

   # Check status
   docker-compose ps

   # View logs
   docker-compose logs -f app
   ```

4. **Setup reverse proxy (Nginx)**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

6. **Setup auto-updates**
   ```bash
   # Create update script
   cat > /opt/faithfeast/update.sh << 'EOF'
   #!/bin/bash
   cd /opt/faithfeast
   git pull origin main
   docker-compose build
   docker-compose up -d
   EOF

   chmod +x /opt/faithfeast/update.sh

   # Add to crontab for automatic updates
   (crontab -l 2>/dev/null; echo "0 2 * * * /opt/faithfeast/update.sh") | crontab -
   ```

## Post-Deployment Checklist

- [ ] Access application at production URL
- [ ] Verify all pages load correctly
- [ ] Test user authentication (signup, login, logout)
- [ ] Test vendor functionality (create drops)
- [ ] Test driver functionality (view earnings)
- [ ] Verify PWA install works on mobile
- [ ] Check application logs for errors
- [ ] Verify database backups are running
- [ ] Setup monitoring and alerting
- [ ] Configure error tracking (Sentry)
- [ ] Setup performance monitoring
- [ ] Test email notifications (if applicable)

## Monitoring & Maintenance

### Health Checks

```bash
# Check application health
curl https://yourdomain.com/api/health

# Check database
psql <DATABASE_URL> -c "SELECT NOW();"
```

### Logs

- **Vercel**: Dashboard > Deployments > Runtime logs
- **AWS**: CloudWatch > Log Groups
- **Railway**: Railway dashboard > Logs
- **DigitalOcean**: App Platform > App > Logs
- **Self-hosted**: `docker-compose logs -f`

### Backups

```bash
# PostgreSQL backup
pg_dump <DATABASE_URL> > backup.sql

# Restore from backup
psql <DATABASE_URL> < backup.sql
```

### Scaling

- **Vercel**: Auto-scaling included
- **AWS**: Configure ECS auto-scaling
- **Railway**: Adjust CPU/Memory
- **DigitalOcean**: Scale app tier
- **Self-hosted**: Add more server resources or load balancers

## Troubleshooting

### Application won't start
```bash
# Check logs
docker-compose logs app

# Rebuild
docker-compose build --no-cache

# Restart
docker-compose restart
```

### Database connection errors
```bash
# Test connection
psql <DATABASE_URL> -c "SELECT NOW();"

# Check environment variables
echo $DATABASE_URL
```

### Build failures
```bash
# Clear cache
npm cache clean --force
rm -rf node_modules .next
npm install
npm run build
```

### Performance issues
- Check database query performance
- Monitor memory/CPU usage
- Review CloudWatch/platform metrics
- Enable caching headers
- Optimize images

## Support

For issues, create an issue in the GitHub repository:
https://github.com/faithfeast2027/FAITHFEAST/issues
