# 📨 Welcome to the Gotify Adapter Library

- Extended docs: https://docs.digital-alchemy.app/Gotify
- Discord: https://discord.digital-alchemy.app

This library acts as a simple set of REST adapters for Gotify, primarily used for emitting messages from your application.

## ⚙️ Configuration

- **`BASE_URL`**: Target server for API.
- **`CHANNEL_MAPPING`**: Map tokens to friendly names to use within the application.

```ini
[gotify.CHANNEL_MAPPING]
  app_name=token
  another_app=token
  app_the_third=token
```

- **`TOKEN`**: Application token.

## 🛠 Services

- **`application`**
- **`client`**
- **`message`**

## 🌐 Multi-channel Type-friendly Messages

> Create a wrapper to send messages from a particular application, using the correct credentials, and quick to type.

```typescript
enum MyGotifyApps {
  testing = "testing",
  reminders = "reminders",
}

export function MyGotifyServices({ gotify, config }: TServiceParams) {
  return {
    ...(Object.fromEntries(
      Object.values(MyGotifyApps).map(i => [
        i,
        async (message: Message) => {
          await gotify.message.create({
            ...message,
            appid: config.gotify.CHANNEL_MAPPING[i],
          });
        },
      ]),
    ) as Record<`${MyGotifyApps}`, (message: Message) => Promise<void>>),
  };
}
```

> Send messages:

```typescript
export function MyService({ app, lifecycle, internal }: TServiceParams) {
  lifecycle.onReady(async() => {

    await app.gotify.reminders({
      message: `Failed to create countdown timer for ${internal.utils.relativeDate(target)}`,
    });
  })
}
```
