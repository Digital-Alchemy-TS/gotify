import { CreateLibrary } from "@digital-alchemy/core";

import { FetchInternals, GotifyApplication, GotifyClient, GotifyFetch } from "./extensions";
import { GotifyMessage } from "./extensions";

export const LIB_GOTIFY = CreateLibrary({
  configuration: {
    BASE_URL: {
      description: "Base URL for server",
      required: true,
      type: "string",
    },
    CHANNEL_MAPPING: {
      default: {},
      description: "Mapping of application names to tokens. Keep your keys out of the code!",
      type: "record",
    },
    TOKEN: {
      description: "Application token",
      required: true,
      type: "string",
    },
  },
  name: "gotify",
  services: {
    application: GotifyApplication,
    client: GotifyClient,
    fetch: GotifyFetch,
    internal: FetchInternals,
    message: GotifyMessage,
  },
});

declare module "@digital-alchemy/core" {
  export interface LoadedModules {
    /**
     * a simple api for a simple notification service
     *
     * https://gotify.net
     */
    gotify: typeof LIB_GOTIFY;
  }
}
