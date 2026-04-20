# Portfolio Website 🚀

A high-performance, responsive portfolio built with **Next.js**, deployed on **AWS**, and managed through an automated **CI/CD pipeline**.

## 🛠 Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (Static Site Generation)
* **Hosting:** [Amazon S3](https://aws.amazon.com/s3/)
* **CDN:** [Amazon CloudFront](https://aws.amazon.com/cloudfront/) (with Origin Access Control)
* **DNS & Security:** [Cloudflare](https://www.cloudflare.com/)
* **Automation:** [GitHub Actions](https://github.com/features/actions)

## 🏗 Architecture

The architecture follows industry best practices for security and speed:
1.  **Cloudflare** handles DNS and acts as the edge security layer.
2.  **Amazon CloudFront** serves content globally via edge locations.
3.  **S3 Bucket** acts as the origin, restricted only to CloudFront via **OAC (Origin Access Control)**.
4.  **SSL/TLS** certificates ensure all traffic is encrypted via HTTPS.



## 🚀 CI/CD Pipeline

This project is fully automated. Every `push` to the `main` branch triggers a GitHub Action that:
1.  Installs dependencies and runs a production build.
2.  Syncs the static output to the **S3 Bucket**.
3.  Invalidates the **CloudFront Cache** to ensure global updates within seconds.

## 📂 Local Development

```bash
npm install
npm run dev
