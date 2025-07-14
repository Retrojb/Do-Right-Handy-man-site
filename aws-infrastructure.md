# AWS Infrastructure for Appointment Booking

## Architecture Overview

```
Frontend (React) → API Gateway → Lambda → DynamoDB
                                    ↓
                              SES (Email Notifications)
```

## Required AWS Services

### 1. API Gateway
- REST API endpoint for form submissions
- CORS configuration for your domain
- Request validation

### 2. Lambda Function
```javascript
// lambda/appointment-handler.js
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const dynamodb = new DynamoDBClient({ region: "us-east-1" });
const ses = new SESClient({ region: "us-east-1" });

export const handler = async (event) => {
  const { name, phone, email } = JSON.parse(event.body);
  
  // Store in DynamoDB
  await dynamodb.send(new PutItemCommand({
    TableName: "appointments",
    Item: {
      id: { S: Date.now().toString() },
      name: { S: name },
      phone: { S: phone },
      email: { S: email },
      timestamp: { S: new Date().toISOString() }
    }
  }));
  
  // Send notification email
  await ses.send(new SendEmailCommand({
    Source: "noreply@dorighthandyman.com",
    Destination: { ToAddresses: ["admin@dorighthandyman.com"] },
    Message: {
      Subject: { Data: "New Appointment Request" },
      Body: { Text: { Data: `New request from ${name} - ${phone} - ${email}` } }
    }
  }));
  
  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify({ message: "Success" })
  };
};
```

### 3. DynamoDB Table
```bash
aws dynamodb create-table \
  --table-name appointments \
  --attribute-definitions AttributeName=id,AttributeType=S \
  --key-schema AttributeName=id,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST
```

### 4. SES Configuration
```bash
# Verify your domain
aws ses verify-domain-identity --domain dorighthandyman.com

# Verify email addresses (for testing)
aws ses verify-email-identity --email-address admin@dorighthandyman.com
```

## Deployment Steps

### 1. Create Lambda Function
```bash
# Package and deploy
zip -r appointment-handler.zip lambda/
aws lambda create-function \
  --function-name appointment-handler \
  --runtime nodejs18.x \
  --role arn:aws:iam::ACCOUNT:role/lambda-execution-role \
  --handler index.handler \
  --zip-file fileb://appointment-handler.zip
```

### 2. Create API Gateway
```bash
# Create REST API
aws apigateway create-rest-api --name appointment-api

# Create resource and method
# Configure integration with Lambda
```

### 3. Update Frontend
```javascript
// In contact.tsx
const handleSubmit = async (e) => {
  e.preventDefault()
  
  try {
    const response = await fetch('https://api.dorighthandyman.com/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      alert('Thank you! We will contact you soon.')
      setFormData({ name: '', phone: '', email: '' })
    }
  } catch (error) {
    alert('Error submitting form. Please try again.')
  }
}
```

## Cost Estimation
- **Lambda**: ~$0.20/month (1000 requests)
- **API Gateway**: ~$3.50/month (1000 requests)
- **DynamoDB**: ~$0.25/month (minimal usage)
- **SES**: ~$0.10/month (100 emails)
- **Total**: ~$4/month

## Security Considerations
- Enable API Gateway throttling
- Add request validation
- Use IAM roles with minimal permissions
- Enable CloudWatch logging
- Consider adding authentication for admin features