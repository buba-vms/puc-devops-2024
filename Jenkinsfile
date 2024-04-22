pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                bat 'echo "Building React project..."'
                bat 'npm install' 
                bat'npm run build' 
            }
        }
        stage('Test') {
            steps {
                bat 'echo "Testing React project..."'
            }
        }
        stage('Python Script') {
            steps {
                bat 'echo "Running Python script..."'
                bat 'python hello_world.py' // 
            }
        }
        stage('Deploy') {
            steps {
                bat 'echo "Deploying React project..."'
                bat 'npm start'
            }
        }

    }
}

