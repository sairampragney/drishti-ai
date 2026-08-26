# DrishtiAI Implementation Notes

## Runtime mode

The application runs in demo mode when Supabase environment variables are absent. Demo records are synthetic and are kept in `src/lib/demo-data.ts`. When Supabase is configured, the browser client, authentication form, middleware, SQL migration, and RLS policies provide the live integration path.

## Dataset architecture

APTOS remains a result/label source and mBRSET remains the prototype image source. They are represented as separate source values and are never joined. The checked-in demo manifest contains representative mBRSET metadata; `scripts/build-dataset-manifest.mjs` can generate a complete local manifest from `DATASET_ROOT` without modifying the original ZIP.

## Storage

Local image access is configured with `DATASET_ROOT`. Production storage is intentionally configuration-driven through `DATASET_IMAGE_BASE_URL` and a future Supabase Storage bucket. The bucket name, URL, and redistribution permission are deployment values that must be supplied later.

## Computer vision

The selected client-side library is `@mediapipe/tasks-vision`. The scanner currently owns camera permission, stream lifecycle, and the eye-detection state boundary; the detector adapter remains replaceable. It never produces a medical classification.

## Database and RLS

The initial migration uses `profiles`, `patients`, `dataset_images`, and `screenings`. Dataset images are readable to authenticated users. Patient and screening rows are restricted to the owning doctor with `auth.uid()`. The migration must be applied and integration-tested against the supplied Supabase project before production use.

## Deployment values

Provide `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `DATASET_ROOT` for local image access, and `DATASET_IMAGE_BASE_URL` for deployed image access through `.env.local` or Vercel environment settings. Never provide a service-role key to browser code.