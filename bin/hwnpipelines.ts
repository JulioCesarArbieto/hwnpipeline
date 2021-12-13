#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HWNPipelineStack } from '../lib/hwnpipelines-stack';

const app = new cdk.App();
new HWNPipelineStack(app, 'HwnpipelinesStack', {
  env: {
    account: '561215544381',
    region: 'us-east-1',
  }
});
