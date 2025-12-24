# College Website – HTML Frames Layout

## Overview
This project is a **multi-page college website** built using **HTML Frames** that demonstrates a **two-column layout** with navigation and content areas. [web:33]  
It showcases college information including departments, courses, faculties, and about us section using a classic frameset structure. [web:31]

---

## Project Structure

| File | Description |
|------|-------------|
| `index.html` | Main **frameset** file that divides the page into left (20%) navigation frame and right (80%) content frame. |
| `frame1.html` | **Left navigation frame** containing links to all content pages. |
| `frame2.html` | **Right content frame** - default home page display. |
| `home.html` | Home page content loaded in the right frame. |
| `departments.html` | List of all engineering departments offered by the college. |
| `courses.html` | Undergraduate engineering courses with degree programs. |
| `faculties.html` | Principal, HODs, and selected faculty members with qualifications. |
| `about_us.html` | Institute history and background information. |

---

## Live Demo
View the **live working website** online using **GitHub Pages**:
https://jaymeen07-r.github.io/IT-Workshop/Experiment-04/


---

## Key Features
- **Frameset Layout** – 20% left frame for navigation, 80% right frame for content using `<frameset cols="20%,80%">`. [web:33]  
- **Navigation Menu** – Persistent left sidebar with links to Home, Departments, Courses, Faculties, and About Us. [web:31]  
- **Targeted Links** – All navigation links use `target="frame2"` to load content in the right frame without affecting the menu. [web:38]  
- **Responsive Meta Tags** – Modern viewport meta tags included in all content pages for mobile compatibility. [web:33]  
- **Clean Content Structure** – Well-organized lists and centered content for easy reading. [web:21]

---

## How It Works
1. **index.html** loads the frameset with two frames side-by-side.  
2. **frame1.html** (left) shows permanent navigation menu.  
3. **frame2.html** (right) shows default content.  
4. Clicking any link in left frame loads the corresponding page (home.html, departments.html, etc.) in the **right frame only**. [web:33]

---

## Technologies Used
- **HTML5** – Frameset, frames, semantic headings (`<h1>`, `<h2>`), lists (`<ul>`, `<li>`), and links. [web:33][web:38]  
- **HTML Frames** – Classic layout technique using `<frameset>` and `<frame>` elements. [web:33]  
- **Inline Styling** – Basic font sizing and text alignment for content presentation. [web:21]

---

## How to Use

### Online (Live Demo)
1. Click the **Live Demo** link above and open `index.html`.  
2. Use the **left navigation menu** to browse between different sections.  
3. Content loads dynamically in the **right frame** while navigation stays fixed.

### Local Setup
1. Save all 8 HTML files in the **same folder**.  
2. Open `index.html` in any web browser.  
3. Click navigation links in the left frame to see content change in the right frame.

---

## Page Preview

| Section | Content Preview |
|---------|-----------------|
| **Home** | "This is the page, Where you can see outputs of the program." |
| **Departments** | Computer Engineering, Information Technology, Mechanical Engineering, etc. |
| **Courses** | B.E. in Computer Engineering, B.E. in CSE, B.E. in IT, etc. |
| **Faculties** | Dr. Hiren B. Patel (Principal), Dr. J. P. Patel (HOD Mechanical), etc. |

---

## Possible Improvements
- Replace **frames** with modern **CSS Flexbox** or **Grid layout** for better browser support and responsiveness. [web:24]  
- Add **CSS stylesheet** for consistent styling across all pages. [web:21]  
- Implement **JavaScript navigation** for single-page application feel. [web:25]  
- Add **images and logos** for visual enhancement of faculty and department pages. [web:31]

---

## Author
**Jaymeen**  
Student – 3rd Semester  
*Computer Engineering*  
**Vidush Somany Institute of Technology and Research, Kadi** [web:31]
