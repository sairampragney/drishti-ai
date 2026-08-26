

\---



\# 4. `memory.md`



```markdown

\# DrishtiAI Project Memory



\## Project Status



Initial project specification phase.



No production implementation has started.



\---



\# Core Concept



DrishtiAI is a doctor-facing prototype for demonstrating explainable computer-vision-assisted diabetic retinopathy screening in rural India.



\---



\# Core Workflow



Home

→ Login/Signup

→ Dashboard

→ Patient

→ Scan

→ Computer Vision Eye Detection

→ Show Results

→ Dataset Image

→ Result

→ Save Screening



\---



\# Important Product Decision



The current computer vision component detects the eye.



It does NOT diagnose diabetic retinopathy.



The result is selected from a provided prototype dataset.



\---



\# AI Decision



No generative AI is required for V1.



Do not integrate:



\- OpenAI

\- Gemini

\- Claude

\- AI chatbot



unless explicitly requested later.



\---



\# Technology Decisions



Frontend:

Next.js + TypeScript



Styling:

Tailwind CSS



Database:

PostgreSQL through Supabase



Authentication:

Supabase Auth



Computer Vision:

Browser-based CV



Hosting:

Vercel



Source Control:

Git + GitHub



\---



\# Backend Decision



No Java backend for V1.



No Python backend for V1 unless computer vision/model requirements later make it necessary.



Prefer Next.js server functionality where possible.



\---



\# Design Decision



Primary visual style:



Glassmorphism + medical technology.



Design should remain:



\- professional

\- clean

\- modern

\- trustworthy

\- accessible



Avoid excessive futuristic/gaming aesthetics.



\---



\# V1 Pages



/

&#x20;/login

&#x20;/signup

&#x20;/dashboard

&#x20;/patients

&#x20;/patients/new

&#x20;/scan

&#x20;/results/\[id]

&#x20;/history

&#x20;/settings



\---



\# V1 Features



\- Doctor authentication

\- Patient management

\- Camera activation

\- Eye detection

\- Scan status

\- Dataset result selection

\- Result display

\- Screening history

\- Basic settings



\---



\# Explicitly Excluded From V1



\- AI chatbot

\- Messaging

\- Notifications

\- Search

\- Payments

\- Admin dashboard

\- Patient portal

\- Complex analytics

\- Real medical diagnosis

\- Clinical-grade image acquisition



\---



\# Dataset



The project will use a provided eye-image dataset.



The exact dataset structure, labels and severity categories must be inspected before final implementation.



Do not invent dataset categories.



\---



\# Security



Use synthetic patient information during development and demonstration.



Never commit:



.env

API keys

database passwords

service-role credentials



\---



\# Deployment



Target:



GitHub → Vercel



Database/authentication:



Supabase



\---



\# Future Possibilities



\- Validated retinal classification model

\- Explainable AI heatmaps

\- Clinical hardware integration

\- ABDM/FHIR

\- Offline mode

\- Multilingual interface

\- Referral workflow



These are not V1 requirements.



\---



\# Current Next Step



Inspect the provided eye-image dataset.



After inspection:



1\. Confirm dataset structure.

2\. Confirm labels.

3\. Confirm severity categories.

4\. Design dataset metadata.

5\. Finalize implementation architecture.

6\. Begin implementation.

