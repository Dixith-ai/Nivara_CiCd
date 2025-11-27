pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh '''
                    # Build Docker image using the Dockerfile in the repo root
                    docker build -t devops-demo:v1 -f Dockerfile.dockerfile .
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                    # Stop any running container from the same image (optional cleanup)
                    docker ps -q --filter "ancestor=devops-demo:v1" | xargs -r docker stop
                    docker ps -aq --filter "ancestor=devops-demo:v1" | xargs -r docker rm

                    # Run the new container
                    docker run -d -p 80:3000 devops-demo:v1
                '''
            }
        }
    }
}
