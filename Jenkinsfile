pipeline {
    agent any
    tools {
        nodejs 'base'
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh "npm --version"
                sh "sudo npm install"
                sh "sudo ember build --environment production"
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
