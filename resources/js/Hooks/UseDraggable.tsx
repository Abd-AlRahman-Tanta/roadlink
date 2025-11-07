import { MouseEvent, useState } from "react";

export const useDraggable = (elementId: string) => {
  // Drag Edit Container
  const [dragStartPosition, setDragStartPosition] = useState({
    x: 0,
    y: 0,
    draggedX: 0,
    draggedY: 0,
  });

  const startDragging = (e: MouseEvent) => {
    setDragStartPosition((curr) => ({
      ...curr,
      x: e.clientX,
      y: e.clientY,
    }));
  };

  const dragElement = (e: MouseEvent) => {
    if (dragStartPosition.x == 0) return;

    const draggedX = e.clientX - dragStartPosition.x;
    const draggedY = e.clientY - dragStartPosition.y;

    const draggable = document.getElementById(elementId) as HTMLElement;
    draggable.style.transform = `translate(${
      dragStartPosition.draggedX + draggedX
    }px, ${dragStartPosition.draggedY + draggedY}px)`;
  };

  const stopDragging = () => {
    const draggable = document.getElementById(elementId) as HTMLElement;
    const style = window.getComputedStyle(draggable);
    const matrix = new DOMMatrixReadOnly(style.transform);
    setDragStartPosition({
      x: 0,
      y: 0,
      draggedX: matrix.m41,
      draggedY: matrix.m42,
    });
  };

  return { startDragging, dragElement, stopDragging };
};
