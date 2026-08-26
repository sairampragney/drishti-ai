\# Testing Rules



\## General



Every major feature must be tested before being considered complete.



\---



\# Authentication Tests



Verify:



\- signup works

\- login works

\- invalid credentials fail

\- protected routes redirect unauthenticated users

\- logout works



\---



\# Patient Tests



Verify:



\- patient creation

\- validation

\- patient retrieval

\- ownership

\- editing where supported



\---



\# Scanner Tests



Verify:



\- camera permission request

\- camera success

\- camera denial

\- camera unavailable

\- scan state

\- eye detection state

\- camera cleanup



\---



\# Result Tests



Verify:



\- Show Results cannot be used before detection

\- dataset image selection works

\- dataset metadata matches image

\- result displays correctly

\- screening is saved



\---



\# Security Tests



Verify:



\- doctor cannot access another doctor's patient

\- doctor cannot access another doctor's screening

\- service-role credentials are not exposed

\- environment variables are protected



\---



\# UI Tests



Verify:



\- desktop

\- tablet

\- mobile

\- keyboard navigation

\- error states

\- loading states

\- empty states



\---



\# Build Tests



Before deployment run:



npm run lint

npm run build

npm test



Use the project's actual configured commands if they differ.



\---



\# Deployment Verification



After Vercel deployment verify:



\- homepage

\- authentication

\- dashboard

\- scanner

\- result flow

\- database

\- production environment variables

