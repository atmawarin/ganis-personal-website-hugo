# Hugo Website Documentation

Welcome to the documentation for managing and developing this Hugo-based website. This guide will walk you through adding or editing pages and updating menus. ✨🛠️

---

## Table of Contents 📚
1. [About the Project](#about-the-project) 🌐
2. [Managing Content](#managing-content) ✏️
    - [Adding Pages](#adding-pages) ➕
    - [Editing Pages](#editing-pages) 🖊️
3. [Managing Menus](#managing-menus) 📋
4. [Developed By](#developed-by) 👨‍💻

---

## About the Project 🌟

This website is built using [Hugo](https://gohugo.io/), a fast and flexible static site generator. It allows you to manage content with Markdown files and provides powerful templating for developers.

---

## Managing Content ✍️

### Adding Pages ➕
1. Navigate to the `content` directory of your Hugo project. 📂
2. Choose the appropriate folder for your content type (e.g., `content/articles`, `content/reading`, etc.).
3. Create a new Markdown file with the desired name, e.g., `new-page.md`. 📄
4. Add the front matter at the top of the file:
    ```yaml
    ---
    title: "New Page"
    date: 2025-01-09
    ---
    ```
5. Add your page content below the front matter. 📝

### Editing Pages 🖊️
1. Locate the Markdown file for the page you want to edit in the `content` directory. 🔍
2. Open the file in a text editor. ✏️
3. Make changes to the content or front matter as needed.
4. Save the file and run `hugo server` to preview changes locally. 🔄

---

## Managing Menus 📋

1. Open the `config.yaml` file in the root of your project. 🛠️
2. Locate the `menus` section:
    ```yaml
    menus:
      main: 
        - name: "About"
          weight: 10
          url: "/about"
    ```
3. To add a menu item, add a new entry in the `menus` section with the `name`, `url`, and `weight` (for footer menus navigate to `footer` section of the `menu`).
4. Save the changes, and the new menu item will appear in the navigation. 🌐

---

## Developed By 👨‍💻

This website was crafted with ❤️ by [Your Name](https://www.fiverr.com/yourprofile). For any inquiries, customization, or development needs, don't hesitate to reach out! 🌟
