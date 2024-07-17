# us175-wantlist
A static page displaying the latest wantlist at https://inv.us175.com/wantlist/

## Architecture
This GitHub repository is configured with a webhook for a CodePipeline pipeline. The repo is uploaded to an S3 bucket under the wantlist/ key.

CodePipeline runs a Lambda function as the last stage. The Lambda function creates a CloudFront cache invalidation and returns the status to CodePipeline.
