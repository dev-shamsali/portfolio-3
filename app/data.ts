export type Service = {
  number: string;
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    number: "01",
    name: "Full-Stack Development",
    description:
      "Production MERN applications built with React, Next.js, Redux, and Node.js, wired to RESTful APIs and real-time features with Socket.io.",
  },
  {
    number: "02",
    name: "Cloud & DevOps",
    description:
      "AWS infrastructure (EC2, S3, Lambda, RDS), Docker and Kubernetes deployments, and CI/CD pipelines through Jenkins, GitHub Actions, and GitLab CI.",
  },
  {
    number: "03",
    name: "API & Backend Engineering",
    description:
      "Express.js microservices, JWT authentication, and payment integrations with Razorpay, Stripe, and PayPal built for scale and reliability.",
  },
  {
    number: "04",
    name: "Database Architecture",
    description:
      "MongoDB, MySQL, and Redis data layers with Firebase integrations, tuned for fast reads and consistent writes under real production load.",
  },
  {
    number: "05",
    name: "Monitoring & Site Reliability",
    description:
      "Nginx reverse proxies, PM2 process management, and Prometheus/Grafana/DataDog dashboards that keep applications fast, secure, and online.",
  },
];

export type Project = {
  number: string;
  name: string;
  category: string;
  url: string;
  images: [string, string, string];
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Arna Skincare",
    category: "Client",
    url: "https://arnaskincare.in",
    images: [
      "https://picsum.photos/seed/arna-skincare-storefront/1280/960",
      "https://picsum.photos/seed/arna-skincare-checkout/1280/960",
      "https://picsum.photos/seed/arna-skincare-dashboard/1280/1600",
    ],
  },
  {
    number: "02",
    name: "DevCodeHub",
    category: "Personal",
    url: "https://devcodehub.cloud",
    images: [
      "https://picsum.photos/seed/devcodehub-editor/1280/960",
      "https://picsum.photos/seed/devcodehub-collab/1280/960",
      "https://picsum.photos/seed/devcodehub-workspace/1280/1600",
    ],
  },
  {
    number: "03",
    name: "Production Cloud Infrastructure",
    category: "Client",
    url: "http://72.61.242.86",
    images: [
      "https://picsum.photos/seed/cloud-infra-nginx/1280/960",
      "https://picsum.photos/seed/cloud-infra-grafana/1280/960",
      "https://picsum.photos/seed/cloud-infra-pipeline/1280/1600",
    ],
  },
];

const marqueeAll = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

export const marqueeRow1 = marqueeAll.slice(0, 11);
export const marqueeRow2 = marqueeAll.slice(11, 21);
