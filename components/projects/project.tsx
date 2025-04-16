"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function ProjectPreview<
  PropsType extends { show: boolean; children: React.ReactNode }
>(props: PropsType) {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (props.show) dialog.current?.showModal();
  }, [props.show]);

  const markup = (
    <dialog
      ref={dialog}
      className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded focus:outline-none bg-black text-[var(--theme-color-text)]"
    >
      {props.children}
    </dialog>
  );

  return createPortal(markup, document.getElementById("modal")!);
}

const Project: React.FC<{ image: string; name: string }> = ({
  image,
  name,
}) => {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setSelected(true);
        }}
        className="bg-black aspect-square rounded-xl relative overflow-hidden font-semibold text-xl"
      >
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
          fill
          priority
        />
        <p className="w-min absolute left-4 max-sm:left-1.5 bottom-4 max-sm:bottom-1.5">
          {name}
        </p>
      </div>
      {selected && (
        <ProjectPreview show={selected}>
          <div className="grid grid-cols-[auto_1fr] gap-4">
            <div className="relative h-96 w-48 aspect-auto ">
              <Image
                src={image}
                alt={name}
                className="w-full h-full object-cover object-center rounded"
                fill
                priority
              />
            </div>
            <div>
              <h2 className="z-10 mb-2 text-xl text-[var(--theme-color-accent)]">
                {name}
              </h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo sint inventore nemo, maxime autem, quia incidunt
                asperiores ducimus temporibus in, reprehenderit amet quos
                debitis quis corporis sit molestiae id molestias!
              </p>
            </div>
          </div>
        </ProjectPreview>
      )}
    </>
  );
};

export default Project;
