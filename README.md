# Printify-inspired Responsive Navbar

This is a responsive navbar built using React and Tailwind CSS. It includes features such as dropdown menus and a mobile sliding menu with a hamburger toggle button. The design is inspired by the Printify homepage.

## Features

- **Responsive design**: The navbar adjusts to different screen sizes using Tailwind CSS breakpoints.
- **Mobile navigation**: A hamburger menu appears on smaller screens, which opens a sliding mobile menu.
- **Dropdowns**: The navbar has dropdown menus for sections like "How it works", "Services", "Use-cases", and "Need help".
- **Styled buttons**: Log in and Sign up buttons styled using Tailwind classes.

## Installation

To run this project locally, follow these steps:

### Prerequisites

Make sure you have the following installed:
- Node.js (v14 or above)
- npm or yarn

### Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### Install dependencies
Run the following command to install the necessary dependencies:
```bash
npm install
```
or 

```bash
yarn install
```
### Start the development server
```bash
npm start
```
or 

```bash
yarn start
```
# Navbar Component - Usage Guide

This project features a responsive Navbar component built using React and Tailwind CSS. It includes a mobile-friendly hamburger menu, dropdowns for various sections, and responsive buttons for log in and sign up.

## Usage

### Navbar Breakdown

- **Mobile Hamburger Menu**: 
  - The hamburger icon (`FaBars`) will appear when the screen size is reduced below 768px (small screen sizes).
  - On clicking the hamburger icon, it opens a sliding mobile menu from the left side of the screen.
  - To close the mobile menu, click on the close icon (`FaTimes`), which replaces the hamburger icon.

- **Mobile Menu Slide-in**: 
  - The mobile menu slides in from the left when the hamburger icon is clicked.
  - The menu contains the same links as the desktop view, but displayed vertically for easy mobile navigation.

- **Dropdown Menus**: 
  - Dropdowns are available for the following sections:
    - **How it works**
    - **Services**
    - **Use-cases**
    - **Need help**
  - In the desktop view, these dropdowns are triggered by hovering over the corresponding section names.
  - In the mobile view, the dropdowns are triggered by clicking on the section name, which expands or collapses the dropdown.

- **Responsive Buttons**: 
  - The navbar includes "Log in" and "Sign up" buttons.
  - These buttons are styled using Tailwind CSS classes.
  - They are visible on both mobile and desktop views but are repositioned in the mobile version to fit the sliding menu.

## Technologies Used

- **React**: Used to build interactive UI components.
- **Tailwind CSS**: Utility-first CSS framework for rapid design.
- **React Icons**: For including icons like the hamburger (`FaBars`) and close (`FaTimes`).


