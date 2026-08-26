\# Security Rules



\## Authentication



Use Supabase Auth.



Protect authenticated routes.



Never trust authentication state from the client alone.



\---



\# Authorization



Every database query involving patient or screening information must respect ownership.



A doctor can only access records belonging to that doctor.



Use Supabase Row Level Security.



\---



\# Secrets



Never put secrets in:



\- source code

\- Git

\- GitHub

\- frontend JavaScript

\- public environment variables



Never commit:



.env

.env.local



\---



\# Environment Variables



Use:



.env.local



for development.



Maintain:



.env.example



without real credentials.



\---



\# Supabase



Never expose the Supabase service-role key to the browser.



Use it only in secure server-side contexts when absolutely necessary.



\---



\# Input Validation



Validate all:



\- forms

\- API requests

\- database input

\- URL parameters



\---



\# XSS



Do not render unsanitized user-controlled HTML.



Avoid dangerouslySetInnerHTML unless absolutely necessary and sanitized.



\---



\# File Handling



Do not accept arbitrary executable files.



Validate image types when handling images.



\---



\# Camera



Request only camera permissions necessary for the scanner.



Stop camera streams after scanning.



\---



\# Patient Data



Use synthetic patient information during development.



Do not use real patient information for demonstrations.



Minimize stored information.



\---



\# Logging



Never log:



\- passwords

\- API keys

\- access tokens

\- sensitive patient information



\---



\# Dependencies



Keep dependencies updated.



Avoid suspicious or unmaintained packages.



\---



\# Production



Before deployment verify:



\- no secrets in Git

\- authentication works

\- authorization works

\- RLS policies work

\- production environment variables exist

\- debug logs are disabled

\- prototype disclaimer is visible

