import { useRef } from "react";

const DraggableDiv: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ pos1: 0, pos2: 0, pos3: 0, pos4: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    pos.current.pos3 = e.clientX;
    pos.current.pos4 = e.clientY;
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
      className="border border-white absolute z-10"
      style={{ position: "absolute", top: "0px", left: "0px" }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

export default DraggableDiv;
