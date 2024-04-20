import { useParticipants } from "@livekit/components-react";
import { Check } from "lucide-react";

export const VerifiedMark = () => {
    return (
        <div className="p-0.5 flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 border-white border-2">
            <Check className="h-[15px] w-[15px] text-primary stroke-[4px]" />
        </div>
    );
};