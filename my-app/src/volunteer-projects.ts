export interface VolunteerProjects {
  name: string;
  description: string;
  image: string;
  links: { name: string; link: string }[];
}

export const volunteerProjects: VolunteerProjects[] = [
  {
    name: 'Deploying the Linc Detection Model with BentoML',
    image: 'images/linc_detection_.png',
    description: "I developed a scalable and efficient API for image annotation by integrating the Linc Detection model into the BentoML framework. To enhance flexibility, I replaced outdated methods with a generalized prediction approach and restructured the codebase to be modular, improving readability and maintainability. I implemented Pydantic models to ensure strong type validation in API requests and responses, providing robust input and output handling. To streamline operations, I automated artifact fetching from AWS S3 with a shell script, simplifying the deployment process. Additionally, I created detailed documentation covering installation, deployment, and usage, making it easier for users and developers to interact with the service. This work resulted in a production-ready machine learning service that was scalable, user-friendly, and demonstrated my ability to bridge data science and engineering to deliver practical, deployable solutions. Please review the pull request for the implementation.",
    links: [{ name: 'View the code', link: 'https://github.com/linc-lion/linc-detector-api/pull/4' }]
  },
  {
    name: 'Proof of Concept for Object Detection Model Deployment',
    image: 'images/linc_detection_webapp.png',
    description: "I developed the Linc Detector Webapp as a temporary, proof-of-concept solution to enable object detection in images and provide freelancers with a way to interact with the model. The backend was built using Flask and deployed with Gunicorn and AWS Elastic Beanstalk, while the frontend utilized React for a clean and responsive user experience, styled with SCSS and bundled with Parcel. This approach was intentionally not scalable but served as an interim platform to validate the usefulness of object detection for our workflow. The goal was to determine if pre-annotated images could help scientists achieve greater success with lion identification, which relies on a secondary ML service. I also collaborated with contractors to design a UI tailored for scientists, enabling them to process images and generate bounding box outputs efficiently. The project showcased my ability to rapidly prototype full-stack solutions, combining Python, Flask, React, and AWS, and set the stage for implementing a scalable, robust service using the BentoML framework. Please review the pull request for the implementation.",
    links: [{ name: 'View the code', link: 'https://github.com/linc-lion/linc-detector-webapp/pull/3/files' }]
  },
  {
    name: 'Automated Model Deployment for Scalable ML Services on AWS ECS Fargate',
    image: 'images/torch.png',
    description: "I automated the deployment process for the Linc Detection API, enabling scalable and efficient production deployment using GitHub Actions and AWS ECS Fargate. I configured GitHub Actions to handle building, pushing, and deploying Docker images, ensuring a streamlined CI/CD pipeline. By leveraging ECS Fargate, I established serverless container management for improved scalability and reduced operational overhead. To address compatibility challenges, I implemented Docker Buildx to handle ARM-based Docker image builds and optimized networking by configuring the awsvpc mode for better isolation and resource management. I also automated the retrieval of model artifacts from AWS S3 using a shell script, further simplifying deployment operations. Comprehensive documentation was provided to guide users and developers through setting up and running the deployment pipeline. This project highlights my expertise in DevOps and cloud deployment, demonstrating the ability to integrate automation, containerization, and scalable architecture to create reliable, production-ready systems for machine learning services. Please review the pull request for the implementation.",
    links: [
      { name: 'Pull Request 1', link: 'https://github.com/linc-lion/linc-detector-api/pull/8' },
      { name: 'Pull Request 2', link: 'https://github.com/linc-lion/linc-detector-api/pull/9' }
    ]
  },
  {
    name: 'Automated Resource Provisioning: Terraform and GHA for Environment Based Deployments',
    image: 'images/terraform.png',
    description: "I developed an automated solution for provisioning EC2 instances using Terraform, integrated with GitHub Actions to streamline deployment workflows. The project focused on implementing user data scripts tailored to staging and production environments, ensuring environment-specific setup operations are executed during instance launch. Leveraging Terraform, I defined infrastructure as code to standardize the provisioning process, while GitHub Actions handled the automation of deployments. The repository includes comprehensive configurations for EC2 instances, with user data scripts designed to reliably handle environment-specific setups. This approach enhanced deployment efficiency and ensured consistency across different environments. This project demonstrates my ability to implement modern DevOps practices, combining infrastructure as code with CI/CD automation to create robust, maintainable, and environment-specific provisioning pipelines.Please review the pull request for the implementation.",
    links: [{ name: 'View the code', link: 'https://github.com/linc-lion/linc-cv/pull/10' }]
  }
];
