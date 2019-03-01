Proof of concept web stack using React, Redux, Jest, Amazon S3, Amazon API Gateway, AWS Lambda, Amazon DynamoDB

Watch:
```
yarn watch
```

Install Deploy Tools ([Info](https://medium.com/ovrsea/deploy-automatically-a-react-app-on-amazon-s3-iam-within-minutes-da6cb0096d55)):
```
pipenv install
pipenv run aws configure
```

Build and Deploy:
```
yarn test
yarn build
yarn deploy
```

### Checklist
- [x] React (Base app)
- [x] Jest (Test suite)
- [x] Amazon S3 (Static hosting)
- [x] AWS CLI deployment
- [x] Redux (State refactor)
- [ ] Amazon API Gateway (State persistence interface)
- [ ] Amazon DynamoDB (State persistence)
- [ ] AWS Lambda (State validation)
