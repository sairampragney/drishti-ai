# DrishtiAI First Demo

## Runtime mode

This version intentionally uses no Supabase, PostgreSQL, external authentication, or external authentication API. Demo accounts, the active session, synthetic patient records, and saved screenings use browser storage.

Predefined accounts are `sathwik@gmail.com` (Dr. Sathwik), `madhurima@gmail.com` (Dr. Madhurima), and `sairampragney@gmail.com` (Dr. Sairam Pragney). The exact passwords are configured in the local auth module and are never displayed by the application. Signup creates a browser-local account.

## Dataset architecture

APTOS remains a separate reference CSV and is never joined to mBRSET. The archive images are packaged under `public/dataset/mbrset`; `public/dataset/mbrset-manifest.json` records each image's actual folder. Result selection randomizes an image entry only and derives its neutral label as `mBRSET Class 0` through `mBRSET Class 4` from that entry's folder.

## Computer vision

The scanner uses `@mediapipe/tasks-vision` locally in the browser with WASM files in `public/models/mediapipe` and the Face Landmarker task in `public/models/face_landmarker.task`. It requests the camera, detects a face, estimates both eye landmark groups, draws two black boxes, and enables results only after detection. It does not diagnose diabetic retinopathy.

## Local storage

The local session key is `drishti-demo-session`; accounts use `drishti-demo-accounts`; saved screenings use `drishti-demo-screenings`. Clearing browser storage resets the demo.

## Future integration

Supabase and PostgreSQL can be added later behind a data-access boundary. They are not part of this first demo and no credentials are required.
