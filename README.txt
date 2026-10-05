
KARKABA — FINAL FRONTEND + LOCAL CMS

FILES
- index.html          main portfolio
- capture.html        Capture page
- edit.html           Edit page + Before/After
- color.html          Color page + Original/Graded
- story.html          BTS page
- project.html        project details
- admin.html          CMS / Admin panel
- rutographer.css     main website styles
- pages.css           inner pages
- admin.css           admin panel
- rutographer.js      website + CMS renderer
- admin.js            admin CRUD/upload logic

HOW TO USE
1. Open index.html to see the portfolio.
2. Open admin.html to manage the content.
3. Edit text, add/delete projects, and upload videos.
4. Press SAVE CHANGES.
5. Open the website again.

VIDEO UPLOADS
Uploaded videos are stored in this browser's IndexedDB, so you do NOT need to rename files.
The admin panel replaces the video source with an internal id.

IMPORTANT
This version is a complete no-server local CMS. Changes are stored in the browser that opened admin.html.
If the owner needs to log in from another computer/phone and manage the same live website, the next production step is a real backend + cloud storage/database (e.g. Supabase/Firebase/Node + storage).
The UI and data structure are already prepared for that migration.

BACKUP
- EXPORT creates karkaba-cms-backup.json for text/project data.
- IMPORT restores that JSON on another browser.
- Uploaded video blobs are local to the browser and are not included in JSON export.

RECOMMENDED FOLDER
KARKABA/
  index.html
  capture.html
  edit.html
  color.html
  story.html
  project.html
  admin.html
  rutographer.css
  pages.css
  admin.css
  rutographer.js
  admin.js
  README.txt
