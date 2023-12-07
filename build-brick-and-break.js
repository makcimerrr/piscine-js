export const build = (brickCount) => {
  for (let i = 1; i < brickCount + 1; i++) {
    let brick = document.createElement("div");
    brick.id = `brick-${i}`;
    brick.textContent = i;
    const columnIndex = (i - 1) % 3;
    columnIndex === 1 ? (brick.dataset.foundation = "true") : null;
    setTimeout(() => {
      document.body.append(brick);
    }, i * 100);
  }
};

export function repair(...brickIds) {
  for (const brickId of brickIds) {
    const brick = document.getElementById(brickId);
    if (brick) {
      const brickIndex = parseInt(brickId.split("-")[1]);
      const columnIndex = (brickIndex - 1) % 3;
      brick.dataset.repaired = columnIndex === 1 ? "in progress" : "true";
    }
  }
}

// Function to destroy the current last brick in the tower
export const destroy = () => {
  // Get the last brick in the tower
  let tower = document.body.children;
  let lastBrick = tower[tower.length - 1];

  if (lastBrick) {
    // Remove the last brick
    lastBrick.remove();
  }

  if (lastBrick === null) {
  }
};
