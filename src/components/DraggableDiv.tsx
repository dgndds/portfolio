import { useRef } from "react";
import { twMerge } from "tailwind-merge";

const DraggableDiv: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ pos1: 0, pos2: 0, pos3: 0, pos4: 0 });

  const isDraggable = (element: HTMLElement | null): boolean => {
    while (element) {
      if (element.getAttribute("data-draggable") === "true") {
        return true;
      }
      element = element.parentElement;
    }
    return false;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isDraggable(e.target as HTMLElement)) {
      return;
    }

    e.preventDefault();
    pos.current.pos3 = e.clientX;
    pos.current.pos4 = e.clientY;

    // Bring the dragged element to the front with a bounded zIndex
    if (divRef.current && divRef.current.parentElement) {
      const siblings = Array.from(divRef.current.parentElement.children);
      const baseZIndex = 10;
      const maxZIndex = baseZIndex + siblings.length - 1;

      siblings.forEach((el) => {
        const currentZIndex =
          parseInt(window.getComputedStyle(el).zIndex) || baseZIndex;
        if (currentZIndex > baseZIndex) {
          (el as HTMLElement).style.zIndex = (currentZIndex - 1).toString();
        }
      });

      divRef.current.style.zIndex = maxZIndex.toString();
    }

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  };

  const elementDrag = (e: MouseEvent) => {
    e.preventDefault();
    pos.current.pos1 = pos.current.pos3 - e.clientX;
    pos.current.pos2 = pos.current.pos4 - e.clientY;
    pos.current.pos3 = e.clientX;
    pos.current.pos4 = e.clientY;

    if (divRef.current && divRef.current.parentElement) {
      const parentRect = divRef.current.parentElement.getBoundingClientRect();
      const divRect = divRef.current.getBoundingClientRect();

      let newTop = divRef.current.offsetTop - pos.current.pos2;
      let newLeft = divRef.current.offsetLeft - pos.current.pos1;

      // Constrain within parent's boundaries
      newTop = Math.max(
        0,
        Math.min(newTop, parentRect.height - divRect.height)
      );
      newLeft = Math.max(
        0,
        Math.min(newLeft, parentRect.width - divRect.width)
      );

      divRef.current.style.top = `${newTop}px`;
      divRef.current.style.left = `${newLeft}px`;
    }
  };

  const closeDragElement = () => {
    document.onmouseup = null;
    document.onmousemove = null;
  };

  return (
    <div
      ref={divRef}
      className={twMerge("absolute z-10", className)}
      style={{ position: "absolute", top: "0px", left: "0px" }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

export default DraggableDiv;
