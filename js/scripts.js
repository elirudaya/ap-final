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

    const fullText = `
    The Impulse Laboratory is a cutting-edge space designed to allow deep immersion into the deepest and most forgotten corners of human memory, bringing the past to life once again. 
    The lab's design features a complex neurocybernetic system that combines advanced technologies from neuroscience, artificial intelligence, and sensory simulation. 
    It's based on three elongated capsules made from biocompatible polymers, enhanced with quantum processors. 
    Each capsule is an independent module that houses a multidimensional information system, powered by neural interfaces. 
    When a person enters the capsule, they enter a state of artificial sleep induced by directed electromagnetic pulses. 
    Their consciousness is decoded through neurosensors and begins to reconstruct memories as dynamic simulations. 
    Inside the capsule, a so-called "echo field" is created — a special zone where memories are materialized in the form of holographic projections, sounds, and tactile sensations. 
    This allows the user not only to observe but also physically interact with fragments of their past. 
    The capsules are connected by segmental junctions that serve a dual purpose. 
    On the one hand, they replicate the structure of a nerve impulse, visualizing the transfer of information between neurons. 
    On the other hand, they act as "bridges" that allow consciousness to move between different layers of memory. 
    These bridges activate only when memories are being transferred, enabling the user to travel from one temporal layer of memory to another. 
    At the same time, each capsule is located in a sealed area, protected from external electromagnetic interference. 
    This is necessary for the purity of the experiment, as any external influence could distort the fragile neural patterns. 
    Isolation also prevents the so-called "memory leak", a phenomenon where fragments of the user's consciousness could accidentally integrate into the system. 
    The technological basis of the laboratory includes a neural interface that reads electrical activity in the brain and converts it into digital signals. 
    This allows not only reproduction but also editing, enhancement, or suppression of certain memories. 
    Artificial intelligence analyzes neural data and fills in missing memory fragments by analogy. 
    However, if the system malfunctions, it may begin to create false memories. 
    Quantum processors provide instant processing of large amounts of information and allow simultaneous work with multiple layers of consciousness. 
    However, as you get closer to the mysteries of consciousness, more questions arise about the nature of reality itself. 
    Using Impulse technology carries a number of risks. 
    For example, prolonged use of the capsule can lead to a loss of touch with reality and disorientation in time. 
    During intense system operation, memories may overlap, causing episodes from different periods of life to mix. 
    There is also a risk of unauthorized access, where an attacker could theoretically infiltrate or erase someone else's memories, turning the laboratory into a potential weapon.
    But the most mysterious aspect of Impulse is not even its technology, but rather how the system interacts with the subconscious mind. 
    During moments of deep immersion, users occasionally encounter "shadows" — unexplained memory fragments that don't belong to them but appear in the simulation as if they're emerging from a collective unconsciousness. 
    Some researchers speculate that the capsules don't just recreate memories, but also connect to something else — perhaps the residual neural fields of other people, or even ephemeral traces left in the fabric of space itself. 
    These anomalies have not yet been fully analyzed, but every session at Impulse feels like a journey not just into the past but into something inexplicably foreign, something that has always been part of us but remained unseen.
    But as the boundaries of memory exploration continue to blur, ethical dilemmas emerge with increasing urgency. 
    If memories can be edited, replaced, or artificially enhanced — who determines what is real? 
    The lines between experience and fabrication begin to dissolve, raising profound questions about identity, consent, and autonomy. 
    Researchers have reported cases where users began to internalize synthetic memories as their own, fundamentally altering their perception of self.
    In response, the scientific community has proposed a framework of mnemonic ethics — a developing field concerned with the responsible use of memory technologies. 
    Debates rage over whether traumatic memories should be erased for therapeutic purposes or preserved for emotional continuity. 
    Others question the implications of shared memory networks, where multiple users can access or contribute to a collective experience.
    Meanwhile, the phenomenon of "shadows" continues to defy explanation...
    `;

    const container = document.getElementById("hyText");
    const scrollZone = document.getElementById("scrollZone");
    const words = fullText.trim().split(/\s+/);
    const wordElements = [];

    words.forEach(word => {
        const span = document.createElement("span");
        span.className = "word";
        span.textContent = word + " ";
        container.appendChild(span);
        wordElements.push(span);
    });

    const totalScrollHeight = 10000;

    function handleScroll() {
        const scrollTop = scrollZone.scrollTop;
        const percent = scrollTop / totalScrollHeight;
        const visibleWords = Math.floor(percent * wordElements.length);

        wordElements.forEach((el, idx) => {
            if (idx < visibleWords) {
                el.classList.add("visible");
            } else {
                el.classList.remove("visible");
            }
        });
    }

    scrollZone.addEventListener("scroll", handleScroll);
    handleScroll();

    const hyRender = document.getElementById('hyRender');
    const twoRender = document.getElementById('twoRender');
    const hyText = document.getElementById('hyText');
    const hyHad = document.querySelector('.hyHad');

    twoRender.style.display = 'none';
    hyHad.style.display = 'none';

    hyRender.addEventListener('click', function () {
        hyText.style.display = 'none';
        scrollZone.style.display = 'none';
        hyRender.style.display = 'none';
        twoRender.style.display = 'block';
        hyHad.style.display = 'flex';
    });
});







