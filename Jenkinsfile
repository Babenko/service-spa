pipeline {
    agent any
    tools {
        node 'base'
    }
    stages {
        stage('Build') {
            steps {
                sh "rm -rf ./dist/*"
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
                dir('tmp') {
                  deleteDir()
                }
            }
        }
    }
}
