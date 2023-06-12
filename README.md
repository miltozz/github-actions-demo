[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

# Test Github Actions

## Branch: add-jest
- added jest in dev dependencies 
- added an always-passing simple test for demo purposes
- add some CI workflows to check Github Actions

## Workflows

### 1. node-ci
- use `actions/setup-node@v3` to setup a nodejs environment and run some npm commands

### 2. publish-docker-image-priv-repo
Build and push a docker image to a private repository

Uses:
- actions/checkout@v3
- docker/login-action
- docker/metadata-action
- docker/build-push-action

### 3. publish-docker-image-priv-repo-semver.yml
Same as above with various tests for push, push-tag, tagging, semver and pushed-image-naming 
