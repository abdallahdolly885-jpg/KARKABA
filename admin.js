/* =========================================================
   KARKABA CMS - LOCALHOST VERSION
   LocalStorage + IndexedDB Media
   Compatible with rutographer.js
   ========================================================= */


/* =========================================================
   DEFAULT DATA
   ========================================================= */

const DEFAULT = {
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
      poster: "",
      published: true,
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
      poster: "",
      published: true,
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
      poster: "",
      published: true,
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
   STORAGE CONFIG
   MUST MATCH rutographer.js
   ========================================================= */

const LOCAL_DATA_KEY = "KARKABA_CMS";

const LOCAL_DB_NAME = "karkaba_media_db";
const LOCAL_DB_VERSION = 1;
const LOCAL_STORE_NAME = "videos";

const LOCAL_MEDIA_PREFIX = "idb:";


/* =========================================================
   HELPERS
   ========================================================= */

const $ = selector =>
  document.querySelector(selector);

const $$ = selector =>
  [...document.querySelectorAll(selector)];


function uid() {

  if (
    window.crypto &&
    typeof window.crypto.randomUUID === "function"
  ) {

    return window.crypto.randomUUID();

  }

  return (
    Date.now().toString(36) +
    "-" +
    Math.random()
      .toString(36)
      .slice(2, 10)
  );

}


function clone(value) {

  return structuredClone(value);

}


function esc(value = "") {

  return String(value).replace(
    /[&<>"']/g,
    char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[char])
  );

}


function isBlobUrl(value) {

  return (
    typeof value === "string" &&
    value.startsWith("blob:")
  );

}


function getPath(object, path) {

  return path
    .split(".")
    .reduce(
      (value, key) =>
        value?.[key],
      object
    );

}


function setPath(object, path, value) {

  const parts =
    path.split(".");

  const last =
    parts.pop();

  const target =
    parts.reduce(
      (value, key) => {

        if (
          value[key] === undefined ||
          value[key] === null
        ) {

          value[key] = {};

        }

        return value[key];

      },
      object
    );

  target[last] =
    value;

}


function input(
  label,
  value,
  path,
  full = false,
  textarea = false
) {

  return `
    <div class="field ${full ? "full" : ""}">
      <label>${label}</label>

      ${
        textarea
          ? `
            <textarea data-path="${path}">${esc(value)}</textarea>
          `
          : `
            <input
              type="text"
              data-path="${path}"
              value="${esc(value)}"
            >
          `
      }
    </div>
  `;

}


/* =========================================================
   STATE
   ========================================================= */

let data =
  clone(DEFAULT);

let isSaving =
  false;


/* =========================================================
   OBJECT URL MANAGEMENT
   ========================================================= */

const activeObjectUrls =
  new Set();


function createObjectUrl(blob) {

  const url =
    URL.createObjectURL(blob);

  activeObjectUrls.add(url);

  return url;

}


function revokeObjectUrl(url) {

  if (
    !url ||
    !activeObjectUrls.has(url)
  ) {

    return;

  }

  try {

    URL.revokeObjectURL(url);

  }
  catch (_) {}

  activeObjectUrls.delete(url);

}


function revokeAllObjectUrls() {

  activeObjectUrls.forEach(
    url => {

      try {

        URL.revokeObjectURL(url);

      }
      catch (_) {}

    }
  );

  activeObjectUrls.clear();

}


/* =========================================================
   INDEXED DB
   SAME DATABASE USED BY rutographer.js
   ========================================================= */

let mediaDBPromise =
  null;


function openMediaDB() {

  if (mediaDBPromise) {

    return mediaDBPromise;

  }


  mediaDBPromise =
    new Promise(
      (resolve, reject) => {

        if (!window.indexedDB) {

          reject(
            new Error(
              "IndexedDB is not supported by this browser."
            )
          );

          return;

        }


        const request =
          indexedDB.open(
            LOCAL_DB_NAME,
            LOCAL_DB_VERSION
          );


        request.onupgradeneeded =
          event => {

            const db =
              event.target.result;

            if (
              !db.objectStoreNames.contains(
                LOCAL_STORE_NAME
              )
            ) {

              db.createObjectStore(
                LOCAL_STORE_NAME,
                {
                  keyPath: "id"
                }
              );

            }

          };


        request.onsuccess =
          () => {

            const db =
              request.result;

            db.onversionchange =
              () => db.close();

            resolve(db);

          };


        request.onerror =
          () => {

            reject(
              request.error
            );

          };

      }
    );


  return mediaDBPromise;

}


/* =========================================================
   INDEXED DB MEDIA CRUD
   ========================================================= */

async function saveMediaBlob(file) {

  if (!file) {

    throw new Error(
      "No file selected."
    );

  }


  const db =
    await openMediaDB();


  const id =
    "media-" + uid();


  await new Promise(
    (resolve, reject) => {

      const transaction =
        db.transaction(
          LOCAL_STORE_NAME,
          "readwrite"
        );


      const store =
        transaction.objectStore(
          LOCAL_STORE_NAME
        );


      const request =
        store.put({

          id,

          name:
            file.name ||
            "media",

          type:
            file.type ||
            "application/octet-stream",

          blob:
            file,

          createdAt:
            Date.now()

        });


      request.onerror =
        () =>
          reject(
            request.error
          );


      transaction.oncomplete =
        () =>
          resolve();


      transaction.onerror =
        () =>
          reject(
            transaction.error ||
            request.error
          );

    }
  );


  return id;

}


async function getMediaBlob(id) {

  if (!id) {

    return null;

  }


  const db =
    await openMediaDB();


  return new Promise(
    (resolve, reject) => {

      const transaction =
        db.transaction(
          LOCAL_STORE_NAME,
          "readonly"
        );


      const request =
        transaction
          .objectStore(
            LOCAL_STORE_NAME
          )
          .get(id);


      request.onsuccess =
        () => {

          resolve(
            request.result ||
            null
          );

        };


      request.onerror =
        () =>
          reject(
            request.error
          );

    }
  );

}


async function deleteMediaBlob(id) {

  if (!id) {

    return;

  }


  const db =
    await openMediaDB();


  await new Promise(
    (resolve, reject) => {

      const transaction =
        db.transaction(
          LOCAL_STORE_NAME,
          "readwrite"
        );


      const request =
        transaction
          .objectStore(
            LOCAL_STORE_NAME
          )
          .delete(id);


      request.onerror =
        () =>
          reject(
            request.error
          );


      transaction.oncomplete =
        () =>
          resolve();


      transaction.onerror =
        () =>
          reject(
            transaction.error ||
            request.error
          );

    }
  );

}


async function clearAllMedia() {

  const db =
    await openMediaDB();


  await new Promise(
    (resolve, reject) => {

      const transaction =
        db.transaction(
          LOCAL_STORE_NAME,
          "readwrite"
        );


      const request =
        transaction
          .objectStore(
            LOCAL_STORE_NAME
          )
          .clear();


      request.onerror =
        () =>
          reject(
            request.error
          );


      transaction.oncomplete =
        () =>
          resolve();


      transaction.onerror =
        () =>
          reject(
            transaction.error ||
            request.error
          );

    }
  );

}


/* =========================================================
   MEDIA REFERENCES
   ========================================================= */

function isLocalMediaReference(value) {

  return (
    typeof value === "string" &&
    value.startsWith(
      LOCAL_MEDIA_PREFIX
    )
  );

}


function getMediaId(reference) {

  if (
    !isLocalMediaReference(
      reference
    )
  ) {

    return "";

  }

  return reference.slice(
    LOCAL_MEDIA_PREFIX.length
  );

}


function makeMediaReference(id) {

  return (
    LOCAL_MEDIA_PREFIX +
    id
  );

}


/* =========================================================
   INTERNAL MEDIA REFERENCE STORAGE
   ========================================================= */

function setMediaReference(
  item,
  property,
  reference
) {

  if (!item) {

    return;

  }


  if (reference) {

    if (!item.__mediaRef) {

      item.__mediaRef = {};

    }

    item.__mediaRef[property] =
      reference;

  }
  else {

    if (
      item.__mediaRef
    ) {

      delete item.__mediaRef[
        property
      ];

      if (
        Object.keys(
          item.__mediaRef
        ).length === 0
      ) {

        delete item.__mediaRef;

      }

    }

  }

}


function getMediaReference(
  item,
  property
) {

  return (
    item?.__mediaRef?.[property] ||
    ""
  );

}


function setProjectVideoReference(
  video,
  reference
) {

  if (!video) {

    return;

  }


  if (reference) {

    video.__mediaRef =
      reference;

  }
  else {

    delete video.__mediaRef;

  }

}


function getProjectVideoReference(
  video
) {

  return (
    video?.__mediaRef ||
    ""
  );

}


/* =========================================================
   MEDIA REFERENCE BY PATH
   ========================================================= */

function getMediaReferenceByPath(path) {

  const parts =
    path.split(".");


  if (
    parts[0] === "projects"
  ) {

    const project =
      data.projects?.[
        Number(parts[1])
      ];


    if (!project) {

      return "";

    }


    if (
      parts[2] === "poster"
    ) {

      return getMediaReference(
        project,
        "poster"
      );

    }


    if (
      parts[2] === "videos"
    ) {

      const video =
        project.videos?.[
          Number(parts[3])
        ];


      return getProjectVideoReference(
        video
      );

    }


    return "";

  }


  const item =
    data[
      parts[0]
    ]?.[
      Number(parts[1])
    ];


  if (!item) {

    return "";

  }


  return getMediaReference(
    item,
    parts[2]
  );

}


function setMediaReferenceByPath(
  path,
  reference
) {

  const parts =
    path.split(".");


  if (
    parts[0] === "projects"
  ) {

    const project =
      data.projects?.[
        Number(parts[1])
      ];


    if (!project) {

      return;

    }


    if (
      parts[2] === "poster"
    ) {

      setMediaReference(
        project,
        "poster",
        reference
      );

      return;

    }


    if (
      parts[2] === "videos"
    ) {

      const video =
        project.videos?.[
          Number(parts[3])
        ];


      if (video) {

        setProjectVideoReference(
          video,
          reference
        );

      }

      return;

    }

  }


  const item =
    data[
      parts[0]
    ]?.[
      Number(parts[1])
    ];


  if (!item) {

    return;

  }


  setMediaReference(
    item,
    parts[2],
    reference
  );

}


function clearMediaReferenceByPath(path) {

  setMediaReferenceByPath(
    path,
    ""
  );

}


/* =========================================================
   RESOLVE LOCAL MEDIA
   ========================================================= */

async function resolveAdminMedia(
  reference
) {

  if (
    !isLocalMediaReference(
      reference
    )
  ) {

    return reference || "";

  }


  const id =
    getMediaId(reference);


  const record =
    await getMediaBlob(id);


  if (
    !record?.blob
  ) {

    console.warn(
      "KARKABA: Media not found:",
      id
    );

    return "";

  }


  return createObjectUrl(
    record.blob
  );

}


/* =========================================================
   HYDRATE ITEM
   ========================================================= */

async function hydrateMediaProperty(
  item,
  property
) {

  if (!item) {

    return;

  }


  let reference =
    getMediaReference(
      item,
      property
    );


  const currentValue =
    item[property];


  /*
    If the saved data itself contains:

    idb:media-xxxx

    move it into internal metadata first.
  */

  if (
    isLocalMediaReference(
      currentValue
    )
  ) {

    reference =
      currentValue;

    setMediaReference(
      item,
      property,
      reference
    );

  }


  if (!reference) {

    return;

  }


  const objectUrl =
    await resolveAdminMedia(
      reference
    );


  if (objectUrl) {

    item[property] =
      objectUrl;

  }
  else {

    /*
      Keep the IDB reference internally
      even when the actual blob is missing.
    */

    item[property] =
      "";

  }

}


async function hydrateItemMedia(item) {

  if (!item) {

    return;

  }


  await hydrateMediaProperty(
    item,
    "src"
  );


  await hydrateMediaProperty(
    item,
    "before"
  );


  await hydrateMediaProperty(
    item,
    "after"
  );


  await hydrateMediaProperty(
    item,
    "poster"
  );


  if (
    Array.isArray(
      item.videos
    )
  ) {

    for (
      const video of
      item.videos
    ) {

      if (!video) {

        continue;

      }


      let reference =
        getProjectVideoReference(
          video
        );


      if (
        isLocalMediaReference(
          video.src
        )
      ) {

        reference =
          video.src;

        setProjectVideoReference(
          video,
          reference
        );

      }


      if (!reference) {

        continue;

      }


      const objectUrl =
        await resolveAdminMedia(
          reference
        );


      if (objectUrl) {

        video.src =
          objectUrl;

      }
      else {

        video.src =
          "";

      }

    }

  }

}


/* =========================================================
   HYDRATE EVERYTHING
   ========================================================= */

async function hydrateAllMedia() {

  const allTypes = [
    "projects",
    "capture",
    "edit",
    "color",
    "story"
  ];


  for (
    const type of allTypes
  ) {

    for (
      const item of
      data[type] || []
    ) {

      await hydrateItemMedia(
        item
      );

    }

  }

}


/* =========================================================
   SERIALIZE DATA
   Convert temporary Blob URLs
   back into permanent idb: references
   ========================================================= */

function prepareDataForSave() {

  const output =
    clone(data);


  /* ---------------------------------------------
     PROJECTS
  --------------------------------------------- */

  output.projects =
    (output.projects || [])
      .map(
        (project, index) => {

          const source =
            data.projects?.[index];


          /* POSTER */

          const posterReference =
            getMediaReference(
              source,
              "poster"
            );


          if (posterReference) {

            project.poster =
              posterReference;

          }


          /* PROJECT VIDEOS */

          project.videos =
            (project.videos || [])
              .map(
                (video, videoIndex) => {

                  const sourceVideo =
                    source?.videos?.[
                      videoIndex
                    ];


                  const reference =
                    getProjectVideoReference(
                      sourceVideo
                    );


                  if (reference) {

                    video.src =
                      reference;

                  }


                  delete video.__mediaRef;

                  return video;

                }
              );


          delete project.__mediaRef;

          return project;

        }
      );


  /* ---------------------------------------------
     CAPTURE / STORY
  --------------------------------------------- */

  [
    "capture",
    "story"
  ].forEach(
    type => {

      output[type] =
        (output[type] || [])
          .map(
            (item, index) => {

              const source =
                data[type]?.[index];


              const reference =
                getMediaReference(
                  source,
                  "src"
                );


              if (reference) {

                item.src =
                  reference;

              }


              delete item.__mediaRef;

              return item;

            }
          );

    }
  );


  /* ---------------------------------------------
     EDIT / COLOR
  --------------------------------------------- */

  [
    "edit",
    "color"
  ].forEach(
    type => {

      output[type] =
        (output[type] || [])
          .map(
            (item, index) => {

              const source =
                data[type]?.[index];


              const beforeReference =
                getMediaReference(
                  source,
                  "before"
                );


              const afterReference =
                getMediaReference(
                  source,
                  "after"
                );


              if (
                beforeReference
              ) {

                item.before =
                  beforeReference;

              }


              if (
                afterReference
              ) {

                item.after =
                  afterReference;

              }


              delete item.__mediaRef;

              return item;

            }
          );

    }
  );


  return output;

}


/* =========================================================
   SAVE
   ========================================================= */

async function saveLocalData() {

  const prepared =
    prepareDataForSave();


  localStorage.setItem(
    LOCAL_DATA_KEY,
    JSON.stringify(
      prepared
    )
  );


  /*
    Important:
    The public rutographer.js reads
    exactly the same key.
  */

  console.log(
    "KARKABA: CMS data saved."
  );

}


/* =========================================================
   LOAD
   ========================================================= */

async function loadLocalData() {

  console.log(
    "KARKABA: loading local database..."
  );


  const saved =
    localStorage.getItem(
      LOCAL_DATA_KEY
    );


  if (!saved) {

    data =
      clone(DEFAULT);

    return;

  }


  try {

    const parsed =
      JSON.parse(
        saved
      );


    data =
      clone(DEFAULT);


    if (
      parsed.settings
    ) {

      data.settings = {
        ...data.settings,
        ...parsed.settings
      };

    }


    [
      "projects",
      "capture",
      "edit",
      "color",
      "story"
    ].forEach(
      type => {

        if (
          Array.isArray(
            parsed[type]
          )
        ) {

          data[type] =
            parsed[type];

        }

      }
    );


    revokeAllObjectUrls();


    await hydrateAllMedia();


    console.log(
      "KARKABA: local database loaded."
    );

  }
  catch (error) {

    console.error(
      "KARKABA load error:",
      error
    );


    data =
      clone(DEFAULT);

  }

}


/* =========================================================
   UPLOAD MEDIA
   ========================================================= */

async function uploadMedia(file) {

  if (!file) {

    throw new Error(
      "No file selected."
    );

  }


  const mediaId =
    await saveMediaBlob(
      file
    );


  const reference =
    makeMediaReference(
      mediaId
    );


  const objectUrl =
    createObjectUrl(
      file
    );


  return {
    mediaId,
    reference,
    objectUrl
  };

}


/* =========================================================
   MEDIA FIELD
   ========================================================= */

function mediaField(
  label,
  value,
  key,
  accept = "video/*",
  type = "video"
) {

  const safe =
    esc(value || "");


  let preview =
    "";


  if (value) {

    if (
      type === "image"
    ) {

      preview = `
        <img
          src="${safe}"
          alt="${esc(label)}"
          style="max-width:100%;display:block;"
        >
      `;

    }
    else {

      preview = `
        <video
          controls
          muted
          playsinline
          preload="metadata"
          style="max-width:100%;display:block;"
        >
          <source src="${safe}">
        </video>
      `;

    }

  }
  else {

    preview =
      type === "image"
        ? "NO IMAGE"
        : "NO VIDEO";

  }


  return `
    <div class="media-field">

      <label>${label}</label>

      <div class="media-row">

        <input
          type="text"
          data-media-path="${key}"
          value="${safe}"
          placeholder="${
            type === "image"
              ? "images/file.jpg or uploaded media"
              : "videos/file.mp4 or uploaded media"
          }"
        >

        <label class="upload">

          ${
            type === "image"
              ? "UPLOAD IMAGE"
              : "UPLOAD VIDEO"
          }

          <input
            type="file"
            accept="${accept}"
            data-upload-path="${key}"
            data-media-type="${type}"
          >

        </label>

      </div>

      <div
        class="media-preview"
        data-preview="${key}"
      >
        ${preview}
      </div>

    </div>
  `;

}


/* =========================================================
   SETTINGS
   ========================================================= */

function renderSettings() {

  const s =
    data.settings;


  const form =
    $("#settingsForm");


  if (!form) {

    return;

  }


  form.innerHTML = [

    input(
      "BRAND",
      s.brand,
      "settings.brand"
    ),

    input(
      "LOGO TOP",
      s.logoTop,
      "settings.logoTop"
    ),

    input(
      "EMAIL",
      s.email,
      "settings.email"
    ),

    input(
      "HERO EYEBROW",
      s.heroEyebrow,
      "settings.heroEyebrow"
    ),

    input(
      "HERO LINE 1",
      s.heroTitleA,
      "settings.heroTitleA"
    ),

    input(
      "HERO LINE 2",
      s.heroTitleB,
      "settings.heroTitleB"
    ),

    input(
      "HERO LINE 3",
      s.heroTitleC,
      "settings.heroTitleC"
    ),

    input(
      "HERO DESCRIPTION",
      s.heroDescription,
      "settings.heroDescription",
      true,
      true
    ),

    input(
      "STORY LABEL",
      s.storyLabel,
      "settings.storyLabel"
    ),

    input(
      "STORY TITLE 1",
      s.storyTitleA,
      "settings.storyTitleA"
    ),

    input(
      "STORY TITLE 2",
      s.storyTitleB,
      "settings.storyTitleB"
    ),

    input(
      "STORY TITLE 3",
      s.storyTitleC,
      "settings.storyTitleC"
    ),

    input(
      "STORY TEXT",
      s.storyText,
      "settings.storyText",
      true,
      true
    ),

    input(
      "WORK LABEL",
      s.workLabel,
      "settings.workLabel"
    ),

    input(
      "WORK TITLE 1",
      s.workTitleA,
      "settings.workTitleA"
    ),

    input(
      "WORK TITLE 2",
      s.workTitleB,
      "settings.workTitleB"
    ),

    input(
      "WORK INTRO",
      s.workIntro,
      "settings.workIntro",
      true,
      true
    ),

    input(
      "ABOUT LABEL",
      s.aboutLabel,
      "settings.aboutLabel"
    ),

    input(
      "ABOUT TITLE 1",
      s.aboutTitleA,
      "settings.aboutTitleA"
    ),

    input(
      "ABOUT TITLE 2",
      s.aboutTitleB,
      "settings.aboutTitleB"
    ),

    input(
      "ABOUT TEXT 1",
      s.aboutTextA,
      "settings.aboutTextA",
      true,
      true
    ),

    input(
      "ABOUT TEXT 2",
      s.aboutTextB,
      "settings.aboutTextB",
      true,
      true
    ),

    input(
      "CONTACT LABEL",
      s.contactLabel,
      "settings.contactLabel"
    ),

    input(
      "CONTACT TITLE 1",
      s.contactTitleA,
      "settings.contactTitleA"
    ),

    input(
      "CONTACT TITLE 2",
      s.contactTitleB,
      "settings.contactTitleB"
    )

  ].join("");

}


/* =========================================================
   COLLECTION RENDER
   ========================================================= */

function renderCollection(type) {

  const list =
    $("#" + type + "List");


  if (!list) {

    return;

  }


  list.innerHTML =
    (data[type] || [])
      .map(
        (item, index) => {

          /* ---------------------------------------------
             PROJECTS
          --------------------------------------------- */

          if (
            type === "projects"
          ) {

            return `
              <article class="cms-item">

                <div class="cms-item-head">

                  <strong>
                    ${String(index + 1).padStart(2, "0")}
                    /
                    ${esc(item.title)}
                  </strong>

                  <button
                    type="button"
                    class="danger"
                    data-delete="${type}"
                    data-index="${index}"
                  >
                    DELETE
                  </button>

                </div>

                <div class="cms-body">

                  <div class="cms-grid">

                    ${input(
                      "ID / SLUG",
                      item.id,
                      `projects.${index}.id`
                    )}

                    ${input(
                      "NUMBER",
                      item.number,
                      `projects.${index}.number`
                    )}

                    ${input(
                      "TITLE",
                      item.title,
                      `projects.${index}.title`
                    )}

                    ${input(
                      "DESCRIPTION",
                      item.description,
                      `projects.${index}.description`
                    )}

                    ${input(
                      "PROJECT TEXT",
                      item.text,
                      `projects.${index}.text`,
                      true,
                      true
                    )}

                    ${mediaField(
                      "WORK POSTER",
                      item.poster,
                      `projects.${index}.poster`,
                      "image/*",
                      "image"
                    )}

                    ${
                      (item.videos || [])
                        .map(
                          (
                            video,
                            videoIndex
                          ) =>
                            mediaField(
                              video.label ||
                              `VIDEO ${videoIndex + 1}`,
                              video.src,
                              `projects.${index}.videos.${videoIndex}.src`
                            )
                        )
                        .join("")
                    }

                    ${
                      (item.videos || [])
                        .map(
                          (
                            video,
                            videoIndex
                          ) =>
                            input(
                              "VIDEO " +
                              (videoIndex + 1) +
                              " LABEL",
                              video.label,
                              `projects.${index}.videos.${videoIndex}.label`
                            )
                        )
                        .join("")
                    }

                  </div>

                </div>

              </article>
            `;

          }


          /* ---------------------------------------------
             EDIT / COLOR
          --------------------------------------------- */

          if (
            type === "edit" ||
            type === "color"
          ) {

            return `
              <article class="cms-item">

                <div class="cms-item-head">

                  <strong>
                    ${String(index + 1).padStart(2, "0")}
                    /
                    ${esc(item.title)}
                  </strong>

                  <button
                    type="button"
                    class="danger"
                    data-delete="${type}"
                    data-index="${index}"
                  >
                    DELETE
                  </button>

                </div>

                <div class="cms-body">

                  <div class="cms-grid">

                    ${input(
                      "TITLE",
                      item.title,
                      `${type}.${index}.title`
                    )}

                    ${input(
                      "LABEL",
                      item.label,
                      `${type}.${index}.label`
                    )}

                    ${input(
                      "DESCRIPTION",
                      item.text,
                      `${type}.${index}.text`,
                      true,
                      true
                    )}

                    ${mediaField(
                      type === "edit"
                        ? "BEFORE / RAW"
                        : "ORIGINAL / LOG",
                      item.before,
                      `${type}.${index}.before`
                    )}

                    ${mediaField(
                      type === "edit"
                        ? "AFTER / FINAL EDIT"
                        : "AFTER / GRADED",
                      item.after,
                      `${type}.${index}.after`
                    )}

                  </div>

                </div>

              </article>
            `;

          }


          /* ---------------------------------------------
             CAPTURE / STORY
          --------------------------------------------- */

          return `
            <article class="cms-item">

              <div class="cms-item-head">

                <strong>
                  ${String(index + 1).padStart(2, "0")}
                  /
                  ${esc(item.title)}
                </strong>

                <button
                  type="button"
                  class="danger"
                  data-delete="${type}"
                  data-index="${index}"
                >
                  DELETE
                </button>

              </div>

              <div class="cms-body">

                <div class="cms-grid">

                  ${input(
                    "TITLE",
                    item.title,
                    `${type}.${index}.title`
                  )}

                  ${input(
                    "LABEL",
                    item.label,
                    `${type}.${index}.label`
                  )}

                  ${input(
                    "DESCRIPTION",
                    item.text,
                    `${type}.${index}.text`,
                    true,
                    true
                  )}

                  ${mediaField(
                    "VIDEO",
                    item.src,
                    `${type}.${index}.src`
                  )}

                </div>

              </div>

            </article>
          `;

        }
      )
      .join("");

}


/* =========================================================
   STATS
   ========================================================= */

function updateStats() {

  [
    "Projects",
    "Capture",
    "Edit",
    "Color",
    "Story"
  ].forEach(
    name => {

      const element =
        $("#stat" + name);


      if (element) {

        element.textContent =
          data[
            name.toLowerCase()
          ]?.length || 0;

      }

    }
  );

}


/* =========================================================
   RENDER ALL
   ========================================================= */

function renderAll() {

  renderSettings();


  [
    "projects",
    "capture",
    "edit",
    "color",
    "story"
  ].forEach(
    type =>
      renderCollection(type)
  );


  updateStats();

}


/* =========================================================
   COLLECT FORM DATA
   ========================================================= */

function collect() {

  /*
    Normal text inputs.
  */

  $$("[data-path]").forEach(
    element => {

      setPath(
        data,
        element.dataset.path,
        element.value
      );

    }
  );


  /*
    Media inputs.

    Important:
    If the field still contains the same Blob URL
    generated by our upload, KEEP the IDB reference.

    If the user manually replaces it with another URL/path,
    remove the old IDB reference.
  */

  $$("[data-media-path]").forEach(
    element => {

      const path =
        element.dataset.mediaPath;

      const value =
        element.value;

      const currentValue =
        getPath(
          data,
          path
        );

      const existingReference =
        getMediaReferenceByPath(
          path
        );


      setPath(
        data,
        path,
        value
      );


      if (
        isLocalMediaReference(
          value
        )
      ) {

        setMediaReferenceByPath(
          path,
          value
        );

        return;

      }


      /*
        Same object URL = user didn't replace
        the uploaded media.
      */

      if (
        existingReference &&
        value === currentValue
      ) {

        setMediaReferenceByPath(
          path,
          existingReference
        );

        return;

      }


      /*
        If value is a Blob URL but is not the
        previous current value, don't blindly
        delete the reference.

        This mainly protects against re-render timing.
      */

      if (
        isBlobUrl(value) &&
        existingReference
      ) {

        setMediaReferenceByPath(
          path,
          existingReference
        );

        return;

      }


      /*
        User entered a normal path.
      */

      clearMediaReferenceByPath(
        path
      );

    }
  );

}


/* =========================================================
   UPLOAD HANDLER
   ========================================================= */

async function handleUpload(
  inputElement
) {

  const path =
    inputElement.dataset.uploadPath;


  const file =
    inputElement.files?.[0];


  if (!file) {

    return;

  }


  const type =
    inputElement.dataset.mediaType ||
    "video";


  const oldReference =
    getMediaReferenceByPath(
      path
    );


  try {

    inputElement.disabled =
      true;


    const result =
      await uploadMedia(
        file
      );


    /*
      Put temporary preview URL
      inside current Admin state.
    */

    setPath(
      data,
      path,
      result.objectUrl
    );


    /*
      Store permanent IDB reference.
    */

    setMediaReferenceByPath(
      path,
      result.reference
    );


    /*
      Delete old file AFTER the new one
      has been successfully stored.
    */

    if (
      oldReference &&
      oldReference !== result.reference
    ) {

      const oldId =
        getMediaId(
          oldReference
        );


      if (oldId) {

        try {

          await deleteMediaBlob(
            oldId
          );

        }
        catch (error) {

          console.warn(
            "KARKABA: Could not remove old media:",
            error
          );

        }

      }

    }


    /*
      Update text field.
    */

    const field =
      document.querySelector(
        `[data-media-path="${CSS.escape(path)}"]`
      );


    if (field) {

      field.value =
        result.objectUrl;

    }


    /*
      Update preview.
    */

    const preview =
      document.querySelector(
        `[data-preview="${CSS.escape(path)}"]`
      );


    if (preview) {

      if (
        type === "image"
      ) {

        preview.innerHTML = `
          <img
            src="${esc(result.objectUrl)}"
            alt="uploaded"
            style="max-width:100%;display:block;"
          >
        `;

      }
      else {

        preview.innerHTML = `
          <video
            controls
            muted
            playsinline
            preload="metadata"
            src="${esc(result.objectUrl)}"
            style="max-width:100%;display:block;"
          ></video>
        `;

      }

    }


    /*
      Save immediately.
    */

    await saveLocalData();


    alert(
      "Upload successful and saved locally."
    );

  }
  catch (error) {

    console.error(
      "KARKABA upload error:",
      error
    );


    alert(
      "Upload failed:\n\n" +
      (
        error.message ||
        error
      )
    );

  }
  finally {

    inputElement.disabled =
      false;

    inputElement.value =
      "";

  }

}


/* =========================================================
   REMOVE ALL MEDIA REFERENCES FROM ITEM
   ========================================================= */

function collectItemMediaIds(item) {

  const ids =
    new Set();


  const collectReference =
    reference => {

      if (
        isLocalMediaReference(
          reference
        )
      ) {

        const id =
          getMediaId(
            reference
          );


        if (id) {

          ids.add(id);

        }

      }

    };


  /*
    Internal references.
  */

  if (
    item?.__mediaRef
  ) {

    Object.values(
      item.__mediaRef
    ).forEach(
      collectReference
    );

  }


  /*
    Direct fields.
  */

  collectReference(
    item?.src
  );

  collectReference(
    item?.before
  );

  collectReference(
    item?.after
  );

  collectReference(
    item?.poster
  );


  /*
    Project videos.
  */

  if (
    Array.isArray(
      item?.videos
    )
  ) {

    item.videos.forEach(
      video => {

        collectReference(
          video?.__mediaRef
        );

        collectReference(
          video?.src
        );

      }
    );

  }


  return ids;

}


async function removeLocalMediaFromItem(item) {

  const ids =
    collectItemMediaIds(
      item
    );


  for (
    const id of ids
  ) {

    try {

      await deleteMediaBlob(
        id
      );

    }
    catch (error) {

      console.warn(
        "KARKABA: Could not delete media:",
        id,
        error
      );

    }

  }

}


/* =========================================================
   TAB SYSTEM
   ========================================================= */

function activateTab(tabName) {

  $$(".tab-btn")
    .forEach(
      button => {

        button.classList.toggle(
          "active",
          button.dataset.tab ===
            tabName
        );

      }
    );


  $$(".admin-tab")
    .forEach(
      tab => {

        tab.classList.toggle(
          "active",
          tab.id ===
            `tab-${tabName}`
        );

      }
    );


  const button =
    document.querySelector(
      `.tab-btn[data-tab="${CSS.escape(tabName)}"]`
    );


  const title =
    $("#tabTitle");


  if (
    button &&
    title
  ) {

    title.textContent =
      button.textContent.trim();

  }

}


/* =========================================================
   CLICK EVENTS - TABS
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    const tabButton =
      event.target.closest(
        ".tab-btn"
      );


    if (!tabButton) {

      return;

    }


    activateTab(
      tabButton.dataset.tab
    );

  }
);


/* =========================================================
   INPUT EVENTS
   ========================================================= */

document.addEventListener(
  "input",
  event => {

    if (
      event.target.matches(
        "[data-path]"
      )
    ) {

      setPath(
        data,
        event.target.dataset.path,
        event.target.value
      );

    }


    if (
      event.target.matches(
        "[data-media-path]"
      )
    ) {

      const path =
        event.target.dataset.mediaPath;


      const value =
        event.target.value;


      const existingReference =
        getMediaReferenceByPath(
          path
        );


      const previousValue =
        getPath(
          data,
          path
        );


      setPath(
        data,
        path,
        value
      );


      /*
        idb:reference manually entered.
      */

      if (
        isLocalMediaReference(
          value
        )
      ) {

        setMediaReferenceByPath(
          path,
          value
        );

        return;

      }


      /*
        Keep reference if this is still
        our current Blob URL.
      */

      if (
        existingReference &&
        value === previousValue
      ) {

        setMediaReferenceByPath(
          path,
          existingReference
        );

        return;

      }


      /*
        Blob URL generated by the uploader.
      */

      if (
        existingReference &&
        isBlobUrl(value)
      ) {

        setMediaReferenceByPath(
          path,
          existingReference
        );

        return;

      }


      /*
        Normal path manually entered.
      */

      clearMediaReferenceByPath(
        path
      );

    }

  }
);


/* =========================================================
   UPLOAD EVENTS
   ========================================================= */

document.addEventListener(
  "change",
  async event => {

    if (
      event.target.matches(
        "[data-upload-path]"
      )
    ) {

      await handleUpload(
        event.target
      );

    }

  }
);


/* =========================================================
   DELETE / ADD
   ========================================================= */

document.addEventListener(
  "click",
  async event => {

    /* ---------------------------------------------
       DELETE
    --------------------------------------------- */

    const deleteButton =
      event.target.closest(
        "[data-delete]"
      );


    if (deleteButton) {

      const type =
        deleteButton.dataset.delete;


      const index =
        Number(
          deleteButton.dataset.index
        );


      if (
        !confirm(
          "Delete this item?"
        )
      ) {

        return;

      }


      const item =
        data[type]?.[
          index
        ];


      try {

        await removeLocalMediaFromItem(
          item
        );


        data[type].splice(
          index,
          1
        );


        renderCollection(
          type
        );


        updateStats();


        await saveLocalData();

      }
      catch (error) {

        console.error(
          "KARKABA delete error:",
          error
        );


        alert(
          "Delete failed:\n\n" +
          (
            error.message ||
            error
          )
        );

      }


      return;

    }


    /* ---------------------------------------------
       ADD
    --------------------------------------------- */

    const addButton =
      event.target.closest(
        "[data-add]"
      );


    if (!addButton) {

      return;

    }


    const type =
      addButton.dataset.add;


    if (
      type === "projects"
    ) {

      data.projects.push({

        id:
          "project-" +
          uid(),

        number:
          `${String(
            data.projects.length + 1
          ).padStart(
            2,
            "0"
          )} / 2026`,

        title:
          "NEW PROJECT",

        description:
          "Project description.",

        text:
          "Project story.",

        poster:
          "",

        published:
          true,

        videos: [

          {
            label:
              "MAIN FILM",

            src:
              ""
          },

          {
            label:
              "TEASER",

            src:
              ""
          },

          {
            label:
              "BTS",

            src:
              ""
          }

        ]

      });

    }
    else if (
      type === "edit" ||
      type === "color"
    ) {

      data[type].push({

        title:
          "NEW ITEM",

        label:
          type.toUpperCase() +
          " / " +
          String(
            data[type].length + 1
          ).padStart(
            2,
            "0"
          ),

        text:
          "Description.",

        before:
          "",

        after:
          ""

      });

    }
    else {

      data[type].push({

        title:
          "NEW ITEM",

        label:
          type.toUpperCase() +
          " / " +
          String(
            data[type].length + 1
          ).padStart(
            2,
            "0"
          ),

        text:
          "Description.",

        src:
          ""

      });

    }


    renderCollection(
      type
    );


    updateStats();


    await saveLocalData();

  }
);


/* =========================================================
   SAVE BUTTON
   ========================================================= */

const saveButton =
  $("#saveBtn");


if (saveButton) {

  saveButton.addEventListener(
    "click",
    async () => {

      if (isSaving) {

        return;

      }


      try {

        collect();


        isSaving =
          true;


        saveButton.disabled =
          true;


        const oldText =
          saveButton.textContent;


        saveButton.textContent =
          "SAVING...";


        await saveLocalData();


        saveButton.textContent =
          oldText;


        alert(
          "Saved successfully on localhost."
        );

      }
      catch (error) {

        console.error(
          "KARKABA save error:",
          error
        );


        saveButton.textContent =
          "SAVE CHANGES";


        alert(
          "Save failed:\n\n" +
          (
            error.message ||
            error
          )
        );

      }
      finally {

        isSaving =
          false;


        saveButton.disabled =
          false;

      }

    }
  );

}


/* =========================================================
   EXPORT
   ========================================================= */

const exportButton =
  $("#exportBtn");


if (exportButton) {

  exportButton.addEventListener(
    "click",
    async () => {

      try {

        collect();


        const backup =
          prepareDataForSave();


        const blob =
          new Blob(
            [
              JSON.stringify(
                backup,
                null,
                2
              )
            ],
            {
              type:
                "application/json"
            }
          );


        const url =
          URL.createObjectURL(
            blob
          );


        const link =
          document.createElement(
            "a"
          );


        link.href =
          url;


        link.download =
          "karkaba-local-backup.json";


        document.body.appendChild(
          link
        );


        link.click();


        link.remove();


        setTimeout(
          () => {

            URL.revokeObjectURL(
              url
            );

          },
          1000
        );


        alert(
          "Backup exported successfully.\n\nThe JSON contains your CMS data and IndexedDB media references. The actual uploaded video/image files remain inside this browser."
        );

      }
      catch (error) {

        console.error(
          "KARKABA export error:",
          error
        );


        alert(
          "Export failed:\n\n" +
          (
            error.message ||
            error
          )
        );

      }

    }
  );

}


/* =========================================================
   IMPORT
   ========================================================= */

const importFile =
  $("#importFile");


if (importFile) {

  importFile.addEventListener(
    "change",
    event => {

      const file =
        event.target.files?.[0];


      if (!file) {

        return;

      }


      const reader =
        new FileReader();


      reader.onload =
        async () => {

          try {

            const parsed =
              JSON.parse(
                reader.result
              );


            if (
              !parsed ||
              typeof parsed !== "object"
            ) {

              throw new Error(
                "Invalid backup."
              );

            }


            revokeAllObjectUrls();


            data =
              clone(DEFAULT);


            if (
              parsed.settings
            ) {

              data.settings = {
                ...data.settings,
                ...parsed.settings
              };

            }


            [
              "projects",
              "capture",
              "edit",
              "color",
              "story"
            ].forEach(
              type => {

                if (
                  Array.isArray(
                    parsed[type]
                  )
                ) {

                  data[type] =
                    parsed[type];

                }

              }
            );


            await hydrateAllMedia();


            renderAll();


            await saveLocalData();


            alert(
              "Backup imported successfully.\n\nLocal media will only appear if the corresponding IndexedDB files still exist in this browser."
            );

          }
          catch (error) {

            console.error(
              "KARKABA import error:",
              error
            );


            alert(
              "Invalid JSON backup.\n\n" +
              (
                error.message ||
                error
              )
            );

          }

        };


      reader.readAsText(
        file
      );


      event.target.value =
        "";

    }
  );

}


/* =========================================================
   RESET
   ========================================================= */

const resetButton =
  $("#resetBtn");


if (resetButton) {

  resetButton.addEventListener(
    "click",
    async () => {

      if (
        !confirm(
          "Reset the CMS to the original demo data?\n\nThis will also delete ALL uploaded local media."
        )
      ) {

        return;

      }


      try {

        revokeAllObjectUrls();


        await clearAllMedia();


        data =
          clone(DEFAULT);


        renderAll();


        await saveLocalData();


        alert(
          "CMS reset successfully on localhost."
        );

      }
      catch (error) {

        console.error(
          "KARKABA reset error:",
          error
        );


        alert(
          "Reset failed:\n\n" +
          (
            error.message ||
            error
          )
        );

      }

    }
  );

}


/* =========================================================
   CLEANUP
   ========================================================= */

window.addEventListener(
  "beforeunload",
  () => {

    revokeAllObjectUrls();

  }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

async function initializeCMS() {

  try {

    renderAll();


    await openMediaDB();


    await loadLocalData();


    renderAll();


    console.log(
      "KARKABA LOCAL CMS READY"
    );

  }
  catch (error) {

    console.error(
      "KARKABA CMS initialization error:",
      error
    );


    alert(
      "Could not load KARKABA local data.\n\n" +
      (
        error.message ||
        error
      )
    );

  }

}


/* =========================================================
   START
   ========================================================= */

initializeCMS();