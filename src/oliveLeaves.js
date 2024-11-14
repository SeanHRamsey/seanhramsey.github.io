export const oliveLeaves = (canvas, ctx) => {
    const trees = [];
    const fireflies = [];
    const fog = [];

    // Initialize trees
    for (let i = 0; i < 20; i++) {
        trees.push({
            x: Math.random() * canvas.width,
            height: Math.random() * 200 + 100,
            width: Math.random() * 20 + 10,
        });
    }

    // Initialize fireflies
    for (let i = 0; i < 50; i++) {
        fireflies.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            speed: Math.random() * 0.5 + 0.1,
            opacity: Math.random(),
        });
    }

    // Initialize fog
    for (let i = 0; i < 100; i++) {
        fog.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 50 + 20,
            speed: Math.random() * 0.2 + 0.1,
        });
    }

    return () => {
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw trees
        ctx.fillStyle = '#1a1a1a';
        trees.forEach(tree => {
            ctx.beginPath();
            ctx.moveTo(tree.x, canvas.height);
            ctx.lineTo(tree.x - tree.width / 2, canvas.height - tree.height);
            ctx.lineTo(tree.x + tree.width / 2, canvas.height - tree.height);
            ctx.closePath();
            ctx.fill();
        });

        // Draw fog
        ctx.fillStyle = 'rgba(200, 200, 200, 0.05)';
        fog.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fill();

            particle.x += particle.speed;
            if (particle.x > canvas.width + particle.radius) {
                particle.x = -particle.radius;
            }
        });

        // Draw fireflies
        fireflies.forEach(firefly => {
            ctx.beginPath();
            ctx.arc(firefly.x, firefly.y, firefly.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 100, ${firefly.opacity})`;
            ctx.fill();

            firefly.x += Math.sin(Date.now() * 0.001) * firefly.speed;
            firefly.y += Math.cos(Date.now() * 0.001) * firefly.speed;
            firefly.opacity = Math.sin(Date.now() * 0.01) * 0.5 + 0.5;

            if (firefly.x < 0) firefly.x = canvas.width;
            if (firefly.x > canvas.width) firefly.x = 0;
            if (firefly.y < 0) firefly.y = canvas.height;
            if (firefly.y > canvas.height) firefly.y = 0;
        });
    };
};