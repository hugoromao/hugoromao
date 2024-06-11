'use client';

import React, { useEffect, useRef, useState } from 'react';

const Mnist = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [numberPredicted, setNumberPredicted] = useState<
    number | undefined
  >();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (canvas && ctx) {
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 0.8;
      ctxRef.current = ctx;
    }
  }, []);

  const startDrawing = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    ctxRef.current?.beginPath();
    ctxRef.current?.moveTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );
    setIsDrawing(true);
  };

  const endDrawing = async () => {
    ctxRef.current?.closePath();
    setIsDrawing(false);

    const data = ctxRef.current?.getImageData(0, 0, 28, 28).data;
    if (data !== undefined) {
      const pixels = Array.from(data);
      const rgb784 = pixels.filter(
        (_, index) => (index + 1) % 4 === 0
      );
      const response = await fetch(`${process.env.NEXT_PUBLIC_APIS_URL}/mnist/predict`, {
        method: 'POST',
        body: JSON.stringify(rgb784)
      }).then(r => r.json());
      setNumberPredicted(response.prediction);
    }
  };

  const draw = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    if (!isDrawing) {
      return;
    }
    ctxRef.current?.lineTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );

    ctxRef.current?.stroke();
  };

  const clearCanvas = () => {
    const ctx = ctxRef.current;
    if (ctx && canvasRef.current) {
      ctx.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex h-[280px] w-[280px] items-center justify-center">
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          ref={canvasRef}
          width={`28px`}
          height={`28px`}
          style={{
            transform: 'scale(10)',
            border: '0.5px solid black'
          }}
          className="border-black bg-white"
        />
      </div>

      <button onClick={clearCanvas}>Clean</button>

      <strong>{numberPredicted}</strong>
    </div>
  );
};

export default Mnist;
