\# Coding Standards



\## Language



Use TypeScript.



Avoid JavaScript unless technically necessary.



Enable strict TypeScript checking.



\---



\# Naming



Components:



PascalCase



Example:



ScannerView.tsx



Functions:



camelCase



Example:



detectEye()



Variables:



camelCase



Constants:



UPPER\_SNAKE\_CASE when appropriate.



\---



\# Components



Keep components focused.



Avoid massive components.



Separate:



UI

logic

data access

validation



when complexity grows.



\---



\# Types



Prefer explicit types.



Avoid:



any



unless absolutely necessary.



Use interfaces/types for:



\- Patient

\- Doctor

\- Screening

\- DatasetImage

\- Result



\---



\# Error Handling



Handle errors explicitly.



Never silently swallow errors.



Provide user-friendly messages.



\---



\# Forms



Validate:



\- required fields

\- email

\- password

\- numeric values

\- age

\- patient data



Display useful validation errors.



\---



\# API



Validate inputs server-side.



Never trust client-side validation alone.



Return consistent responses.



\---



\# Database



Use typed database access.



Never construct unsafe SQL.



Use parameterized/database-client queries.



\---



\# React



Avoid unnecessary re-renders.



Use hooks appropriately.



Do not add useEffect unless necessary.



Keep client components limited to areas that actually require browser APIs.



\---



\# Camera



Camera functionality must run on the client.



Handle:



\- permission denied

\- no camera

\- browser errors

\- stream cleanup



Always stop camera streams when leaving the scanner.



\---



\# Accessibility



Use:



\- semantic HTML

\- labels

\- keyboard support

\- aria attributes when necessary

\- visible focus states



\---



\# Styling



Use Tailwind CSS consistently.



Do not create random styling systems.



Follow design.md.



\---



\# Comments



Write comments only when they explain non-obvious reasoning.



Do not comment obvious code.



\---



\# Testing



Tests should describe user behavior and expected results.



Prefer meaningful test names.



\---



\# Performance



Avoid unnecessary large dependencies.



Optimize images.



Lazy-load expensive components where appropriate.



Do not load the entire dataset into browser memory unnecessarily.

