import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import './styles.css';

function article_1() {

	const codeSnippet = `
	exports.handler = async (event) => {
		// Your code logic here
		return {
		  statusCode: 200,
		  body: JSON.stringify('Hello from Lambda!'),
		};
	  }; `;
	return {
		date: "03 Feb 2024",
		title: "Building a Serverless Application",
		description:
			"Building a Serverless Application with AWS Lambda, DynamoDB, and API Gateway.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Sudip Adhikari",
			"Sudip Adhikari",
			"Sudip Adhikari",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					// align-self: center;
					// outline: 2px solid red;
					width: 100%;
					height: auto;
					border-radius: 8px 8px 0 0;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					
					<img
						src="https://www.xenonstack.com/hubfs/xenonstack-aws-serverless-computing.png"
						alt="random"
						className="randImage"
					/>
					<div className="paragraph">
						<div>
							<h3>Introduction</h3>
							<p>Serverless architecture has become a game-changer in the world of cloud computing, allowing developers to focus on writing code without the need to manage servers. In this article, we'll explore the power of serverless computing by building a simple yet scalable application using three key AWS services: AWS Lambda, DynamoDB, and API Gateway.</p>
						</div>
						<div>
							<h3>Serverless Components</h3>
							<br/>
							<h4>AWS Lambda</h4>
							<p>AWS Lambda is a serverless compute service that lets you run your code without provisioning or managing servers. It supports a variety of programming languages, allowing you to choose the language that best fits your needs.
								For our application, we'll use Lambda to execute functions in response to HTTP requests. Each function will perform specific tasks, such as retrieving data from DynamoDB or processing user input.</p>
							<h4>API Gateway</h4>
							<p>AWS API Gateway enables you to create, publish, and manage APIs securely at any scale. It acts as a front door for our serverless application, allowing us to define RESTful APIs with ease.
								Our API Gateway will serve as the endpoint for client requests, connecting them to the corresponding Lambda functions. This enables us to expose our serverless functions as a fully functional API.</p>
						</div>
						<div style={{marginTop:'15px'}}>
							
							<h3>Building a Serverless Application</h3>
							<div>
								<br/>
								<h4>Step 1: Define the Application Architecture</h4>
								<p>Before diving into code, it's essential to outline the architecture of our serverless 
								application. Identify the Lambda functions, design the DynamoDB schema, and plan 
								the API Gateway endpoints.	
								</p>
							</div>

							<div>
								<br/>
								<h4>Step 2: Create Lambda Functions</h4>
								<p>Write the Lambda functions that will handle different aspects of your application. For 
									example, you might have functions for user registration, data retrieval, or processing
									user requests.
								</p>
								<SyntaxHighlighter language="javascript" style={atomDark}>
         							 {codeSnippet}
       							 </SyntaxHighlighter>
							</div>

							<div>
								<br/>
								<h4>Step 3: Set Up DynamoDB</h4>
								<p>Create a DynamoDB table and define the necessary indexes based on your 
									application's requirements. Consider the access patterns and design your schema 
									accordingly.
								</p>
							</div>
							<div>
								<br/>
								<h4>Step 4: Configure API Gateway</h4>
								<p>Use API Gateway to define your RESTful APIs and connect them to your Lambda
									functions. Set up authentication and authorization if needed, and deploy your API.
								</p>
							</div>
							<div>
								<br/>
								<h4>Step 5: Testing and Deployment</h4>
								<p>Test your serverless application locally to ensure everything works as expected. Once
									satisfied, deploy it to the AWS cloud, making it accessible to users.
								</p>
							</div>
							
							<div>
								<br/>
								<h4>Conclusion</h4>
								<p>
									Building a serverless application with AWS Lambda, DynamoDB, and API Gateway
									 provides a scalable and cost-effective solution. It allows developers to focus on writing 
									 code, accelerates time-to-market, and ensures high availability.
								</p>
								<p>
									As cloud computing continues to evolve, embracing serverless architecture becomes 
									increasingly essential. It's a paradigm shift that enables developers to build powerful
									and scalable applications without the complexity of managing infrastructure.
								</p>
								<p>
									In this article, we've explored the fundamental components of a serverless architecture
									and walked through the steps to create a simple serverless application using AWS
									Lambda, DynamoDB, and API Gateway. The possibilities with serverless computing are 
									vast, and this example serves as a starting point for your journey into the world of 
									serverless development. 
								</p>
							</div>
						</div>

						
						</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
