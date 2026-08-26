create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null,
  email text not null,
  clinic text not null,
  location text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.patients (
  id uuid primary key default gen_random_uuid(),
  doctor_id uuid not null references public.profiles(id) on delete cascade,
  patient_code text not null,
  name text not null,
  age integer not null check (age between 1 and 120),
  gender text not null,
  diabetes_duration text not null,
  diabetes_information text,
  created_at timestamptz not null default now(),
  unique (doctor_id, patient_code)
);

create table if not exists public.dataset_images (
  id text primary key,
  dataset_source text not null check (dataset_source in ('aptos', 'mbrset')),
  original_filename text not null,
  image_path text not null,
  original_folder text,
  content_hash text,
  source_label text,
  prototype_category text,
  severity text,
  metadata jsonb not null default '{}'::jsonb
);

create table if not exists public.screenings (
  id uuid primary key default gen_random_uuid(),
  doctor_id uuid not null references public.profiles(id) on delete cascade,
  patient_id uuid not null references public.patients(id) on delete restrict,
  dataset_image_id text not null references public.dataset_images(id) on delete restrict,
  display_label text not null,
  display_status text not null default 'prototype_result',
  result_explanation text not null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.patients enable row level security;
alter table public.dataset_images enable row level security;
alter table public.screenings enable row level security;

create policy "profiles are owner readable" on public.profiles for select using (auth.uid() = id);
create policy "profiles are owner editable" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "patients are owner readable" on public.patients for select using (auth.uid() = doctor_id);
create policy "patients are owner writable" on public.patients for all using (auth.uid() = doctor_id) with check (auth.uid() = doctor_id);
create policy "dataset images are authenticated readable" on public.dataset_images for select to authenticated using (true);
create policy "screenings are owner readable" on public.screenings for select using (auth.uid() = doctor_id);
create policy "screenings are owner writable" on public.screenings for all using (auth.uid() = doctor_id) with check (auth.uid() = doctor_id);

create or replace function public.create_profile_on_signup()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, name, email, clinic, location)
  values (new.id, coalesce(new.raw_user_meta_data->>'name', ''), new.email, coalesce(new.raw_user_meta_data->>'clinic', ''), coalesce(new.raw_user_meta_data->>'location', ''));
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.create_profile_on_signup();