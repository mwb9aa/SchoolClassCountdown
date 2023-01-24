# Tauri + Vanilla

This template should help get you started developing with Tauri in vanilla HTML, CSS and Javascript.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)


Use Powershell to create a generic html/css/js app
    iwr -useb https://create.tauri.app/ps | iex

Use Cargo to build a development version
    cargo tauri dev

Change the icons in the src-tauri folder
Change tauri.conf.json to reflect the new icons and to change the app identifier

Use Cargo to build a production version
    cargo tauri build