import { TServiceParams } from "@digital-alchemy/core";

import { Message } from "..";

export function GotifyMessage({ logger, gotify }: TServiceParams) {
  return {
    async create({ appid, ...body }: Message): Promise<Message> {
      logger.trace(`message create`);
      return await gotify.fetch({
        body,
        method: "post",
        params: { token: appid },
        url: "/message",
      });
    },

    async delete(id: number) {
      logger.trace(`message delete`);
      return await gotify.fetch({
        method: "delete",
        url: `/message/${id}`,
      });
    },

    async deleteAll() {
      logger.trace(`message deleteAll`);
      return await gotify.fetch({
        method: "delete",
        url: `/message`,
      });
    },

    async list(): Promise<Message> {
      logger.trace(`message list`);
      return await gotify.fetch({
        url: "/message",
      });
    },
  };
}
