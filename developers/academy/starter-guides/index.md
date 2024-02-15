---
title: Starter guides
sidebar_position: 0
image: og/docs/tutorials.jpg
# tags: ['getting started']
---

import AcademyCard from '/src/components/Academy/card';

Get started with Weaviate by choosing:
- The deployment setup (step 1), and then
- A scenario (step 2)

That makes the most sense for your needs.

## Step 1: Deploy Weaviate

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
    <div class="col col--6">
        <AcademyCard
        title="Embedded Weaviate"
        body="Not sure which deployment setup is right for you? Start here:"
        buttonType="Click here"
        badgeType="practical"
        buttonURL="/weaviate/installation/embedded.md"
        />
    </div>
    <div class="col col--6">
        <AcademyCard
        title="Docker-Compose"
        body="Not sure which deployment setup is right for you? Start here:"
        buttonType="Click here"
        badgeType="practical"
        buttonURL="/weaviate/installation/docker-compose.md"
        />
    </div>
    <div class="col col--6">
        <AcademyCard
        title="Weaviate Cloud Services (WCS)"
        body="Not sure which deployment setup is right for you? Start here:"
        buttonType="Click here"
        badgeType="practical"
        buttonURL="/weaviate/installation/weaviate-cloud-services.md"
        />
    </div>
</div>

## Step 2: Usage Scenarios

Once you have deployed Weaviate, choose a usage scenario that best meets your needs:

- [Search through text data](./step-2-scenario/text-search.md)
- [Index your own vectors](./step-2-scenario/custom-vectors.mdx)
- [Build an AI-powered app (RAG)](./step-2-scenario/generative.md)
