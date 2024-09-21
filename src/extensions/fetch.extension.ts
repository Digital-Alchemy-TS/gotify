import { TServiceParams } from "@digital-alchemy/core";

export function GotifyFetch({ context, config, lifecycle, gotify }: TServiceParams) {
  const fetcher = gotify.internal({ context });

  lifecycle.onPostConfig(() => {
    fetcher.base_url = config.gotify.BASE_URL;
    fetcher.base_headers = { ["X-Gotify-Key"]: config.gotify.TOKEN };
  });

  return fetcher.exec;
}
