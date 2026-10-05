/* =========================================================
   KARKABA CMS + FRONTEND
   - Content: localStorage
   - Uploaded videos: IndexedDB
   - URL videos: regular video URLs/paths
   ========================================================= */

const DEFAULT_DATA = {
  settings: {
    brand: "KARKABA",
    logoTop: "E7na",
    email: "hello@example.com",

    heroEyebrow: "VISUAL STORYTELLING / VIDEO / COLOR",
    heroTitleA: "WE DON'T",
    heroTitleB: "JUST MAKE",
    heroTitleC: "VIDEOS.",
    heroDescription:
      "We capture moments, break them apart, color them, and turn the chaos into a story.",

    storyLabel: "THE IDEA",
    storyTitleA: "EVERY",
    storyTitleB: "MESS HAS",
    storyTitleC: "A STORY.",
    storyText:
      "Life doesn't happen in perfect frames. It's chaotic, unfinished and unpredictable. That's where our stories begin.",

    workLabel: "SELECTED WORK",
    workTitleA: "THE",
    workTitleB: "MESS.",
    workIntro:
      "Every project is a collection of moments, mistakes, frames and decisions.",

    aboutLabel: "ABOUT",
    aboutTitleA: "NOT JUST",
    aboutTitleB: "A VIDEO.",
    aboutTextA:
      "We believe every frame carries something. A feeling. A memory. A mistake. Sometimes even a story you didn't know you were telling.",
    aboutTextB:
      "Our job is to find it.",

    contactLabel: "HAVE A STORY?",
    contactTitleA: "LET'S MAKE",
    contactTitleB: "THE MESS."
  },

  projects: [
    {
      id: "after-midnight",
      number: "01 / 2026",
      title: "AFTER MIDNIGHT",
      description:
        "A visual story built around the moments that happen after everyone goes home.",
      text:
        "We followed the quiet after midnight — empty streets, small movements and the details that only appear when everything slows down.",
      videos: [
        {
          label: "MAIN FILM",
          src: "videos/after-midnight.mp4"
        },
        {
          label: "TEASER",
          src: "videos/after-midnight-teaser.mp4"
        },
        {
          label: "BTS",
          src: "videos/after-midnight-bts.mp4"
        }
      ]
    },

    {
      id: "noise-silence",
      number: "02 / 2026",
      title: "NOISE & SILENCE",
      description:
        "When chaos becomes the visual language.",
      text:
        "A project built around contrast: loud frames, quiet frames and the rhythm between them.",
      videos: [
        {
          label: "MAIN FILM",
          src: "videos/noise-silence.mp4"
        },
        {
          label: "TEASER",
          src: "videos/noise-silence-teaser.mp4"
        },
        {
          label: "BTS",
          src: "videos/noise-silence-bts.mp4"
        }
      ]
    },

    {
      id: "between-frames",
      number: "03 / 2026",
      title: "BETWEEN FRAMES",
      description:
        "The moments that happen between the moments.",
      text:
        "The final story lives in the details that usually disappear between one frame and the next.",
      videos: [
        {
          label: "MAIN FILM",
          src: "videos/between-frames.mp4"
        },
        {
          label: "TEASER",
          src: "videos/between-frames-teaser.mp4"
        },
        {
          label: "BTS",
          src: "videos/between-frames-bts.mp4"
        }
      ]
    }
  ],

  capture: [
    {
      title: "THE FIRST FRAME",
      label: "CAPTURE / 01",
      text:
        "A location-driven film built from handheld movement, natural light and moments that weren't planned.",
      src: "videos/capture-01.mp4"
    },

    {
      title: "IN MOTION",
      label: "CAPTURE / 02",
      text:
        "Movement, atmosphere and details captured directly from the shoot.",
      src: "videos/capture-02.mp4"
    },

    {
      title: "RAW MOMENTS",
      label: "CAPTURE / 03",
      text:
        "Unfiltered footage showing the visual language before editing and grading.",
      src: "videos/capture-03.mp4"
    }
  ],

  edit: [
    {
      title: "AFTER MIDNIGHT — CUT",
      label: "EDIT / 01",
      text:
        "From loose footage to a structured visual sequence.",
      before: "videos/edit-01-before.mp4",
      after: "videos/edit-01-after.mp4"
    },

    {
      title: "NOISE & SILENCE — CUT",
      label: "EDIT / 02",
      text:
        "Timing, pacing and sound-driven transitions reshape the original footage.",
      before: "videos/edit-02-before.mp4",
      after: "videos/edit-02-after.mp4"
    },

    {
      title: "BETWEEN FRAMES — CUT",
      label: "EDIT / 03",
      text:
        "A third example showing how the edit changes the meaning of the same footage.",
      before: "videos/edit-03-before.mp4",
      after: "videos/edit-03-after.mp4"
    }
  ],

  color: [
    {
      title: "WARM MEMORY",
      label: "COLOR / 01",
      text:
        "A warmer grade built to make the scene feel intimate and nostalgic.",
      before: "videos/color-01-before.mp4",
      after: "videos/color-01-after.mp4"
    },

    {
      title: "NIGHT GRADE",
      label: "COLOR / 02",
      text:
        "A darker cinematic look with controlled highlights and cooler shadows.",
      before: "videos/color-02-before.mp4",
      after: "videos/color-02-after.mp4"
    },

    {
      title: "RAW TO FILM",
      label: "COLOR / 03",
      text:
        "A third grade showing the transformation from camera image to final look.",
      before: "videos/color-03-before.mp4",
      after: "videos/color-03-after.mp4"
    }
  ],

  story: [
    {
      title: "ON SET",
      label: "STORY / BTS 01",
      text:
        "The cameras rolling, the crew moving and the scene coming together.",
      src: "videos/bts-01.mp4"
    },

    {
      title: "BETWEEN TAKES",
      label: "STORY / BTS 02",
      text:
        "The moments between takes that never make the final film but tell the real story.",
      src: "videos/bts-02.mp4"
    },

    {
      title: "THE CHAOS BEHIND THE FRAME",
      label: "STORY / BTS 03",
      text:
        "Lighting, cameras, movement and all the small decisions behind the final image.",
      src: "videos/bts-03.mp4"
    }
  ]
};


/* =========================================================
   DATABASE
   ========================================================= */

const DB_NAME = "karkaba_media_db";
const STORE = "videos";

let mediaURLs = new Map();


/* =========================================================
   HELPERS
   ========================================================= */

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}


function loadData() {

  try {

    const raw = localStorage.getItem("KARKABA_CMS");

    if (!raw) {

      const data = clone(DEFAULT_DATA);

      localStorage.setItem(
        "KARKABA_CMS",
        JSON.stringify(data)
      );

      return data;
    }

    const data = JSON.parse(raw);

    /*
      Safety:
      لو البيانات القديمة ناقصة projects/videos
      نضمن إن الصفحة ماتقعش.
    */

    if (!data.settings) {
      data.settings = clone(DEFAULT_DATA.settings);
    }

    if (!Array.isArray(data.projects)) {
      data.projects = clone(DEFAULT_DATA.projects);
    }

    data.projects.forEach((project, projectIndex) => {

      if (!Array.isArray(project.videos)) {

        const defaultProject =
          DEFAULT_DATA.projects[projectIndex];

        project.videos =
          defaultProject
            ? clone(defaultProject.videos)
            : [];
      }

    });

    return data;

  } catch (e) {

    console.error(
      "KARKABA loadData error:",
      e
    );

    return clone(DEFAULT_DATA);
  }
}


function saveData(data) {

  try {

    localStorage.setItem(
      "KARKABA_CMS",
      JSON.stringify(data)
    );

  } catch (e) {

    console.error(
      "KARKABA saveData error:",
      e
    );

  }

}


function esc(s = "") {

  return String(s).replace(
    /[&<>"']/g,
    m =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      }[m])
  );

}


/* =========================================================
   INDEXED DB
   ========================================================= */

function openMediaDB() {

  return new Promise((resolve, reject) => {

    if (!window.indexedDB) {

      reject(
        new Error(
          "IndexedDB is not supported."
        )
      );

      return;
    }

    const req =
      indexedDB.open(
        DB_NAME,
        1
      );

    req.onupgradeneeded = () => {

      if (
        !req.result.objectStoreNames.contains(
          STORE
        )
      ) {

        req.result.createObjectStore(
          STORE
        );

      }

    };

    req.onsuccess = () => {

      const db = req.result;

      db.onerror = event => {

        console.error(
          "KARKABA IndexedDB error:",
          event
        );

      };

      resolve(db);

    };

    req.onerror = () => {

      reject(req.error);

    };

  });

}


async function putMedia(id, file) {

  const db =
    await openMediaDB();

  return new Promise(
    (resolve, reject) => {

      const tx =
        db.transaction(
          STORE,
          "readwrite"
        );

      tx.objectStore(STORE).put(
        file,
        id
      );

      tx.oncomplete = () => {

        db.close();

        resolve();

      };

      tx.onerror = () => {

        db.close();

        reject(tx.error);

      };

    }
  );

}


async function getMedia(id) {

  const db =
    await openMediaDB();

  return new Promise(
    (resolve, reject) => {

      const req =
        db
          .transaction(
            STORE,
            "readonly"
          )
          .objectStore(STORE)
          .get(id);

      req.onsuccess = () => {

        const result =
          req.result || null;

        db.close();

        resolve(result);

      };

      req.onerror = () => {

        db.close();

        reject(req.error);

      };

    }
  );

}


async function deleteMedia(id) {

  const db =
    await openMediaDB();

  return new Promise(
    (resolve, reject) => {

      const tx =
        db.transaction(
          STORE,
          "readwrite"
        );

      tx.objectStore(STORE).delete(
        id
      );

      tx.oncomplete = () => {

        db.close();

        resolve();

      };

      tx.onerror = () => {

        db.close();

        reject(tx.error);

      };

    }
  );

}


/* =========================================================
   RESOLVE MEDIA
   ========================================================= */

async function resolveMedia(src) {

  if (!src) {
    return "";
  }

  /*
    فيديو عادي موجود في مجلد videos
  */

  if (
    typeof src !== "string" ||
    !src.startsWith("idb:")
  ) {

    return src;
  }


  /*
    الفيديو مرفوع من الـ ADMIN
    ومخزن داخل IndexedDB
  */

  if (mediaURLs.has(src)) {

    return mediaURLs.get(src);
  }


  try {

    const id =
      src.slice(4);

    const blob =
      await getMedia(id);

    if (!blob) {

      console.warn(
        "KARKABA: Media not found:",
        id
      );

      return "";
    }


    const url =
      URL.createObjectURL(
        blob
      );

    mediaURLs.set(
      src,
      url
    );

    return url;

  } catch (error) {

    console.error(
      "KARKABA resolveMedia error:",
      error
    );

    return "";
  }

}


/* =========================================================
   RENDER HOME PAGE
   ========================================================= */

async function renderIndex() {

  const data =
    loadData();

  const s =
    data.settings;


  /* ================= LOGO ================= */

  const logo =
    document.querySelector(
      ".logo"
    );

  if (logo) {

    logo.innerHTML = `
      <span>${esc(s.logoTop)}</span>
      <b>${esc(s.brand)}</b>
    `;

  }


  /* ================= HERO ================= */

  const eyebrow =
    document.querySelector(
      ".hero .eyebrow"
    );

  if (eyebrow) {

    eyebrow.textContent =
      s.heroEyebrow;

  }


  const h1 =
    document.querySelector(
      ".hero h1"
    );

  if (h1) {

    h1.innerHTML = `
      ${esc(s.heroTitleA)}<br>
      ${esc(s.heroTitleB)}<br>
      <span>${esc(s.heroTitleC)}</span>
    `;

  }


  const hd =
    document.querySelector(
      ".hero-description"
    );

  if (hd) {

    hd.textContent =
      s.heroDescription;

  }


  /* ================= STORY ================= */

  const story =
    document.querySelector(
      "#story .story-content"
    );

  if (story) {

    story.innerHTML = `
      <p class="section-label">
        ${esc(s.storyLabel)}
      </p>

      <h2>
        ${esc(s.storyTitleA)}<br>
        ${esc(s.storyTitleB)}<br>
        <span>${esc(s.storyTitleC)}</span>
      </h2>

      <p>
        ${esc(s.storyText)}
      </p>
    `;

  }


  /* ================= WORK ================= */

  const workIntro =
    document.querySelector(
      ".work-intro"
    );

  if (workIntro) {

    workIntro.textContent =
      s.workIntro;

  }


  const workH =
    document.querySelector(
      ".work-header h2"
    );

  if (workH) {

    workH.innerHTML = `
      ${esc(s.workTitleA)}<br>
      <span>${esc(s.workTitleB)}</span>
    `;

  }


  const work =
    document.querySelector(
      "#work"
    );


  if (work) {

    const head =
      work.querySelector(
        ".work-header"
      );


    /*
      إزالة المشاريع القديمة
      وإعادة بنائها من CMS
    */

    work
      .querySelectorAll(
        ".project"
      )
      .forEach(
        x => x.remove()
      );


    /*
      IMPORTANT:
      هنا بنعمل await resolveMedia()
      للفيديو الرئيسي.

      يعني لو Admin حط:
      idb:xxxxx

      هيتحول إلى Blob URL
      ويظهر الفيديو الجديد.
    */

    for (
      let i = 0;
      i < data.projects.length;
      i++
    ) {

      const p =
        data.projects[i];


      const reverse =
        i % 2 === 1
          ? " project-reverse"
          : "";


      const el =
        document.createElement(
          "article"
        );

      el.className =
        "project" +
        reverse;


      /*
        MAIN VIDEO
      */

      const mainVideoRaw =
        p.videos &&
        p.videos.length &&
        p.videos[0]
          ? p.videos[0].src
          : "";


      const mainVideo =
        await resolveMedia(
          mainVideoRaw
        );


      /*
        لو الفيديو مش موجود
        نخلي الفيديو فاضي بدل ما الصفحة تقع.
      */

      const videoHTML =
        mainVideo
          ? `
            <video
              muted
              autoplay
              loop
              playsinline
              preload="metadata"
              poster="images/${esc(p.id)}.jpg"
            >

              <source
                src="${esc(mainVideo)}"
                type="video/mp4"
              >

            </video>
          `
          : `
            <video
              muted
              autoplay
              loop
              playsinline
              preload="metadata"
              poster="images/${esc(p.id)}.jpg"
            ></video>
          `;


      el.innerHTML = `

        <a
          class="project-media"
          href="project.html?id=${encodeURIComponent(p.id)}"
        >

          <div class="video-card">

            ${videoHTML}

            <div class="video-overlay">

              <span>
                PROJECT ${String(i + 1).padStart(2, "0")}
              </span>

              <span>
                PLAY ↗
              </span>

            </div>

          </div>

        </a>


        <div class="project-info">

          <span>
            ${esc(p.number)}
          </span>

          <h3>
            ${esc(p.title)}
          </h3>

          <p>
            ${esc(p.description)}
          </p>

          <a
            class="view-project"
            href="project.html?id=${encodeURIComponent(p.id)}"
          >
            VIEW STORY →
          </a>

        </div>

      `;


      if (head) {

        head.after(
          el
        );

      }

    }

  }


  /* ================= ABOUT ================= */

  const about =
    document.querySelector(
      "#about"
    );

  if (about) {

    const left =
      about.querySelector(
        ".about-left"
      );

    const right =
      about.querySelector(
        ".about-right"
      );


    if (left) {

      left.innerHTML = `

        <p class="section-label">
          ${esc(s.aboutLabel)}
        </p>

        <h2>
          ${esc(s.aboutTitleA)}<br>
          ${esc(s.aboutTitleB)}
        </h2>

      `;

    }


    if (right) {

      right.innerHTML = `

        <p>
          ${esc(s.aboutTextA)}
        </p>

        <p>
          ${esc(s.aboutTextB)}
        </p>

      `;

    }

  }


  /* ================= CONTACT ================= */

  const contact =
    document.querySelector(
      "#contact"
    );


  if (contact) {

    const label =
      contact.querySelector(
        ".section-label"
      );

    const title =
      contact.querySelector(
        "h2"
      );

    const contactLink =
      contact.querySelector(
        "a"
      );


    if (label) {

      label.textContent =
        s.contactLabel;

    }


    if (title) {

      title.innerHTML = `
        ${esc(s.contactTitleA)}<br>
        <span>
          ${esc(s.contactTitleB)}
        </span>
      `;

    }


    if (contactLink) {

      contactLink.textContent =
        "CONTACT US ↗";

      contactLink.href =
        "linktree.html";

      contactLink.removeAttribute(
        "target"
      );

      contactLink.removeAttribute(
        "onclick"
      );

    }

  }

}


/* =========================================================
   INNER PAGES
   ========================================================= */

async function renderInnerPage() {

  const page =
    document.body.dataset.page;

  if (!page) return;


  const data =
    loadData();


  const map = {

    capture: {
      title: "CAPTURE.",
      accent: "CAP",
      label: "01 / FROM CHAOS TO STORY",
      intro:
        "Frames we actually shot. Real locations, real people, real light — captured by our cameras before the edit begins."
    },

    edit: {
      title: "EDIT.",
      accent: "ED",
      label: "02 / FROM CHAOS TO STORY",
      intro:
        "The cut is where chaos gets a rhythm. Explore the footage before the edit, then see what we built from it."
    },

    color: {
      title: "COLOR.",
      accent: "COL",
      label: "03 / FROM CHAOS TO STORY",
      intro:
        "Same footage. Different emotion. These are films we shot ourselves, then shaped through color grading."
    },

    story: {
      title: "STORY.",
      accent: "ST",
      label: "04 / FROM CHAOS TO STORY",
      intro:
        "Behind every polished frame is a room full of people, cameras, mistakes, laughs and decisions. This is the BTS."
    }

  };


  const m =
    map[page];

  if (!m) return;


  const hero =
    document.querySelector(
      ".page-hero"
    );


  if (hero) {

    hero.innerHTML = `

      <p class="section-label">
        ${m.label}
      </p>

      <h1>
        ${esc(m.title)}
      </h1>

      <p>
        ${esc(m.intro)}
      </p>

    `;

  }


  const list =
    document.querySelector(
      ".dynamic-list"
    );


  if (!list) return;


  list.innerHTML = "";


  /* ================= CAPTURE / STORY ================= */

  if (
    page === "capture" ||
    page === "story"
  ) {

    for (
      const item of data[page]
    ) {

      const src =
        await resolveMedia(
          item.src
        );


      const article =
        document.createElement(
          "article"
        );


      article.className =
        "media-project";


      article.innerHTML = `

        <div class="media-box">

          <video
            controls
            playsinline
            preload="metadata"
            ${src ? "" : 'class="empty-media"'}
          >

            <source
              src="${esc(src)}"
              type="video/mp4"
            >

          </video>

        </div>


        <div class="media-copy">

          <span>
            ${esc(item.label)}
          </span>

          <h2>
            ${esc(item.title)}
          </h2>

          <p>
            ${esc(item.text)}
          </p>

        </div>

      `;


      list.appendChild(
        article
      );

    }

  }


  /* ================= EDIT / COLOR ================= */

  else {

    for (
      const item of data[page]
    ) {

      const before =
        await resolveMedia(
          item.before
        );


      const after =
        await resolveMedia(
          item.after
        );


      const article =
        document.createElement(
          "article"
        );


      article.className =
        "compare-project";


      article.innerHTML = `

        <div class="compare-head">

          <span>
            ${esc(item.label)}
          </span>

          <h2>
            ${esc(item.title)}
          </h2>

          <p>
            ${esc(item.text)}
          </p>

        </div>


        <div class="before-after">

          <div>

            <small>
              ${
                page === "edit"
                  ? "BEFORE / RAW"
                  : "ORIGINAL / LOG"
              }
            </small>

            <video
              controls
              playsinline
            >

              <source
                src="${esc(before)}"
                type="video/mp4"
              >

            </video>

          </div>


          <div>

            <small>
              ${
                page === "edit"
                  ? "AFTER / FINAL EDIT"
                  : "AFTER / GRADED"
              }
            </small>

            <video
              controls
              playsinline
            >

              <source
                src="${esc(after)}"
                type="video/mp4"
              >

            </video>

          </div>

        </div>

      `;


      list.appendChild(
        article
      );

    }

  }

}


/* =========================================================
   PROJECT PAGE
   ========================================================= */

async function renderProject() {

  const root =
    document.getElementById(
      "projectPage"
    );


  if (!root) return;


  const data =
    loadData();


  const id =
    new URLSearchParams(
      location.search
    ).get("id") ||
    data.projects[0]?.id;


  const p =
    data.projects.find(
      x => x.id === id
    ) ||
    data.projects[0];


  if (!p) {

    root.innerHTML =
      "<p>No project found.</p>";

    return;

  }


  root.innerHTML = `

    <header class="project-hero">

      <p class="section-label">
        ${esc(p.number)}
      </p>

      <h1>
        ${esc(p.title)}
      </h1>

      <p>
        ${esc(p.description)}
      </p>

    </header>


    <section class="project-story">

      <p>
        ${esc(p.text)}
      </p>

    </section>


    <section
      class="project-videos"
      id="projectVideos"
    ></section>


    <div class="back-row">

      <a href="index.html#work">
        ← BACK TO WORK
      </a>

    </div>

  `;


  const pv =
    document.getElementById(
      "projectVideos"
    );


  if (!pv) return;


  const videos =
    Array.isArray(p.videos)
      ? p.videos
      : [];


  for (
    let i = 0;
    i < videos.length;
    i++
  ) {

    const v =
      videos[i];


    const src =
      await resolveMedia(
        v.src
      );


    const article =
      document.createElement(
        "article"
      );


    article.className =
      "project-video-item";


    article.innerHTML = `

      <div class="project-video-meta">

        <span>
          ${String(i + 1).padStart(2, "0")}
        </span>

        <span>
          ${esc(v.label)}
        </span>

      </div>


      <video
        controls
        playsinline
        preload="metadata"
        ${src ? "" : 'class="empty-media"'}
      >

        <source
          src="${esc(src)}"
          type="video/mp4"
        >

      </video>

    `;


    pv.appendChild(
      article
    );

  }

}


/* =========================================================
   MOTION
   ========================================================= */

function setupMotion() {

  const loader =
    document.getElementById(
      "loader"
    );


  if (loader) {

    setTimeout(
      () =>
        loader.classList.add(
          "done"
        ),
      2600
    );

  }


  /*
    IntersectionObserver
    مش لازم يكون متاح في كل بيئة
  */

  if (
    "IntersectionObserver" in window
  ) {

    const observer =
      new IntersectionObserver(
        entries =>
          entries.forEach(
            e => {

              if (
                e.isIntersecting
              ) {

                e.target.classList.add(
                  "is-visible"
                );

              }

            }
          ),
        {
          threshold: 0.12
        }
      );


    document
      .querySelectorAll(
        ".project,.process-step,.about,.media-project,.compare-project,.bts-card"
      )
      .forEach(
        el =>
          observer.observe(
            el
          )
      );

  }

}


/* =========================================================
   START
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  async () => {

    try {

      await renderIndex();

      await renderInnerPage();

      await renderProject();

      setupMotion();

    } catch (error) {

      console.error(
        "KARKABA FRONTEND ERROR:",
        error
      );

    }

  }
);