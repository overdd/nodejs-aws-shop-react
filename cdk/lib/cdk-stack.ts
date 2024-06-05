import {
  Stack,
  StackProps,
  aws_s3 as S3,
  aws_cloudfront as CloudFront,
  aws_iam as IAM,
  aws_s3_deployment as S3Deployment,
} from "aws-cdk-lib";
import { Construct } from "constructs";

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id);
    const cloudfrontOAI = new CloudFront.OriginAccessIdentity(
      this,
      "cloudfront-OAI"
    );

    const bucket = new S3.Bucket(this, `NodeJS-AWS-SHOP-REACT`, {
      bucketName: `nodejs-aws-shop-react-${crypto.randomUUID()}`,
      versioned: false,
      websiteIndexDocument: "index.html",
      publicReadAccess: false,
      blockPublicAccess: S3.BlockPublicAccess.BLOCK_ALL,
    });
    bucket.addToResourcePolicy(
      new IAM.PolicyStatement({
        actions: ["s3:GetObject"],
        resources: [`${bucket.bucketArn}/*`],
        principals: [
          new IAM.CanonicalUserPrincipal(
            cloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId
          ),
        ],
      })
    );

    const distribution = new CloudFront.CloudFrontWebDistribution(
      this,
      `NodeJS-AWS-SHOP-REACT-CDN`,
      {
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: bucket,
              originAccessIdentity: cloudfrontOAI,
            },
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
      }
    );

    new S3Deployment.BucketDeployment(
      this,
      "NodeJS-AWS-SHOP-REACT-Deployment",
      {
        sources: [S3Deployment.Source.asset("./../dist")],
        destinationBucket: bucket,
        distribution,
        distributionPaths: ["/*"],
      }
    );
  }
}
