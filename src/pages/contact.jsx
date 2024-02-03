import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import {ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';



import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	const [formData, setFormData] = useState({
        name:"",
        email: "",
        subject: "",
        message : "",
        phone: ""
    })

	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
	  const form = event.currentTarget;
	  if (form.checkValidity() === false) {
		event.preventDefault();
		event.stopPropagation();
		setValidated(true);
		
	  } else {
		event.preventDefault();
		axios.post('https://ddekwwbcew2bxwcbekqp6zrdxu0erlme.lambda-url.us-east-1.on.aws/',formData).then(data=> {
			setFormData({
				name:"",
				email: "",
				subject: "",
				message : "",
				phone: ""
			})
			toast.success("Form submitted successfully!!");
			setValidated(false);
		}).catch(err=>{
			toast.error('Please try again!!');
		})
	  }

	};

      const handleOnChange = (e) => {
        setFormData((prev) => ({...prev, [e.target.name] : e.target.value}))
      }

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">

				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in getting in touch with
							me. I welcome your feedback, questions, and
							suggestions. If you have a specific question or
							comment, please feel free to email me directly at
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. I make an effort to respond to all messages within
							24 hours, although it may take me longer during busy
							periods. Alternatively, you can use the contact form
							on my website to get in touch. Simply fill out the
							required fields and I'll get back to you as soon as
							possible. Finally, if you prefer to connect on
							social media, you can find me on{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							. I post regular updates and engage with my
							followers there, so don't hesitate to reach out.
							Thanks again for your interest, and I look forward
							to hearing from you!
						</div>
					</div>

					<div>
					
					<Form noValidate validated={validated} style={{marginTop: '40px', width: '500px'}} onSubmit={handleSubmit}> 
					<ToastContainer />

						<Form.Group className="mb-3" controlId="formBasicEmail" >
							<Form.Control type="text" placeholder="Enter name" name="name" value={formData.name} onChange={handleOnChange} required />
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleOnChange} required  />
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Control type="text" placeholder="Enter subject" name="subject" value={formData.subject} onChange={handleOnChange} required  />
							</Form.Group>
							<Form.Group className="mb-3">
							<Form.Control type="tel" placeholder="Enter phone" name="phone" value={formData.phone} onChange={handleOnChange}  required />
							</Form.Group>
							<Form.Group className="mb-3">
							<Form.Control as="textarea" placeholder="Enter Message" name="message" value={formData.message} onChange={handleOnChange} required />
							</Form.Group>
						<Button variant="primary" type="submit">
							Send Message
						</Button>
					</Form>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
