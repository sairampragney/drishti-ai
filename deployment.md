\# Deployment Rules



\## Target



Deploy the application using Vercel.



\---



\# Repository



The source repository is GitHub.



Recommended flow:



Local

&#x20;↓

Git

&#x20;↓

GitHub

&#x20;↓

Vercel



\---



\# Build



The application must successfully build before deployment.



Run:



npm run build



\---



\# Environment Variables



Configure required production environment variables in Vercel.



Never commit production secrets.



\---



\# Supabase



Production environment must contain the required Supabase configuration.



Verify:



\- Supabase URL

\- public/anon key

\- server-only credentials where required



\---



\# Database



Verify production database schema and Row Level Security policies.



\---



\# Deployment



Use Vercel's GitHub integration.



A push to the configured production branch should trigger deployment.



\---



\# Preview



Use preview deployments to test major changes before production.



\---



\# Production Checklist



Before production release:



\[ ] Build succeeds

\[ ] Authentication works

\[ ] Database works

\[ ] RLS works

\[ ] Camera works

\[ ] Computer vision works

\[ ] Dataset results work

\[ ] Result page works

\[ ] No secrets exposed

\[ ] Prototype disclaimer visible

\[ ] Mobile layout works

\[ ] Error handling works



\---



\# Rollback



If a production deployment breaks the application, use Vercel deployment history to revert to the last known-good deployment.

