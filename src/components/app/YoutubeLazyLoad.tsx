import { FC, useState } from "react";
import Image from "next/image";

export interface YoutubeLazyLoadProps {
    youtubeId: string,
    title?: string,
    thumbnailOverride?: string,
    className?: string,
}

export const YoutubeLazyLoadComponent: FC<YoutubeLazyLoadProps> = ({
    youtubeId,
    title,
    thumbnailOverride,
    className
}) => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div>
            {showVideo ? (
                <iframe
                    className={className}
                    src={`https://www.youtube.com/embed/${youtubeId}?&autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={true}
                ></iframe>
            ) : (

                <button type="button" onClick={() => setShowVideo(true)} className="group w-full relative aspect-[16/9]">
                    <Image
                        className="h-full w-full"
                        src={thumbnailOverride || `https://i3.ytimg.com/vi_webp/${youtubeId}/maxresdefault.webp`}
                        alt={""}
                        fill
                        priority
                        unoptimized={true}
                    />

                    <div className="relative grid place-items-center">
                        <Image
                            src="/youtube.svg"
                            alt=""
                            width={64}
                            height={64}
                            unoptimized={true}
                        />
                    </div>
                </button>
            )}
        </div>
    );
}