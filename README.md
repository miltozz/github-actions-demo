[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

# Test Github Actions

## Branch: demo/v3
- Add Github Actions CI workflow to check remote ssh actions
- Assumes a provisioned server exists, e.g. an EC2 VM remote host, with docker and compose installed.
- ssh and scp actions require the EC2 public ip, username and the ssh-key, in Github Secrets.
- A simple docker-compose file to launch the image in the remote host.
- Steps:
    1. checkout repo in actions VM
    2. login to docker in actions VM
    3. extract metadata for image
    4. build and push image
    5. copy compose file to remote host with `scp-action`
    6. execute commands on host with `ssh-action`
        - docker login
        - compose pull & up
        - docker logout
        - image prune

## Workflow:
- publish-docker-test-ssh-actions.yml

## Actions used:
- actions/checkout@v3
- docker/login-action
- docker/metadata-action
- docker/build-push-action
- [SSH Action](https://github.com/appleboy/ssh-action)
- [SCP Action](https://github.com/appleboy/scp-action)

