# My Awesome Web App

Welcome to my first internship project! This is a simple web application built with Node.js and EJS, deployed on AWS Elastic Beanstalk. 🚀

## Project Overview
- **Tech Stack**: Node.js, Express, EJS
- **Deployment**: AWS Elastic Beanstalk
- **Status**: Successfully deployed and running
- **URL**: http://my-awesome-web-app.eba-c9jhzzie.us-east-1.elasticbeanstalk.com/

#Image


## Working Steps
1. **Setup Locally**:
   - Install Node.js and npm.
   - Clone this repo: `git clone <repo-url>`.
   - Go to folder: `cd devops-project`.
   - Install dependencies: `npm install`.
   - Run app: `node index.js` and open `http://localhost:8008`.

2. **Deploy to AWS Elastic Beanstalk**:
   - Create an AWS account and enable Free Tier.
   - Set up Elastic Beanstalk: Create application (`my-awesome-web-app`) and environment (`my-awesome-web-app-env`) with t2.micro instance.
   - Configure port to 8008 in "Software" settings.
   - Zip project: `zip -r app.zip .`.
   - Upload `app.zip` via "Upload and Deploy" in Elastic Beanstalk dashboard.
   - Check URL for live app.

3. **CI/CD Integration**:
   - Added GitHub Actions for automatic deployment.
   - Configured AWS IAM access keys in GitHub Secrets (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`).
   - Push code to `main` branch triggers deployment.

## CI/CD Workflow
- **File**: `.github/workflows/ci-cd.yml`
- **Process**:
  - On `push` to `main` branch, workflow runs on `ubuntu-latest`.
  - Steps:
    1. Checkout code using `actions/checkout@v3`.
    2. Set up Node.js version 18.
    3. Install dependencies with `npm install`.
    4. Deploy to Elastic Beanstalk using `einaregilsson/beanstalk-deploy@v20` with AWS credentials.
- **Trigger**: Automatic on every `git push origin main`.


