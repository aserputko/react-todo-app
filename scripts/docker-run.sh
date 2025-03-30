set -e  # Exit immediately if a command exits with a non-zero status.
set -x  # Enable debugging

# Load environment variables from .env file
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

VERSION="latest"
USERNAME="aserputko"
REPO="todo-list-webap"

# Build the Docker image with two tags: one for the version and one for "latest".
docker run -p 3000:80 \
    ${USERNAME}/${REPO}:${VERSION}