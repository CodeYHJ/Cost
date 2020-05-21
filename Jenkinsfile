pipeline {
    agent any
    stages {
        stage('git clone master') {
            when {
               branch 'master'
            }
            steps {
                git branch: 'master', credentialsId: 'github_Cost_deploy', url: 'https://github.com/CodeYHJ/Cost'
            }
        }

        stage('master install') {
            when {
               branch 'master'
            }
            steps {
                nodejs('nodejs12.13.1') {
                sh 'node --version'
                sh 'npm install -g yarn --registry=https://registry.npm.taobao.org'
                sh 'yarn install'
                sh 'yarn build'
               }
            }
        }
        stage('master deploy') {
            when {
               branch 'master'
            }
            steps {
                sshPublisher(publishers: [sshPublisherDesc(configName: 'QQ Server', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/mobile/xiongmao', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '**/admin/**/*')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }
        }
         stage('delete all'){
            steps {
                cleanWs()
            }
        }
    }
}