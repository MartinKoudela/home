type GithubEvent = { type: string; created_at: string; repo: { name: string } };

let cached: Promise<GithubEvent | undefined> | undefined;

function ago(date: Date): string {
  const minutes = Math.round((Date.now() - date.getTime()) / 60000);
  if (minutes < 60) return `${Math.max(minutes, 1)} min ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} h ago`;
  const days = Math.round(hours / 24);
  return days < 60 ? `${days} d ago` : "";
}

function lastPush(user: string): Promise<GithubEvent | undefined> {
  cached ??= fetch(`https://api.github.com/users/${user}/events/public?per_page=30`)
    .then((response) => (response.ok ? response.json() : []))
    .then((events: GithubEvent[]) => events.find((event) => event.type === "PushEvent"))
    .catch(() => undefined);
  return cached;
}

document.addEventListener("astro:page-load", async () => {
  const row = document.querySelector<HTMLElement>("[data-last-push]");
  if (!row) return;

  const event = await lastPush(row.dataset.lastPush!);
  if (!event) return;

  const when = ago(new Date(event.created_at));
  if (!when) return;

  const link = row.querySelector("a")!;
  link.textContent = event.repo.name.split("/")[1];
  link.href = `https://github.com/${event.repo.name}`;
  row.querySelector("span")!.textContent = when;
  row.hidden = false;
});
