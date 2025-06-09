# Smart Calculator

This is a simple, interactive calculator web app built with HTML, CSS, and JavaScript. It supports basic arithmetic operations, brackets, decimals, negative numbers, and percentage calculations. The calculator also features a colorful RGB glow animation on button press.

---

## Features

- **Basic Operations:** Addition, subtraction, multiplication, division.
- **Brackets:** For grouping expressions.
- **Decimal Support:** Enter decimal numbers.
- **Negative Numbers:** Add negative numbers easily.
- **Percentage:** Convert numbers to percentages.
- **AC (All Clear):** Reset the calculator.
- **DEL (Delete):** Remove the last character.
- **Animated Glow:** Buttons glow with an animated RGB effect when pressed.

---

## How It Works

### Layout

- The calculator is structured as an HTML table.
- Each button is a `<td>` element with an `onclick` handler for its function and the glow effect.
- The display is an `<input>` field at the top, showing the current expression or result.

### Styling

- **CSS** is used for layout, button colors, and the animated RGB glow effect.
- The `.glow` class triggers a `@keyframes rgb-glow` animation, changing the button's background color and shadow for 1 second when pressed.
- Table cells have spacing so the glow is visible around each button.

### JavaScript Logic

#### Expression Handling

- The calculator builds a string `expression` as the user clicks buttons.
- Digits, operators, brackets, decimals, negatives, and percentages are appended or inserted into this string.
- The display (`inputBox`) always shows the current expression or result.

#### Button Functions

- **digitBtnPressed(number):** Adds a digit to the expression and display.
- **operatorBtnPressed(operator):** Adds an operator (+, -, *, /) to the expression and display.
- **addBracket(bracket):** Adds a `(` or `)` to the expression and display.
- **addDecimal():** Adds a decimal point to the current number if not already present.
- **addNegative():** Adds a negative sign at the start of a number or after an operator.
- **addPercent():** Converts the last number entered into a percentage (divides by 100).
- **equalsBtnPressed():** Evaluates the full expression using `eval()` and displays the result.
- **btnACPressed():** Clears the expression and resets the display to 0.
- **btnDelPressed():** Deletes the last character from the expression and updates the display.

#### Glow Effect

- **addGlowEffect(td):** Adds the `.glow` class to the clicked button, triggering the RGB animation, and removes it after 1 second.

---

## Security Note

- This calculator uses JavaScript's `eval()` to evaluate expressions. In a production environment, use a proper math parser to avoid security risks.

---

## Usage

1. Open `index.html` in your browser.
2. Click the calculator buttons to enter your calculation.
3. Press `=` to see the result.
4. Use `AC` to clear, `DEL` to delete the last character, and `%` to convert a number to a percentage.
5. Enjoy the animated glow effect on every button press!

---

## File Structure

- **index.html**: All HTML, CSS, and JavaScript for the calculator are in this single file.

---

## Customization

- You can adjust the glow animation colors and duration in the CSS section.
- You can change button labels or add more functions by editing the HTML and JavaScript.

---

**Enjoy your colorful, interactive calculator!**
