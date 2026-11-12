-- Public reads and writes are enabled for a small friends-only site. The
-- password in Mono's UI is only a convenience lock and is not authorization.
create table if not exists public.mono_announcements (
  id smallint primary key default 1 check (id = 1),
  message text not null check (char_length(btrim(message)) between 1 and 500),
  active boolean not null default true,
  updated_at timestamptz not null default now(),
  sahur_attack_id uuid
);

alter table public.mono_announcements
  add column if not exists sahur_attack_id uuid;

insert into public.mono_announcements (id, message, active)
values (1, 'No announcement yet', false)
on conflict (id) do nothing;

alter table public.mono_announcements enable row level security;
revoke all on public.mono_announcements from anon, authenticated;
grant usage on schema public to anon, authenticated;
grant select, insert, update on public.mono_announcements to anon, authenticated;

drop policy if exists mono_announcements_public_read on public.mono_announcements;
create policy mono_announcements_public_read
  on public.mono_announcements
  for select
  to anon, authenticated
  using (true);

drop policy if exists mono_announcements_public_insert on public.mono_announcements;
create policy mono_announcements_public_insert
  on public.mono_announcements
  for insert
  to anon, authenticated
  with check (id = 1);

drop policy if exists mono_announcements_public_update on public.mono_announcements;
create policy mono_announcements_public_update
  on public.mono_announcements
  for update
  to anon, authenticated
  using (id = 1)
  with check (id = 1);
