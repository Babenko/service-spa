pipeline {
    agent any
    tools {
        nodejs 'base'
    }
    stages {
        stage('Build') {
            steps {
                dir('node_modules') {
                  deleteDir()
                }
                sh "npm --version"
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
            }
        }
    }
}
