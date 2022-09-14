import * as React from "react";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import Image from 'next/image'

export const Fullimage = ({ data, parentField }) => {
  return (
    <Section className={`${parentField === "blocks.0" ? "-mt-40" : ""}`}>
      <div>
        {data.image ? (
          data.image.src && (
            <div
              data-tinafield={`${parentField}.image`}
              className="row-start-1 flex justify-center"
            >
              <div className="w-auto max-w-none h-[582px] md:h-[640px] xl:h-[720px]">
                <Image
                  layout="fill"
                  className="object-cover"
                  alt={data.image.alt}
                  src={data.image.src}
                />
              </div>
            </div>
          )
        ) : null}
      </div>
    </Section>
  );
};

export const fullimageBlockSchema: TinaTemplate = {
  name: "fullimage",
  label: "FullImage",
  ui: {
    previewSrc: "/blocks/main.png",
  },
  fields: [
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
  ],
};
