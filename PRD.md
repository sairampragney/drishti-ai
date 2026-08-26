\# DrishtiAI

\## Explainable Computer-Vision Prototype for Diabetic Retinopathy Screening in Rural India



\## 1. Product Overview



DrishtiAI is a doctor-facing web application prototype designed to demonstrate a computer-vision-assisted workflow for diabetic retinopathy screening in rural India.



The project focuses on making the screening workflow simple, accessible, and understandable for healthcare professionals operating in environments where specialized retinal imaging equipment may not always be available.



The prototype uses a camera-based computer vision component to detect the presence/location of an eye.



Because this is a prototype and does not use a clinical-grade retinal scanner or a validated medical diagnostic model, the computer vision component is NOT responsible for diagnosing diabetic retinopathy.



After successful eye detection, the doctor can select "Show Results". The application then selects an eye image from a provided prototype dataset and displays the associated severity/risk information stored with that dataset image.



The application must clearly communicate that the displayed result is a prototype/dataset demonstration and is not a clinical diagnosis.



\---



\# 2. Problem Statement



Diabetic retinopathy can cause serious vision impairment if it is not detected and managed early.



In rural healthcare environments, access to specialized retinal screening equipment and ophthalmology services can be limited.



The project aims to demonstrate a simple digital screening workflow that could assist healthcare professionals by:



\- Providing a simple doctor-facing interface.

\- Using computer vision to detect an eye using an available camera.

\- Demonstrating how retinal images could be associated with severity information.

\- Presenting results in an understandable and explainable format.

\- Maintaining patient screening records.



The current prototype is intended for demonstration and academic purposes.



\---



\# 3. Target Users



\## Primary User



Doctors and healthcare professionals.



The application is designed primarily for doctors who perform or supervise diabetic retinopathy screening.



\## Secondary Users



For the current prototype, patients do not directly interact with the application.



The doctor enters and manages patient information.



\---



\# 4. Product Goals



The main goals are:



1\. Provide a simple doctor-facing screening interface.

2\. Provide secure doctor authentication.

3\. Allow doctors to maintain basic patient information.

4\. Allow a doctor to start a screening session.

5\. Activate the device camera.

6\. Use computer vision to detect an eye.

7\. Allow the doctor to proceed to results after successful detection.

8\. Select a random eye image from the provided prototype dataset.

9\. Display the corresponding dataset result.

10\. Clearly communicate severity/risk information.

11\. Store screening records.

12\. Provide a professional, modern, glassmorphism-based medical UI.

13\. Make the application responsive.

14\. Make the application deployable using Vercel.



\---



\# 5. Prototype Limitations



The following limitations MUST be clearly documented:



\- The system is a prototype.

\- The camera is not a clinical-grade retinal scanner.

\- Computer vision is used for eye detection, not disease diagnosis.

\- Dataset images are used to demonstrate the result workflow.

\- Results are based on prototype dataset labels.

\- The system must not claim to provide a medically validated diagnosis.

\- Risk percentages must not be represented as clinically calibrated probabilities unless a validated model actually provides them.

\- Demonstration patient information must be synthetic.



\---



\# 6. Core User Journey



The primary workflow is:



Home

&#x20;   ↓

Login / Signup

&#x20;   ↓

Doctor Dashboard

&#x20;   ↓

Patient Details

&#x20;   ↓

Start Scan

&#x20;   ↓

Camera Activation

&#x20;   ↓

Computer Vision Eye Detection

&#x20;   ↓

Eye Detected

&#x20;   ↓

Show Results

&#x20;   ↓

Random Dataset Eye Image

&#x20;   ↓

Dataset Result

&#x20;   ↓

Result Page

&#x20;   ↓

Screening Record



\---



\# 7. Authentication



Doctors must have an account.



\## Signup



Required fields:



\- Doctor name

\- Email

\- Password

\- Clinic/Hospital name

\- Location



\## Login



Required fields:



\- Email

\- Password



Authentication should be implemented using Supabase Auth unless a technically superior equivalent is justified.



\---



\# 8. Dashboard



The dashboard should be simple.



It should NOT contain unnecessary analytics or complicated graphs.



The dashboard should include:



\- Welcome message

\- Doctor information

\- Start New Scan button

\- Recent patients

\- Basic screening history

\- Navigation sidebar



Suggested sidebar:



\- Home

\- New Scan

\- Patients

\- History

\- Settings

\- Logout



\---



\# 9. Patient Management



The doctor should be able to create/select a patient before beginning a screening.



Prototype patient fields:



\- Patient ID

\- Patient name

\- Age

\- Gender

\- Diabetes duration

\- Optional basic diabetes information

\- Created date



All demonstration patient data should be synthetic.



\---



\# 10. Computer Vision



The scanning page should activate the device camera.



The system should:



1\. Request camera permission.

2\. Display the camera feed.

3\. Start computer vision processing.

4\. Detect an eye/eye region.

5\. Display visual feedback.

6\. Show successful eye detection.

7\. Enable the "Show Results" button.



The computer vision component is ONLY responsible for detecting the eye.



It must NOT claim that it has diagnosed diabetic retinopathy.



\---



\# 11. Result Generation



After successful eye detection:



1\. The doctor presses "Show Results".

2\. The application selects an eye image from the provided prototype dataset.

3\. The dataset image is associated with a severity/result label.

4\. The application retrieves that result.

5\. The result page displays the image and associated information.



The selection should be deterministic enough to reproduce during testing when needed, while supporting random selection for demonstrations.



\---



\# 12. Result Page



The result page should display:



\- Selected eye image

\- Screening status

\- Severity category

\- Risk/status indicator

\- Short explanation

\- Recommended next action

\- Prototype disclaimer



Possible severity categories may include:



\- No/Minimal signs

\- Mild

\- Moderate

\- Severe

\- Proliferative



The exact categories must be based on the actual supplied dataset.



\---



\# 13. Result Status



The UI should use understandable statuses such as:



\### Safe / Low Risk



The dataset indicates no significant signs or low severity.



\### Attention Required



The dataset indicates a level requiring further clinical evaluation.



\### High Risk



The dataset indicates severe findings requiring referral/further examination.



These labels must be mapped to the actual dataset categories rather than invented arbitrarily.



\---



\# 14. Result Explanation



The result page should be explainable.



Example:



Severity:

Moderate



Status:

Attention Required



Explanation:

"The prototype dataset categorizes this retinal image as moderate severity. Further clinical examination is recommended."



The application must not state:



"You definitely have diabetic retinopathy."



\---



\# 15. Main Pages



The application must contain:



1\. Home

2\. Login

3\. Signup

4\. Dashboard

5\. Patient Management

6\. Scan

7\. Result

8\. Settings



\---



\# 16. Home Page



The homepage should contain:



\## Navigation Bar



\- DrishtiAI logo

\- Home

\- Features

\- About

\- Login

\- Sign Up



\## Hero Section



Large headline focused on:



\- Early screening

\- Eye health

\- Accessible screening



Supporting description explaining:



\- diabetic retinopathy

\- importance of early screening

\- rural healthcare challenges

\- purpose of DrishtiAI



Primary CTA:



"Get Started"



Secondary CTA:



"Learn More"



\## Features



Show the core capabilities:



\- Computer Vision Eye Detection

\- Simple Doctor Workflow

\- Explainable Results

\- Patient Records



\## About



Explain the academic/prototype purpose.



\## Disclaimer



Clearly state that this is a prototype and not a clinical diagnostic system.



\## Footer



Include:



\- Project name

\- Navigation

\- Prototype disclaimer

\- Copyright/project information



\---



\# 17. Features



The V1 feature set is intentionally limited.



\### Required



\- Doctor signup

\- Doctor login

\- Authentication

\- Dashboard

\- Patient creation

\- Patient selection

\- Camera access

\- Eye detection

\- Scan status

\- Show Results

\- Dataset image selection

\- Result display

\- Screening history

\- Basic settings

\- Logout



\### Not Required



\- Chat

\- Notifications

\- Search

\- Payments

\- Social features

\- Messaging

\- AI chatbot

\- Complex analytics

\- Admin dashboard

\- Patient-facing application



\---



\# 18. AI



No generative AI component is required.



Do not integrate OpenAI, Gemini, Claude, or another LLM unless explicitly requested later.



Computer vision and AI/ML are separate concepts for this prototype.



The current computer vision component is for eye detection.



\---



\# 19. External Services



Preferred services:



\- Supabase for authentication and PostgreSQL database.

\- Vercel for deployment.

\- Browser-based computer vision library for eye detection.



No external AI API is required.



No Python backend is required for V1 unless the implementation later proves that a separate computer-vision service is necessary.



No Java backend is required for V1.



\---



\# 20. Database



The database should store:



\### Doctors



\- id

\- name

\- email

\- clinic

\- location

\- created\_at



\### Patients



\- id

\- doctor\_id

\- patient\_code

\- name

\- age

\- gender

\- diabetes\_duration

\- created\_at



\### Screenings



\- id

\- doctor\_id

\- patient\_id

\- dataset\_image\_id

\- severity

\- status

\- result\_explanation

\- created\_at



\### Dataset Images



\- id

\- image\_path

\- category

\- severity

\- metadata



The exact schema may be adjusted after inspecting the supplied dataset.



\---



\# 21. Responsive Design



The website must work on:



\- Desktop

\- Laptop

\- Tablet

\- Mobile



The scanning interface should prioritize desktop/laptop usage because the prototype is primarily intended for clinical/workstation demonstration.



\---



\# 22. Performance Goals



The application should:



\- Load quickly.

\- Avoid unnecessary dependencies.

\- Avoid excessive animations.

\- Compress/optimize images where appropriate.

\- Avoid loading the complete dataset unnecessarily.

\- Keep computer vision processing efficient.



\---



\# 23. Security



The application must:



\- Never expose API secrets.

\- Never commit .env files.

\- Use environment variables.

\- Protect authenticated routes.

\- Ensure doctors can only access their own patient/screening records.

\- Validate user input.

\- Sanitize data.

\- Use secure authentication.

\- Avoid storing unnecessary sensitive information.



\---



\# 24. Deployment



The target deployment workflow is:



Local Development

&#x20;   ↓

Git

&#x20;   ↓

GitHub

&#x20;   ↓

Vercel

&#x20;   ↓

Production



Supabase will provide:



\- Authentication

\- PostgreSQL database



Vercel will provide:



\- Frontend hosting

\- Application deployment



\---



\# 25. Success Criteria



The prototype is successful when:



1\. A doctor can create an account.

2\. A doctor can log in.

3\. A doctor can create/select a patient.

4\. A doctor can start the scanner.

5\. The browser requests camera permission.

6\. Computer vision detects an eye.

7\. The application shows successful detection.

8\. "Show Results" becomes available.

9\. A dataset eye image is selected.

10\. The corresponding result is displayed.

11\. The screening can be saved.

12\. The doctor can view previous screening records.

13\. The website works responsively.

14\. The application can be deployed to Vercel.

15\. No secrets are exposed in the repository.



\---



\# 26. Future Scope



Potential future versions may include:



\- Clinical-grade retinal imaging hardware integration.

\- Validated diabetic retinopathy classification model.

\- Explainable AI heatmaps.

\- Fundus image analysis.

\- Referral workflow.

\- ABDM/FHIR integration.

\- Patient portal.

\- Advanced analytics.

\- Multi-clinic support.

\- Offline/low-connectivity functionality.

\- Multilingual support.

\- Mobile application.



These features are OUTSIDE V1.

