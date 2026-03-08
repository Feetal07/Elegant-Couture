# Elegant Couture Website

## Project Overview
Elegant Couture is a fashion house website developed for CSC 106 Lab Assessment.  
It includes 5 pages: Home, About (with Board of Trustees), Products, Contact, and Events.

## Features
- Product showcase
- Board of Trustees (group members)
- Inquiries and appointment booking form
- Upcoming events with countdown
- Marquee on all pages
- External CSS styling
- JavaScript features (form validation, countdown timer)
- Consistent navigation across all pages

## DOM Structure

### Homepage (index.html)
```
html
 └── body
     ├── header
     │    ├── div.logo
     │    └── nav
     ├── marquee
     ├── section.hero
     │    ├── h1
     │    ├── p
     │    └── a.hero-btn
     └── footer
```

### About + Trustees (about.html)
```
html
 └── body
     ├── header
     │    ├── div.logo
     │    └── nav
     ├── marquee
     ├── section.about
     ├── section.trustees
     │    ├── div.member
     │    │    ├── img
     │    │    └── p (name/role)
     └── footer
```

### Products (products.html)
```
html
 └── body
     ├── header
     │    ├── div.logo
     │    └── nav
     ├── marquee
     ├── section.products
     │    ├── div.product-card
     │    │    ├── img
     │    │    └── p (description/price)
     └── footer
```

### Contact (contact.html)
```
html
 └── body
     ├── header
     │    ├── div.logo
     │    └── nav
     ├── marquee
     ├── section.contact
     │    └── form
     │         ├── input (name)
     │         ├── input (email)
     │         ├── textarea (message)
     │         ├── input (date)
     │         └── button (submit)
     └── footer
```

### Events (events.html)
```
html
 └── body
     ├── header
     │    ├── div.logo
     │    └── nav
     ├── marquee
     ├── section.events
     │    ├── div.event
     │    │    ├── p (event name + date)
     │    │    └── script (countdown)
     └── footer
```
## How to Run Locally

1. Clone the repository:

2. Open the project folder in your code editor (e.g., VS Code).

3. Launch the website:
- Open `index.html` in your browser.
- Navigate through the pages using the menu bar.

## Credits
- Developed by CSC 106 Lab Assessment Group 8

### Board of Trustees
- Lateef Afolabi – Lead Developer / Project Coordinator
- [Member Name] – Frontend Designer
- [Member Name] – Backend Developer
- [Member Name] – Content & Documentation
- [Member Name] – Quality Assurance & Testing
