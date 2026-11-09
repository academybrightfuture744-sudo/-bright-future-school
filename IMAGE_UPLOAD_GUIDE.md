# Image Upload & Replacement Guide

All image assets are local placeholders so the website works without external image hosting.

## Replace the school logo
The header/footer currently use a temporary `BF` text mark because no original logo file was included with the brief. When you have the official logo:
- Put it in `images/logo/school-logo.png` (or `.svg`).
- In each HTML page, replace `<div class="brand-mark">BF</div>` with `<img class="school-logo" src="images/logo/school-logo.png" alt="Bright Future School logo">`.
- Add a CSS rule such as `.school-logo{width:56px;height:56px;object-fit:contain}`.

## Replace photographs
Keep filenames simple and lowercase. Replace or update these placeholders:
- `images/slider/` — homepage slider visuals.
- `images/campus/` — campus photographs.
- `images/director/` — Director Jay Desai portrait.
- `images/headmaster/` — Headmaster Dinesh Dewasi portrait.
- `images/facilities/` — facility photographs.
- `images/gallery/` — gallery photographs.

For a photo, use a JPG, PNG or WebP and update the relevant `<img src="...">` in the HTML. Keep the `alt` text meaningful. The gallery placeholders are built as simple HTML tiles; replace each tile's `.gallery-placeholder` with an `<img>` tag.

## Student privacy
Get parent/guardian permission before publishing identifiable student photographs. Never upload private ID cards, admit cards, marksheets or personal student documents to a public repository.
