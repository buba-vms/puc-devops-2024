pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'echo "Building React project..."'
                sh 'npm install' 
                sh 'npm run build' 
            }
        }
        stage('Test') {
            steps {
                sh 'echo "Testing React project..."'
                sh 'npm test' 
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo "Deploying React project..."'
                sh 'npm start'
            }
        }
        stage('Python Script') {
            steps {
                sh 'echo "Running Python script..."'
                sh 'python hello_world.py' // 
            }
        }
    }
}

