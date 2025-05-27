export interface Blog {
  name: string;
  description: string;
  image: string;
  links: { name: string; link: string }[];
}

export const blogs: Blog[] = [
  {
    name: "Getting Started with AWS CDK: Deploying a Serverless Lambda Function with API Gateway",
    description: `
      <h2>Introduction</h2>
      <p>In this blog post, I will walk you through the steps to get up and running quickly with AWS Cloud Development Kit (CDK) to deploy a serverless Lambda function with an API Gateway endpoint. Assuming you have AWS account setup, This guide will help you understand the basics of CDK and how to leverage it for deploying serverless applications.</p>

      <h2>Prerequisites</h2>
      <ul>
        <li>Node.js installed (version specified in <code>.nvmrc</code>)</li>
        <li>AWS Account</li>
        <li>AWS CLI configured</li>
        <li>AWS CDK installed globally (<code>npm install -g aws-cdk</code>)</li>
      </ul>

      <h2>Step 1: Initialize the CDK Project</h2>
      <p>First, create a new directory for your CDK project and navigate into it. Then, initialize a new CDK project.</p>

      <pre><code>bash
      mkdir my-cdk-app
      cd my-cdk-app
      cdk init app --language javascript
      </code></pre>

      <h2>Step 2: Define the Lambda Function</h2>
      <p>Create a new Lambda function in the <code>lib</code> directory. For example, create a file named <code>lambda.js</code>:</p>
      <pre><code>javascript
      exports.handler = async function(event) {
        console.log("request:", JSON.stringify(event, undefined, 2));
        return {
          statusCode: 200,
          headers: { "Content-Type": "text/plain" },
          body: "Hello, CDK! You've hit ${'${event.path}'}\n"
        };
      };
      </code></pre>

      <h2>Step 3: Create the CDK Stack</h2>
      <p>Modify the <code>lib/cdk-stack.js</code> file to include the Lambda function and an API Gateway to trigger it.</p>
      <pre><code>javascript
      const cdk = require('aws-cdk-lib');
      const lambda = require('aws-cdk-lib/aws-lambda');
      const apigateway = require('aws-cdk-lib/aws-apigateway');

      class ApiGatewayStack extends cdk.Stack {
        constructor(scope, id, props) {
          super(scope, id, props);

          // Define the Lambda function
          const myLambda = new lambda.Function(this, 'MyLambda', {
            runtime: lambda.Runtime.NODEJS_20_X,
            code: lambda.Code.fromAsset('lib'),
            handler: 'lambda.handler'
          });

          // Define the API Gateway
          new apigateway.LambdaRestApi(this, 'Endpoint', {
            handler: myLambda
          });
        }
      }

      module.exports = { ApiGatewayStack };
      </code></pre>

      <h2>Step 4: Configure the CDK App</h2>
      <p>Modify the <code>bin/cdk-app.js</code> file to configure the CDK app and stack.</p>
      <pre><code>javascript
      // #!/usr/bin/env node
      const cdk = require('aws-cdk-lib');
      const { ApiGatewayStack } = require('../lib/cdk-stack');

      const env = {
        account: process.env.AWS_ACCOUNT,
        region: process.env.DEPLOY_REGION
      };

      const STACK_NAME = 'api-gateway-stack';
      const cdkApp = new cdk.App();

      new ApiGatewayStack(cdkApp, STACK_NAME, {
        synthesizer: new cdk.CliCredentialsStackSynthesizer(),
        env
      });
      </code></pre>

      <h2>Step 5: Deploy the Stack</h2>
      <p>Deploy the stack using the CDK CLI.</p>
      <pre><code>bash
      cdk deploy
      </code></pre>

      <h2>Step 6: Optional: Schedule Lambda Invocation using GitHub Actions</h2>
      <p>To use the GitHub Actions (GHA) scheduler function to call the Lambda on a schedule, you can set up a workflow file in your repository. This allows you to run your Lambda function on a specified schedule without the need for additional infrastructure like cron jobs in a Kubernetes cluster. Below is an example of how to set this up:</p>
      <pre><code>yaml
      name: Scheduled Lambda Invocation
      on:
        workflow_dispatch:
        schedule:
          - cron: '0 21 * * 2'

      jobs:
        invoke-lambda:
          runs-on: ubuntu-latest
          steps:
          - uses: actions/checkout@v2
          - name: Login to AWS
            uses: aws-actions/configure-aws-credentials@v1
            with:
              role-to-assume: "role-to-assume"
              role-skip-session-tagging: true
              role-duration-seconds: 3600
              aws-region: us-west-2
          - name: Setup Node
            uses: actions/setup-node@v2
            with:
              node-version-file: .nvmrc
              cache: 'npm'
              cache-dependency-path: package-lock.json
          - name: Install dependencies
            run: npm ci
          - name: Invoke Lambda
            run: |
              aws lambda invoke \
                --function-name my-lambda-function \
                --payload '{}' \
                response.json
          - name: Notify slack on success
            if: success()
            uses: rtCamp/action-slack-notify@v2
            with:
              status: 'success'
              message: "Workflow succeeded"
              webhook-url: 'SLACK_WEBHOOK_URL'
          - name: Notify slack on failure
            if: failure()
            uses: rtCamp/action-slack-notify@v2
            with:
              webhook-url: 'SLACK_WEBHOOK_URL'
              status: 'failure'
              message: "Workflow failed"
      </code></pre>

      <h2>Conclusion</h2>
      <p>Congratulations! You have successfully deployed a serverless Lambda function with an API Gateway endpoint using AWS CDK and scheduled its invocation using GitHub Actions. This is just the beginning, and there are many more features and configurations you can explore with CDK and GitHub Actions.</p>
    `,
    image: "/aws-cdk.png",
    links: [
      {
        name: "AWS CDK Documentation",
        link: "https://docs.aws.amazon.com/cdk/latest/guide/home.html"
      },
      {
        name: "GitHub Actions Documentation",
        link: "https://docs.github.com/en/actions"
      }
    ]
  }
];
