import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					
					<div className="works-body">
						<div className="work">
							<img
								src="./work/7-eleven-header.jpeg"
								alt="7-Eleven"
								className="work-image"
							/>
							<div className="work-title">7-Eleven</div>
							<div className="work-subtitle">
								Senior Fullstack Engineer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="https://trycatch.com.np/Try_Catch_Logo.png"
								alt="Try Catch IT Services Pvt. Ltd."
								className="work-image"
							/>
							<div className="work-title">Try Catch IT Services Pvt. Ltd.</div>
							<div className="work-subtitle">
								Senior Fullstack Engineer
							</div>
							<div className="work-duration">2022 - 2022</div>
						</div>

						<div className="work">
							<img
								src="https://crupeesoft.com/crupeeSoftware.png"
								alt="Cruppe"
								className="work-image"
							/>
							<div className="work-title">Crupee Software Pvt. Ltd</div>
							<div className="work-subtitle">
								Senieo Java Engineer
							</div>
							<div className="work-duration">2019 - 2022</div>
						</div>

						<div className="work">
							<img
								src="/work/mandala-image.png"
								alt="Mandala"
								className="work-image"
							/>
							<div className="work-title">Mandala System Pvt. Ltd</div>
							<div className="work-subtitle">
								 Java Engineer
							</div>
							<div className="work-duration">2017 - 2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
