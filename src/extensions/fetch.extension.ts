import { TServiceParams } from "@digital-alchemy/core";

export function GotifyFetch({
  context,
  config,
  lifecycle,
  internal,
}: TServiceParams) {
  const fetcher = internal.boilerplate.fetch({ context });

  lifecycle.onPostConfig(() => {
    fetcher.setBaseUrl(config.gotify.BASE_URL);
    fetcher.setHeaders({ ["X-Gotify-Key"]: config.gotify.TOKEN });
  });

  return fetcher.fetch;
}
