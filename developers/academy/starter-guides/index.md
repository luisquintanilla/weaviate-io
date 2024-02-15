---
title: Starter guides
sidebar_position: 0
image: og/docs/tutorials.jpg
# tags: ['getting started']
---

import AcademyCard from '/src/components/Academy/card';

Get started with Weaviate with options that best suit your needs:
- The deployment setup (step 1), and then
- A scenario (step 2)

## Step 1: Deploy Weaviate

### Where to start?

<div class="row __academy_cardgroup">
    <div class="col col--6">
        <AcademyCard
        title="Which setup is right for me?"
        body="Not sure which deployment setup is right for you? Start here!"
        buttonType="Click here"
        badgeType="theory"
        buttonURL="./step-1-deployment/which-weaviate.md"
        />
    </div>
</div>

### Deployment options

<div class="row __academy_cardgroup">
    <div class="col col--4">
        <AcademyCard
        title="Embedded Weaviate"
        body="For basic, quick evaluation. Conveniently launch Weaviate directly from Python or TS/JS and get started in minutes."
        buttonType="Click here"
        badgeType="practical"
        buttonURL="/weaviate/installation/embedded.md"
        />
    </div>
    <div class="col col--4">
        <AcademyCard
        title="Docker-Compose"
        body="For local evaluation & development. Spin up a customizable, local instance of Weaviate, with optional local inference containers and multi-modal models."
        buttonType="Click here"
        badgeType="practical"
        buttonURL="/weaviate/installation/docker-compose.md"
        />
    </div>
    <div class="col col--4">
        <AcademyCard
        title="Weaviate Cloud Services (WCS)"
        body="From evaluation (sandbox) to production. Use our Serverless (infrastructure managed by Weaviate) deployment for a fully managed, scalable, and secure Weaviate instance. No DevOps required."
        buttonType="Click here"
        badgeType="practical"
        buttonURL="/weaviate/installation/weaviate-cloud-services.md"
        />
    </div>
</div>

## Step 2: Usage Scenarios

Once you have deployed Weaviate, choose a usage scenario that best meets your needs:

<div class="row __academy_cardgroup">
    <div class="col col--4">
        <AcademyCard
        title="Search through text data"
        body="Not sure which deployment setup is right for you? Start here!"
        buttonType="Click here"
        badgeType="practical"
        buttonURL="./step-2-scenario/text-search.md"
        />
    </div>
    <div class="col col--4">
        <AcademyCard
        title="Index your own vectors"
        body="For those look to import pre-existing vectors into a vector database. Learn how to store, index and search using your own vectors in Weaviate."
        buttonType="Click here"
        badgeType="practical"
        buttonURL="./step-2-scenario/custom-vectors.mdx"
        />
    </div>
    <div class="col col--4">
        <AcademyCard
        title="Power an AI-app with Weaviate"
        body="Learn how to power AI-applications with powerful search and retrieval augmented generation (RAG) capabilities."
        buttonType="Click here"
        badgeType="practical"
        buttonURL="./step-2-scenario/generative.md"
        />
    </div>
</div>
