create table if not exists public.mono_chat_messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  display_name text not null check (char_length(btrim(display_name)) between 1 and 24),
  content text not null check (char_length(btrim(content)) between 1 and 1000),
  created_at timestamptz not null default now()
);

create index if not exists mono_chat_messages_created_at_idx
  on public.mono_chat_messages (created_at desc);

alter table public.mono_chat_messages enable row level security;

drop policy if exists mono_chat_messages_read on public.mono_chat_messages;
create policy mono_chat_messages_read
  on public.mono_chat_messages
  for select
  to authenticated
  using (true);

drop policy if exists mono_chat_messages_send on public.mono_chat_messages;
create policy mono_chat_messages_send
  on public.mono_chat_messages
  for insert
  to authenticated
  with check (user_id = (select auth.uid()));

grant usage on schema public to authenticated;
grant select, insert on public.mono_chat_messages to authenticated;

do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'mono_chat_messages'
  ) then
    alter publication supabase_realtime add table public.mono_chat_messages;
  end if;
end
$$;
