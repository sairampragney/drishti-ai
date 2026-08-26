# DrishtiAI Architecture
 # DrishtiAI Architecture

## 1. Architecture Overview

DrishtiAI is a doctor-facing academic prototype. It uses a Next.js application with browser-based eye-image processing, Supabase authentication, and PostgreSQL data storage.

The architecture keeps these concerns separate:

```text
Browser
    |
    +-- Next.js UI and protected routes
    +-- Camera access and computer-vision processing
    +-- Prototype result presentation
             |
             +-- Next.js server logic
             +-- Supabase Auth
             +-- Supabase PostgreSQL
             +-- Approved dataset image storage
```

The computer-vision component detects or processes an eye image. It does not diagnose diabetic retinopathy, provide clinical accuracy, predict severity, or provide medical decision support.

Any displayed result must be identified as:

> Prototype dataset information, not a clinical diagnosis.

## 2. Technology Stack

### Frontend

- Next.js
- React
- TypeScript with strict checking
- Tailwind CSS

### Backend and data

- Next.js server functionality where appropriate
- Supabase Auth
- PostgreSQL through Supabase
- Supabase Row Level Security

### Computer vision

Use `@mediapipe/tasks-vision` with a browser-hosted face/eye detection model. It is lightweight enough for this prototype, runs client-side, and keeps the CV adapter replaceable. The selected model detects or processes an eye image only; it does not diagnose diabetic retinopathy.

### Hosting and source control

- Vercel
- Git and GitHub

No separate Python or Java backend, generative AI service, or unnecessary microservice is required for the current architecture.

## 3. Application Boundaries

### Image ingestion

Reads the approved archive image source and creates a validated image inventory. Ingestion must preserve original filenames, paths, folders, and source provenance.

### Image storage

Stores archive images only in an approved location after licensing and redistribution permission are verified. Local availability does not imply permission to upload or redistribute.

### Dataset metadata

Stores source-specific metadata without inventing relationships between datasets. APTOS metadata and archive-image metadata remain separate until a mapping is independently verified.

### Model and computer-vision processing

Runs browser camera access and eye detection/processing. It must not perform or claim disease diagnosis.

### Prototype result generation

Selects and displays a prototype dataset result using only validated metadata. Until label meanings are verified, use neutral terminology such as `Dataset Label`, `Prototype Category`, and `Unverified Dataset Result`.

### Authentication

Uses Supabase Auth and server-validated sessions for doctor accounts.

### Audit and history

Stores screening history associated with the authenticated doctor and selected synthetic patient. It must preserve the dataset source and original metadata used for the displayed prototype result.

### UI presentation

Provides the required doctor workflow and consistently presents the prototype disclaimer. It must not expose unverified medical category names.

## 4. User Flow

```text
Home
  -> Login / Signup
  -> Dashboard
  -> Create or select synthetic patient
  -> Start scan
  -> Camera activation
  -> Eye detection / processing
  -> Successful eye detection
  -> Show Results
  -> Select prototype image and validated source metadata
  -> Display prototype result and disclaimer
  -> Save screening
  -> Screening history
```

## 5. Dataset Sources and Provenance

### APTOS result/label source

`Aptos_dataset.csv` contains 3,662 records with these columns:

- `Image Name`
- `Label (0-4)`
- `types`

Its records are result/label metadata. The verified APTOS dataset classifications are:

| Label | APTOS dataset classification |
| --- | --- |
| `0` | No Diabetic Retinopathy |
| `1` | Mild Non-Proliferative Diabetic Retinopathy (Mild NPDR) |
| `2` | Moderate Non-Proliferative Diabetic Retinopathy (Moderate NPDR) |
| `3` | Severe Non-Proliferative Diabetic Retinopathy (Severe NPDR) |
| `4` | Proliferative Diabetic Retinopathy (PDR) |

These meanings describe the APTOS dataset classification associated with an APTOS record. They must be presented as `APTOS Dataset Classification`, not as a diagnosis of a real patient.

### Archive image source

`archive.zip` contains the prototype eye images. The verified archive structure is:

```text
mBRSET Data/
    0/
    1/
    2/
    3/
    4/
```

The archive folder numbers are verified mBRSET ICDR dataset metadata:

| Folder | mBRSET ICDR dataset classification |
| --- | --- |
| `0` | No diabetic retinopathy |
| `1` | Mild non-proliferative diabetic retinopathy |
| `2` | Moderate non-proliferative diabetic retinopathy |
| `3` | Severe non-proliferative diabetic retinopathy |
| `4` | Proliferative diabetic retinopathy |

These are mBRSET dataset labels. They must not be treated as a clinical diagnosis of a real patient or as APTOS labels.

### Current relationship status

The current evidence does not establish that archive images correspond to APTOS records or labels. There must be no foreign key or assumed relationship such as:

- archive image ID to `Aptos_dataset.csv` `Image Name`
- archive folder number to APTOS `Label (0-4)`

The datasets must not be described as compatible sources until that compatibility and mapping are independently verified and explicitly approved.

APTOS `source_label` is known for APTOS records and contains `0`, `1`, `2`, `3`, or `4` with the verified APTOS classifications above. mBRSET `source_label` may represent its verified folder label with the mBRSET ICDR classification above. An APTOS `source_label` must not be assigned to an archive image unless a reliable image-level relationship is established.

### Required provenance verification

Before joining the datasets, verify:

- authoritative source and documentation for each dataset
- image filename matching
- image count
- folder/category structure
- duplicate images
- missing images
- unmatched CSV records
- label consistency
- dataset licensing and redistribution permission

The validation output must be retained as provenance evidence. A failed or incomplete check must leave the datasets separate.

## 6. Dataset Validation and Import

Dataset validation is a required precondition for any image-to-label relationship. The validation process must:

1. Inspect the archive without altering the original ZIP.
2. Build an inventory of image paths, filenames, extensions, folders, and content hashes.
3. Parse APTOS CSV columns, row count, image names, labels, and dataset type.
4. Detect duplicate images and duplicate identifiers.
5. Compare filenames and approved identifiers only; do not use visual similarity as an unapproved mapping.
6. Report missing images, unmatched CSV records, count mismatches, and invalid labels.
7. Record the authority for every verified label/category meaning.
8. Require explicit approval before creating a relationship or importing joined metadata.

Until all required checks pass, store the sources in separate manifests. APTOS results may use `APTOS Dataset Classification`; mBRSET results may use `mBRSET ICDR Dataset Classification`. Both must be presented as dataset information, not as a patient diagnosis.

## 7. Screening Flow and Result Safety

The scanner requests camera permission, displays the camera stream, processes frames in the browser, reports eye-detection state, and cleans up camera tracks when finished or unmounted.

The `Show Results` action must require successful eye detection. Result generation may select a prototype image, but it must not imply that camera processing produced a medical classification. Result pages and saved screening records must display the prototype disclaimer.

## 8. Database Architecture

Only relationships supported by the current requirements should be implemented.

### `profiles`

```text
id                  authenticated user ID
name                doctor name
email               doctor email
clinic              clinic or hospital name
location            doctor location
created_at
```

### `patients`

```text
id
doctor_id           owner; references authenticated doctor
patient_code
name
age
gender
diabetes_duration
diabetes_information
created_at
```

### `dataset_images`

```text
id
dataset_source_id
original_filename
image_path
original_folder
content_hash
source_label
prototype_category
severity
metadata
```

For APTOS records, `source_label` is the verified source label `0` through `4`, and `severity` may contain the corresponding APTOS dataset classification listed above. For mBRSET images, `source_label` may contain the verified folder label `0` through `4`, `prototype_category` preserves the original folder category, and `severity` may contain the corresponding mBRSET ICDR dataset classification. These values remain dataset metadata and must not be presented as a patient diagnosis. No field in this table may imply an APTOS-to-archive relationship.

### `screenings`

```text
id
doctor_id           owner; references authenticated doctor
patient_id
dataset_image_id
dataset_source_id
display_label
display_status
result_explanation
created_at
```

`display_label`, `display_status`, and `result_explanation` must identify results as dataset information. APTOS results should use `APTOS Dataset Classification`; archive results should use `mBRSET ICDR Dataset Classification`. A screening must not store or display an invented clinical severity or imply a patient diagnosis.

### Unresolved schema items

The implementation uses four tables: `profiles`, `patients`, `dataset_images`, and `screenings`. `dataset_sources` is not a separate table because the source is a constrained field on `dataset_images`; static source facts remain in the versioned application manifest. PostgreSQL stores image metadata required by application queries. There is no foreign key between APTOS metadata and mBRSET images.

The following deployment details remain `UNVERIFIED / REQUIRES CONFIRMATION`:

1. Image storage path.
2. Storage bucket relationship.
3. Screening status vocabulary.

## 9. Authentication and Authorization

Supabase Auth will manage doctor signup, login, session handling, and logout. Server-side route and data access checks are required; client authentication state alone is not trusted.

Row Level Security ensures that a doctor can access only their own profile, patients, and screenings. Dataset image metadata is readable by authenticated users and contains no patient data. The migration in `supabase/migrations/0001_initial.sql` defines the initial policies and they must be integration-tested against the configured Supabase project.

## 10. Required Routes

Public:

```text
/
/login
/signup
```

Protected:

```text
/dashboard
/patients
/patients/new
/scan
/results/[id]
/history
/settings
```

## 11. Supabase Configuration Requirements

The following are deployment configuration values supplied through environment variables or the Supabase dashboard:

- Supabase project URL: deployment value required later
- Supabase anon/public key: deployment value required later
- authentication configuration: deployment setting required later
- email-confirmation policy: deployment setting required later
- Storage bucket configuration: deployment setting required later

Secrets must be provided through environment configuration and never hard-coded or committed. The application runs in demo mode when these values are absent.

## 12. Security and Medical Safety

- Use synthetic patient information during development and demonstration.
- Validate all client and server inputs.
- Enforce ownership with RLS.
- Do not expose service-role credentials in browser code.
- Do not log passwords, tokens, secrets, or unnecessary patient data.
- Do not accept arbitrary executable uploads.
- Validate image types if image handling is added.
- Avoid unsanitized HTML rendering.
- Preserve the prototype disclaimer across frontend, backend, database, and result flow.
- Do not claim clinical accuracy, screening accuracy, diagnosis, severity prediction, or medical decision support from these datasets alone.

## 13. Deployment

The target flow is:

```text
Local development -> Git -> GitHub -> Vercel -> Production
```

Before deployment, verify the build, authentication, RLS, camera behavior, computer vision behavior, dataset provenance, result disclaimer, responsive UI, and absence of secrets. Production environment values and Vercel configuration are deployment values required later.

## 14. Implementation Assumptions

1. The app uses verified APTOS and mBRSET metadata without joining the datasets.
2. Local demo mode uses the checked-in demo manifest and an environment-configured image root; production image storage is supplied through configuration.
3. Supabase configuration and email-confirmation behavior are deployment concerns.
4. The initial SQL migration is the working schema and remains subject to integration testing.
created_at