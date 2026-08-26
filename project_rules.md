\# DrishtiAI Project Rules



\## Source of Truth



The following documents are the authoritative project specifications:



1\. PRD.md

2\. architecture.md

3\. design.md

4\. memory.md

5\. .clinerules/



Do not contradict these documents.



\---



\# Product Scope



Keep V1 simple.



Do not add features that are not required.



Do not add:



\- Chat

\- Notifications

\- Payments

\- AI chatbot

\- Social features

\- Complex analytics

\- Admin dashboard



unless explicitly requested.



\---



\# Medical Safety



DrishtiAI is an academic prototype.



Never claim that the application provides a clinical diagnosis.



Never describe the prototype dataset result as medically validated.



Never create unsupported medical claims.



Always preserve the prototype disclaimer.



\---



\# Computer Vision



Computer vision is responsible for eye detection.



It is NOT responsible for diagnosing diabetic retinopathy.



Do not silently replace the computer vision architecture with an ML diagnostic model.



\---



\# Dataset



Inspect the actual dataset before implementing dataset selection logic.



Do not invent labels.



Do not assume folder structures.



Do not hard-code severity categories until the dataset has been inspected.



\---



\# Architecture



Prefer:



Next.js

TypeScript

React

Tailwind

Supabase

PostgreSQL

Vercel



Avoid unnecessary services.



Do not introduce a separate backend unless technically necessary.



\---



\# Database



All patient and screening records must be associated with the authenticated doctor.



Use Row Level Security.



Doctors must not access another doctor's records.



\---



\# UI



Follow design.md.



Use glassmorphism.



Keep the interface professional and medical.



Do not over-design the dashboard.



\---



\# Development



Build incrementally.



Implement:



1\. Foundation

2\. Authentication

3\. Database

4\. Patient workflow

5\. Scanner

6\. Computer vision

7\. Dataset result flow

8\. Result page

9\. History

10\. Testing

11\. Deployment



\---



\# Testing



Test every major feature.



Do not consider a feature complete just because the code compiles.



Test:



\- authentication

\- route protection

\- patient creation

\- database authorization

\- camera permissions

\- eye detection

\- result selection

\- result rendering

\- responsive layout

\- deployment



\---



\# Dependencies



Do not install unnecessary packages.



Before introducing a major dependency, verify that it is actually required.



Prefer established, maintained packages.



\---



\# Secrets



Never expose secrets.



Never commit:



.env

real API keys

database passwords

service credentials



Use .env.local for local development.



Maintain .env.example with variable names only.



\---



\# Code Quality



Prefer:



\- readable code

\- modular components

\- clear naming

\- reusable components

\- typed interfaces

\- small functions

\- error handling



Avoid:



\- giant components

\- duplicated code

\- unnecessary abstraction

\- hard-coded secrets

\- unexplained magic values



\---



\# Documentation



Update documentation when architecture or important product decisions change.



Update memory.md with major implementation decisions.



\---



\# Git



Use meaningful commit messages.



Examples:



feat: implement doctor authentication



feat: add patient management



feat: implement camera scanner



feat: add dataset result flow



fix: resolve camera permission handling



docs: update architecture



\---



\# Deployment



The final project must be deployable through Vercel.



Ensure:



\- build succeeds

\- environment variables are documented

\- production configuration is correct

\- no development-only dependencies are required at runtime

