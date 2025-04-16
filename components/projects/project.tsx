"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Review from "../reviews/review";

function ProjectPreview<
  PropsType extends {
    show: boolean;
    children: React.ReactNode;
    hide: () => void;
  }
>(props: PropsType) {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (props.show) dialog.current?.showModal();
  }, [props.show]);

  const markup = (
    <dialog
      ref={dialog}
      onClose={props.hide}
      onClick={(e: React.MouseEvent) => {
        const targetEl = e.target as HTMLElement;
        const parentDialogEl = targetEl.closest("dialog");

        if (parentDialogEl === targetEl) props.hide();
      }}
      className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded focus:outline-none bg-[var(--theme-color-background-tint)] text-[var(--theme-color-text)]"
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
        className="aspect-square rounded-xl relative overflow-hidden font-semibold text-xl"
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
        <ProjectPreview
          show={selected}
          hide={() => {
            setSelected(false);
          }}
        >
          <div className="grid grid-cols-[2fr_3fr] gap-4">
            <div className="relative w-full aspect-[9/16] ">
              <Image
                src={image}
                alt={name}
                className="w-full h-full object-cover object-center rounded"
                fill
                priority
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="z-10 text-xl text-[var(--theme-color-accent)]">
                {name}
              </h2>
              <p className="text-gray-400 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo sint inventore nemo, maxime autem, quia incidunt
                asperiores ducimus temporibus in, reprehenderit amet quos
                debitis quis corporis sit molestiae id molestias!
              </p>
              <div className="relative border rounded border-[var(--theme-color-accent)] p-2">
                <h3 className="absolute top-0 left-8 -translate-y-1/2 bg- text-lg text-[var(--theme-color-accent)] bg-[var(--theme-color-background-tint)] z-0 px-1">
                  Technologies
                </h3>
                <ul className="flex flex-wrap gap-4 z-50">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                  <li>NEXTJs</li>
                  <li>REACT</li>
                </ul>
              </div>
              <Review
                date="02/03/2025"
                name="Allen Smith"
                value="A masterpiece!"
              />
            </div>
          </div>
        </ProjectPreview>
      )}
    </>
  );
};

export default Project;
