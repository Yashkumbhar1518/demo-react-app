pipeline{
  agent{
    docker{
      image 'node:18'
    }
  }

  stages{
    stage('Clone Repo'){
      steps{
        checkout scm
      }
    }
    stage('Install Dependencies'){
      steps{
        sh 'npm install'
      }
    }
    stage('Build React App'){
      steps{
        sh 'npm run build'
      }
    }
    stage('Install serve and run app){
       steps{
         sh 'npm install -g serve'
         sh 'serve -s build -l 3000 &'
         echo 'React app deployed and running at port 3000'
       }   
    }
  }
}
