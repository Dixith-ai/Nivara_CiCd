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
                    # Stop ALL running containers (safe for this EC2 demo box)
                    docker ps -q | xargs -r docker stop
                    docker ps -aq | xargs -r docker rm

                    # Run the new container
                    docker run -d -p 80:3000 devops-demo:v1
                '''
            }
        }
    }
}
