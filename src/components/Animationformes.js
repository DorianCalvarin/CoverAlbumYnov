import React, { useRef, useEffect } from "react";

function MyCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 600;

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);  // efface le canvas

      // met à jour la position des formes ici

      // dessine les formes ici
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);  // dessine un cercle
      ctx.fill();

      ctx.fillStyle = "blue";
      ctx.fillRect(x, y, width, height);  // dessine un rectangle

      ctx.fillStyle = "green";
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.fill();  // dessine un triangle
    }

    function animate() {
      update();
      requestAnimationFrame(animate);
    }
    animate();  // démarre l'animation
  }, []);  // exécute l'effet une seule fois

  return <canvas ref={canvasRef} />;
}
