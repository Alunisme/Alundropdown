let input;
let slider;
let button;
let dropdown;
let iframe;
let isBouncing = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput();
  input.position(10, 10);
  input.size(200, 30); // Set the size of the input box
  input.value("淡江教育科技😁"); // Set the default value of the input box
  
  slider = createSlider(25, 40, 25); // Create a slider with range 25-40 and initial value 25
  slider.position(input.x + input.width + 10, 10); // Position the slider to the right of the input box
  slider.size(200, 30); // Set the size of the slider
  
  button = createButton('文字跳舞時間');
  button.position(slider.x + slider.width + 120, slider.y); // Position the button to the right of the slider text
  button.mousePressed(toggleBounce); // Set the button's mousePressed event
  
  dropdown = createSelect();
  dropdown.position(button.x + button.width + 20, button.y); // Position the dropdown to the right of the button
  dropdown.option('下拉開始選擇ouob');
  dropdown.option('第一周-淡江大學網頁');
  dropdown.option('第二周-淡江大學教育科技學系網頁');
  dropdown.option('第三周-Hackmd網頁');
  dropdown.option('第四周-數學選擇題與填充小測驗');
  dropdown.changed(handleDropdownChange); // Set the dropdown's changed event
  
  iframe = createElement('iframe');
  iframe.position(100, 100);
  iframe.size(windowWidth - 200, windowHeight - 200);
  iframe.hide(); // Initially hide the iframe
}

function draw() {
  background("#00E3E3"); // Clear the screen
  let txt = input.value(); // Get the text from the input box
  let x = 10; // Initial x position
  let y = 70; // Initial y position
  let spacing = 200;
  
  let textSizeValue = slider.value(); // Get the value from the slider
  textSize(textSizeValue); // Set the text size
  
  for (let i = 0; i < height / spacing; i++) {
    for (let j = 0; j < width / spacing; j++) {
      let offsetX = isBouncing ? random(-5, 5) : 0;
      let offsetY = isBouncing ? random(-5, 5) : 0;
      text(txt, x + j * spacing + offsetX, y + i * spacing + offsetY);
    }
  }
  textSize(16);
  fill(0);
  text("調整文字大小", slider.x + slider.width + 10, slider.y + 23);
}

function toggleBounce() {
  isBouncing = !isBouncing;
}

function handleDropdownChange() {
  let selected = dropdown.value();
  if (selected === '第一周-淡江大學網頁') {
    iframe.attribute('src', 'https://www.tku.edu.tw');
  } else if (selected === '第二周-淡江大學教育科技學系網頁') {
    iframe.attribute('src', 'https://www.et.tku.edu.tw');
  } else if (selected === '第三周-Hackmd網頁') {
    iframe.attribute('src', 'https://hackmd.io/@YyFThXCPSWyphIjJu2XjOQ/HJLSmYzj1x');
  } else if (selected === '第四周-數學選擇題與填充小測驗') {
    iframe.attribute('src', 'https://alunisme.github.io/test20250310/');
  }
  iframe.show(); // Show the iframe
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  iframe.size(windowWidth - 200, windowHeight - 200); // Adjust iframe size on window resize
}
