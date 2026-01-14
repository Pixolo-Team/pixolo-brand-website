import { animate, inView } from "motion";
import Matter from "matter-js";

/** Tech Interactive Section Animation */
export const animateTechInteractiveSection = () => {
  inView("#tech-interactive-section", (techInteractiveSection) => {
    // Header animation
    animate(
      techInteractiveSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8 },
    );

    animate(
      techInteractiveSection?.querySelectorAll(".header-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    // Stats animation
    const stats = techInteractiveSection.querySelectorAll<HTMLElement>(".tech-stat");

    stats.forEach((stat, index) => {
      inView(
        stat,
        () => {
          animate(
            stat,
            { opacity: [0, 1], y: [200, 0] },
            { duration: 0.6, delay: index * 0.12, easing: "ease-out" },
          );
        },
        { margin: "-10% 0px -10% 0px" },
      );
    });
  });
};

/** Gravity Tech Badge Physics */
export const animateGravityEffect = () => {
  const container = document.getElementById("tech-badge-container");
  if (!container) return;

  // Keep container non-blocking for scroll
  container.style.pointerEvents = "none";

  let gravityInitialized = false;

  inView(container, () => {
    if (gravityInitialized) return;
    gravityInitialized = true;

    const badges = container.querySelectorAll<HTMLElement>(".tech-badge-wrapper");
    if (!badges.length) return;

    const { Engine, Runner, Bodies, Composite, Events, Mouse, MouseConstraint } = Matter;

    const engine = Engine.create();
    const world = engine.world;
    const runner = Runner.create();

    let width = container.clientWidth;
    let height = container.clientHeight;

    // Physics tuning
    world.gravity.y = 1.2;

    const wallOptions = { isStatic: true, render: { visible: false } };
    const wallThickness = 200;

    let walls: Matter.Body[] = [];

    const createWalls = () => [
      // Ground
      Bodies.rectangle(
        width / 2,
        height + wallThickness / 2,
        width + 1000,
        wallThickness,
        wallOptions,
      ),

      // Left wall
      Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 3, wallOptions),

      // Right wall
      Bodies.rectangle(
        width + wallThickness / 2,
        height / 2,
        wallThickness,
        height * 3,
        wallOptions,
      ),
    ];

    // Add walls
    walls = createWalls();
    Composite.add(world, walls);

    // Create badge bodies
    const bodies: Matter.Body[] = [];
    const spacing = width / badges.length;

    badges.forEach((badge, index) => {
      const rect = badge.getBoundingClientRect();
      const badgeWidth = rect.width || 120;
      const badgeHeight = rect.height || 50;

      const x = spacing * index + spacing / 2;
      const y = -Math.random() * 400 - 100;

      const body = Bodies.rectangle(x, y, badgeWidth, badgeHeight, {
        chamfer: { radius: badgeHeight / 2 },
        restitution: 0.5,
        friction: 0.1,
        density: 0.2,
        render: { visible: false },
      });

      (body as any).domElement = badge;
      bodies.push(body);
    });

    Composite.add(world, bodies);

    // Desktop drag only
    const isTouch = "ontouchstart" in window;

    if (!isTouch) {
      // Enable pointer events on badges only, not container
      badges.forEach((badge) => {
        badge.style.pointerEvents = "auto";
      });

      const mouse = Mouse.create(container);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: 0.2,
          render: { visible: false },
        },
      });

      Composite.add(world, mouseConstraint);
    }

    // Sync DOM with physics
    Events.on(engine, "afterUpdate", () => {
      bodies.forEach((body) => {
        const el = (body as any).domElement as HTMLElement;
        if (!el) return;

        const { x, y } = body.position;
        const angle = body.angle;

        const w = el.offsetWidth;
        const h = el.offsetHeight;

        el.style.transform = `translate(${x - w / 2}px, ${y - h / 2}px) rotate(${angle}rad)`;
        el.style.opacity = "1";
      });
    });

    // Start engine
    Runner.run(runner, engine);

    // Resize handling
    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;

      Composite.remove(world, walls);
      walls = createWalls();
      Composite.add(world, walls);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      Runner.stop(runner);
      Engine.clear(engine);
      window.removeEventListener("resize", handleResize);
    };
  });
};
