import { headers } from "next/headers";
import { WebhookReceiver } from "livekit-server-sdk";

import { db } from "@/lib/db";

const receiver = new WebhookReceiver(
    process.env.LIVEKIT_API_KEY!,
    process.env.LIVEKIT_API_SECRET!,
);

export async function POST(req: Request) {
    const body = await req.text();
    const headerPayload = headers();
    const authorization = headerPayload.get("Authorization");

    if(!authorization) {
        return new Response("No authorization header", { status: 400 });
    }

    const event = receiver.receive(body, authorization);

    if(event.event === "ingress_started") {
        await db.stream.update({
            where: {
                ingressId: event.ingressInfo?.ingressId,
            },
            data: {
                isLive: true,
            },
        });

        return new Response("The user went Online with updated keys", { status: 201 });
    }

    if(event.event === "ingress_ended") {
        await db.stream.update({
            where: {
                ingressId: event.ingressInfo?.ingressId,
            },
            data: {
                isLive: false,
            },
        });

        return new Response("The user went Offline", { status: 202 });
    }

    return new Response("The user accessing streaming keys", { status: 203 });
}