"use client";

import { useSidebar } from "@/store/use-sidebar";

import { User } from "@prisma/client"
import { UserItem, UserItemSkeleton } from "./user-item";

interface RecommendedProps {
    data: (User & {
        stream: { isLive: boolean } | null;
    })[];
};

export const Recommended = ({
    data,
} : RecommendedProps) => {
    const {
        collapsed
    } = useSidebar((state) => state);

    console.log(data.length);

    const showLable = !collapsed && data.length > 0;

    return (
        <div>
            {showLable &&(
                <div className="pl-6 mb-4">
                    <p className="text-sm text-muted-foreground">
                        Recommended
                    </p>
                </div>
            )}
            <ul className="space-y-2 px-2">
                {data.map((user) => (
                    <UserItem 
                        key={user.id}
                        username={user.username}
                        imageUrl={user.imageUrl}
                        isLive={user.stream?.isLive}
                    />
                ))}
            </ul>
        </div>
    );
};

export const RecommendedSkeleton = () => {
    return (
        <ul>
            {[...Array(3)].map((_, i) => (
                <UserItemSkeleton key={i} />
            ))}
        </ul>
    );
};