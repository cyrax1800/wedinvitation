import Image from "next/image";
import { FC } from "react";

interface NextImageProp {
    url: string;
    placeholderUrl?: string;
    width: number;
    height: number;
    objectFit?: string;
}

export const NextImage: FC<NextImageProp> = ({
    url,
    placeholderUrl,
    width,
    height,
    objectFit = "cover"
}) => {

    var imageProps = {
        src: url,
        alt: url,
        // width: width,
        // height: height,
        objectFit: objectFit,
        // blurDataURL: placeholderUrl,
        fill: width == 0 && height == 0
    }

    return (
        <div className="w-full h-auto relative">
            <Image 
                {...imageProps}
                // {...(placeholderUrl ? { placeholder: "blur" } : {})}
                // sizes="100vw"
                // style={{
                //     width: '100%',
                //     height: 'auto',
                // }}
                unoptimized />
        </div>
    );
}