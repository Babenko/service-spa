pipeline {
    agent any
    tools {
        nodejs 'base'
    }
    stages {
        stage('Build') {
            steps {
                sh "npm install"
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
                dir('node_modules') {
                  deleteDir()
                }
            }
        }
    }
}
