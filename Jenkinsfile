pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                // Install npm packages
                sh 'npm install'
            }
        }
        stage('Build Next.js App') {
            steps {
                // Build the Next.js app for production
                sh 'npm run build'
            }
        }
        stage('Start Production Server') {
            steps {
                // Start the Next.js app in production mode
                sh 'npm run start '
            }
        }
        stage('Check if App is Running') {
            steps {
                // Wait a few seconds for the server to start
                sleep 10
                
                // Check if the Next.js app is accessible (assuming it runs on http://localhost:3000)
                sh 'curl http://http://62.72.56.158:3000'
            }
        }
    }
}
