# ⏰ Digital Clock

A clean, minimal, and responsive digital clock built with **HTML, CSS, and Vanilla JavaScript**. It displays the current local time in a 12-hour format with AM/PM indicators, complemented by a visually appealing background and a subtle glassmorphism effect.

🌐 **Live Demo:** [https://digital-clock-green-theta.vercel.app/](https://digital-clock-green-theta.vercel.app/)

📦 **Repository:** [https://github.com/kavinanandr/digital-clock](https://github.com/kavinanandr/digital-clock)

---

## ✨ Features

- **Real-Time Clock:** Displays the current local time and updates automatically every second.
- **12-Hour Time Format:** Presents time in a familiar 12-hour format.
- **AM/PM Indicator:** Distinguishes between morning and afternoon.
- **Dynamic Time Display:** Displays hours, minutes, and seconds with leading zeros for consistent formatting.
- **Responsive Typography:** Adapts the clock's font size to different screen widths.
- **Glassmorphism Effect:** Uses a translucent background and backdrop blur to create a subtle glass-like appearance.
- **Background Imagery:** Features a full-screen background image with cover sizing.
- **Lightweight:** Built entirely with vanilla technologies, without external libraries or frameworks.

## 🛠️ Built With

| Technology        | Purpose                                                                   |
| ----------------- | ------------------------------------------------------------------------- |
| HTML5             | Defines the structure and content of the application.                     |
| CSS3              | Handles styling, layout, responsive typography, and visual effects.       |
| JavaScript (ES6+) | Retrieves system time, formats values, and updates the clock dynamically. |
| Vercel            | Hosts and deploys the application.                                        |
| Git & GitHub      | Version control and source code management.                               |

### Core Web APIs and Concepts

- **Date API:** Retrieves the current system time.
- **setInterval():** Executes the clock update function at one-second intervals.
- **DOM Manipulation:** Updates the clock display dynamically.
- **String.padStart():** Ensures hours, minutes, and seconds maintain a two-digit format.
- **CSS Flexbox:** Centers the clock within the viewport.
- **CSS Media Queries:** Adjusts typography for larger screens.
- **CSS Backdrop Filter:** Creates the glassmorphism effect.

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

You only need:

- A modern web browser (Chrome, Firefox, Edge, etc.).
- Git installed on your system.
- A code editor (VS Code recommended).

No Node.js installation, package manager, or additional dependencies are required.

### 1. Clone the Repository

```bash
git clone https://github.com/kavinanandr/digital-clock.git
```

### 2. Navigate to the Project Directory

```bash
cd digital-clock
```

### 3. Open the Project

Open `index.html` directly in your browser.

Alternatively, if you're using VS Code, install the Live Server extension and launch the project using **Open with Live Server**.

The digital clock will start displaying your local system time.

## 📂 Project Structure

```text
digital-clock/
│
├── img/
│   ├── background.jpeg    # Full-screen background image
│   └── favicon.png        # Browser tab icon
│
├── index.html             # Main HTML structure
├── style.css              # Styling and responsive layout
├── main.js                # Clock functionality
├── vercel.json            # Vercel deployment configuration
└── README.md              # Project documentation
```

### File Responsibilities

**`index.html`**

- Defines the HTML document structure.
- Contains the main clock display element.
- Links the external stylesheet and JavaScript file.
- Defines the page metadata and favicon.

**`style.css`**

- Resets default browser margins and padding.
- Implements the Flexbox-based layout.
- Styles the clock display.
- Applies background imagery and glassmorphism.
- Uses media queries to adjust typography across screen sizes.

**`main.js`**

- Retrieves the current system time using the JavaScript Date API.
- Converts the hour into a 12-hour representation.
- Determines the appropriate AM/PM indicator.
- Formats hours, minutes, and seconds.
- Updates the clock display every second using `setInterval()`.

**`vercel.json`**

- Contains deployment configuration for Vercel.

## ⚙️ How It Works

The application uses JavaScript's built-in Date API to retrieve the current system time.

The clock functionality is handled by the `updateTime()` function.

1. A new `Date` object retrieves the current local time.
2. The hour is converted into a 12-hour representation.
3. The AM/PM indicator is determined.
4. Hours, minutes, and seconds are formatted using `String.padStart()`.
5. The formatted time is inserted into the HTML using DOM manipulation.
6. `setInterval()` schedules the update function to execute every 1,000 milliseconds.

This allows the clock to refresh automatically without requiring a page reload.

## 🌍 Deployment

The application is deployed using **Vercel**.

You can access the live application here:

[https://digital-clock-green-theta.vercel.app/](https://digital-clock-green-theta.vercel.app/)

To deploy your own version:

1. Fork or clone the repository.
2. Import the repository into Vercel.
3. Configure the project as a static frontend application.
4. Deploy the project.

No build command or output directory configuration is required for this static application.

## 🎯 Learning Outcomes

Building this project provided practical experience with:

- Working with JavaScript's Date object.
- Understanding time formatting and conditional logic.
- Manipulating HTML elements through the DOM.
- Using `setInterval()` for periodic execution.
- Applying CSS Flexbox for layout positioning.
- Implementing responsive designs with media queries.
- Exploring modern CSS properties such as `backdrop-filter`.
- Managing project versions using Git and GitHub.
- Deploying a static website using Vercel.

## 🔮 Future Improvements

Potential enhancements for future versions:

- Add a 12-hour / 24-hour format toggle.
- Display the current date and day of the week.
- Introduce customizable clock themes.
- Add a dark/light mode switch.
- Support multiple time zones.
- Add user preferences using localStorage.

## 👨‍💻 Author

**Kavin Anand**

- **GitHub:** [@kavinanandr](https://github.com/kavinanandr)
- **Project Repository:** [https://github.com/kavinanandr/digital-clock](https://github.com/kavinanandr/digital-clock)
- **Live Application:** [https://digital-clock-green-theta.vercel.app/](https://digital-clock-green-theta.vercel.app/)

---

⭐ If you find this project useful or interesting, consider giving the repository a star!
