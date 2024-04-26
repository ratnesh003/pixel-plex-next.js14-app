# Pixel Plex Next.js14 web App

Welcome to Pixel Plex, the web app designed for streaming enthusiasts and viewers alike. Our platform offers a user-friendly interface for seamless streaming and live stream viewing. Whether you're a content creator or a passionate viewer, Pixel Plex provides an intuitive experience to enjoy live streams effortlessly.

![thumbnail](</public/thumbnail.png>)

### Key Features :
- 📡 Streaming using RTMP / WHIP protocols 
- 🌐 Generating ingress
- 🔗 Connecting Next.js app to OBS / Your favorite streaming software 
- 🔐 Authentication 
- 📸 Thumbnail upload
- 👀 Live viewer count 
- 🚦 Live statuses 
- 💬 Real-time chat using sockets 
- 🎨 Unique color for each viewer in chat 
- 👥 Following system 
- 🚫 Blocking system 
- 👢 Kicking participants from a stream in real-time 
- 🎛️ Streamer / Creator Dashboard 
- 🐢 Slow chat mode 
- 🔒 Followers only chat mode 
- 📴 Enable / Disable chat 
- 🔽 Collapsible layout (hide sidebars, chat etc, theatre mode etc.) 
- 📚 Sidebar following & recommendations tab 
- 🏠 Home page recommending streams, sorted by live first 
- 🔍 Search results page with a different layout 
- 🔄 Syncing user information to our DB using Webhooks 
- 📡 Syncing live status information to our DB using Webhooks 
- 🤝 Community tab 
- 🎨 Beautiful design
- ⚡ Blazing fast application 
- 📄 SSR (Server-Side Rendering) 
- 🗺️ Grouped routes & layouts 
- 🗃️ MySQL
- 🚀 Deployment


### Tech Stack & API's :
- 🚀 Next.js 14
- 🎨 Shadcn/ui
- 🎨 Tailwind CSS
- 🔐 Clerk Auth
- 📸 UploadThing
- 📡 LiveKit
- 🌐 Ngrok
- 🗃️ Prisma
- 🗃️ MySql


### Cloning the repository
```
git clone https://github.com/ratnesh003/pixel-plex-next.js14-app.git
```


### Install packages
```
npm i
```


### Setup .env
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL=
CLERK_WEBHOOK_SECRET=

LIVEKIT_API_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_WS_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```


### Setup Prisma
Add MySQL Database (I used [**Aiven**](https://aiven.io/))
```
npx prisma db push
```


### Start the app
```
npm run dev
```