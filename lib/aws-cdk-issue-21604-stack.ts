import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as events from 'aws-cdk-lib/aws-events';


export class AwsCdkIssue21604Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    const queue = new sqs.Queue(this, 'QueueWithTags', {
       visibilityTimeout: cdk.Duration.seconds(300)
    });

    const eventBridgeEventBus = new events.EventBus(this, 'EventBridgeWithoutTags', {
       eventBusName: "eventBusName"
    });

  }
}
