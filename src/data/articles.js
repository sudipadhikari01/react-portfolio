import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import './styles.css';

function article_1() {

	const codeSnippet = `
	exports.handler = async (event) => {
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

	const codeSnippet1 = `
	  const currentTime = new Date();
	  const currentHour = currentTime.getHours(); `;

	  const codeSnippet2 = `
	  let greetingMessage;

	  if (currentHour < 12) {
		greetingMessage = 'Good morning!';
	  } else if (currentHour < 18) {
		greetingMessage = 'Good afternoon!';
	  } else {
		greetingMessage = 'Good evening!';
	  }
	  `;

	  const codeSnippet3 = `
	  return (
		<div>
		  <h1>{greetingMessage}</h1>
		  {/* Other content of my portfolio */}
		</div>
	  );
	  `;

	  const codeSnippet4 = `
	  // Sample Lambda function to save contact form data in DynamoDB
	  exports.handler = async (event) => {
		  //code logic to save data in DynamoDB
		  return {
			statusCode: 200,
			body: JSON.stringify('Form data saved successfully!'),
		  };
		};
	  `;

	  
	
  

	  


	return {
		date: "4 Feb 2024",
		title: "A Dynamic Greeting on My Portfolio",
		description:
			"Bringing Personalization to the Digital Realm: A Dynamic Greeting on My Portfolio",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Sudip Adhikari",
			"Sudip Adhikari",
			"Sudip Adhikari",
		],
		body: (
			<React.Fragment>
				
				<div className="article-content">
					
					<div className="paragraph">
						<div>
							<br/>
							<h3>Introduction</h3>
								<p>
									In the ever-evolving landscape of web development, the quest for creating unique and 
									engaging user experiences remains paramount. Inspired by the idea of offering a
									personalized touch to my portfolio, I embarked on a journey to implement a dynamic
									greeting based on the time of day. In this article, I'll walk you through the thought
									process, implementation steps, and the integration of a Lambda function for a 
									seamless user interaction.
								</p>
						</div>

						<div>
							<h4>Inspiration: A Warm Welcome in Real-Time</h4>
							<p>
								The concept stemmed from the desire to go beyond the static and conventional 
								elements of a portfolio. Imagine a website that welcomes visitors with a friendly
								greeting tailored to the time of day — a digital handshake that adapts to the user's
								experience. It's not just about displaying information; it's about creating an
								atmosphere.
							 </p>
						</div>

						<div>
							<h3>Implementation Steps</h3>
							<br/>
								<div>
									<h3>1. Identify the Time of Day</h3>
										<p>
											Using JavaScript, I tapped into the user's device to determine the current time. This 
											crucial piece of information would serve as the foundation for crafting personalized
											greetings.
										</p>
										<SyntaxHighlighter language="javascript" style={atomDark}>
         							 		{codeSnippet1}
       							 		</SyntaxHighlighter>
								</div>

								<div>
									<br/>
									<h3>2. Create Greeting Messages</h3>
										<p>
											With the time in hand, I designed different greeting messages for morning, afternoon, 
											evening, and night. Each message would bring a unique flavor to the user's experience.
										</p>
										<SyntaxHighlighter language="javascript" style={atomDark}>
         							 		{codeSnippet2}
       							 		</SyntaxHighlighter>
								</div>

								<div>
									<br/>
									<h3>3. Display Dynamic Greeting</h3>
										<p>
											Incorporating React, I seamlessly integrated the dynamic greeting into the portfolio.  
											The UI would now dynamically showcase a warm welcome based on the time of the 
											user's visit.
										</p>
										<SyntaxHighlighter language="javascript" style={atomDark}>
         							 		{codeSnippet3}
       							 		</SyntaxHighlighter>
								</div>

								<div>
									<br/>
									<h3>4. Integrate Lambda Functionality</h3>
										<p>
											Building upon the existing Lambda function responsible for handling the contact form  
											submissions, I ensured that the introduction of the dynamic greeting did not
											compromise any existing functionalities.
										</p>
										<SyntaxHighlighter language="javascript" style={atomDark}>
         							 		{codeSnippet4}
       							 		</SyntaxHighlighter>
								</div>
						</div>

						<div>
						<br/>
								<h4>Challenges and Solutions</h4>
								<p>
									No project is without its challenges. I encountered considerations related to time zones 
									and ensuring that the dynamic greeting was not affected by discrepancies. Through
									meticulous testing and adjustments, I addressed these challenges, creating a 
									seamless and reliable experience for users across different regions.
								</p>
						</div>

						<div>
						<br/>
								<h4>Testing and Deployment</h4>
								<p>
									After implementing the changes, thorough testing became imperative. I needed to 
									ensure that the dynamic greeting functioned flawlessly and that the contact form 
									functionalities were intact. Once confident in the stability, I deployed the updated 
									version of my portfolio to the cloud.
								</p>
						</div>

						<div>
						<br/>
								<h4>Conclusion</h4>
								<p>
									The implementation of a dynamic greeting on my portfolio not only adds a touch of
									personalization but also exemplifies the evolving nature of web development. It's a 
									testament to the power of combining creativity with technology, transforming a static
									website into a dynamic and engaging digital space.
								</p>
								<p>
									In conclusion, this project is a small but impactful step toward creating a more
									immersive and welcoming digital environment. As technology continues to advance,  
									the possibilities for personalization and user engagement are limitless.
									
								</p>
						</div>

						<div>
						<br/>
								<h4>Future Enhancements</h4>
								<p>
									Looking ahead, there's room for future enhancements. Considerations include
									expanding the dynamic greetings based on user preferences, incorporating user- 
									specific data for a more tailored experience, and exploring additional serverless 
									functionalities to further elevate the portfolio's interactivity.
								</p>
								<p>
									Bringing a dynamic greeting to my portfolio has not only added a personal touch but 
									has also opened doors to future explorations in the realm of user-centric web 
									development. As we embrace the dynamic nature of the digital world, the journey of 
									crafting unique and engaging experiences continues.	
								</p>
						</div>




					</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
