document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-items .menu-word');
    const floatingArea = document.getElementById('floatingArea');

    const blockTexts = [
        "block_01 description: about this project",
        "history section: archive data access",
        "block_02 description: process technology controller",
        "detail section: ports/capsules system",
        "process section: on-system operations",
        "technology section: configurations",
        "size section: current metrics",
        "block_03 description: visual content",
        "pages section: info",
        "navigation section: system routing",
        "block_04 description: for purchase",
        "shop section: acquisition"
    ];

    const speed = 0.2;
    const maxOffset = 80;
    const maxXMovement = 60;
    const maxYMovement = 50;
    const verticalSpread = 60;

    menuItems.forEach((item, index) => {
        const floatingBlock = document.createElement('div');
        floatingBlock.className = 'floating-block';
        floatingBlock.textContent = blockTexts[index];

        const startX = 55 + Math.random() * 5;
        const startY = 20 + (verticalSpread * index / menuItems.length);

        floatingBlock.style.left = `${startX}vw`;
        floatingBlock.style.top = `${startY}vh`;

        const line = document.createElement('div');
        line.className = 'connection-line';

        floatingArea.appendChild(floatingBlock);
        floatingArea.appendChild(line);

        let currentX = startX;
        let currentY = startY;
        let dirX = (Math.random() - 0.5) * 0.1;
        let dirY = (Math.random() - 0.5) * 0.1;

        const updateLine = () => {
            const itemRect = item.getBoundingClientRect();
            const floatRect = floatingBlock.getBoundingClientRect();

            const startX = itemRect.right;
            const startY = itemRect.top + itemRect.height / 2;

            const endX = floatRect.left;
            const endY = floatRect.top + floatRect.height / 2;

            const length = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
            const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;

            line.style.width = `${length}px`;
            line.style.transform = `rotate(${angle}deg)`;
            line.style.left = `${startX}px`;
            line.style.top = `${startY}px`;
        };

        const animateBlock = () => {
            if (Math.random() < 0.01) dirX = (Math.random() - 0.5) * 0.07;
            if (Math.random() < 0.01) dirY = (Math.random() - 0.5) * 0.07;

            currentX += dirX;
            currentY += dirY;

            if (currentX < 50) { currentX = 50; dirX *= -1; }
            if (currentX > 80) { currentX = 80; dirX *= -1; }
            if (currentY < 20) { currentY = 20; dirY *= -1; }
            if (currentY > 80) { currentY = 80; dirY *= -1; }

            floatingBlock.style.left = `${currentX}vw`;
            floatingBlock.style.top = `${currentY}vh`;

            updateLine();
            requestAnimationFrame(animateBlock);
        };

        animateBlock();
        updateLine();
        window.addEventListener('resize', updateLine);
    });
    
});










