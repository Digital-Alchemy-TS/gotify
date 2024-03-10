import { TContext } from "@digital-alchemy/core";

export const GOTIFY_NOTIFICATION_SENT = "GOTIFY_NOTIFICATION_SENT";
export type GotifyNotificationSentData = {
  application: string;
  context: TContext;
};
