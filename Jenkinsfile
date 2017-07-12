pipeline {
    agent any
    tools {
        nodejs 'Node 6.x'
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh "npm --version"
                sh "ember build --environment production"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}
