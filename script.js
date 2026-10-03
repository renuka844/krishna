/* =====================================
   ÉLAN ROYALE JAVASCRIPT
===================================== */


/* =====================================
   ELEMENTS
===================================== */

const body =
    document.body;

const themeBtn =
    document.getElementById("themeBtn");

const cards =
    document.querySelectorAll(".card");

const hearts =
    document.querySelectorAll(".heart");

const modal =
    document.getElementById("modal");

const closeModal =
    document.getElementById("closeModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const modalSymbol =
    document.getElementById("modalSymbol");

const toast =
    document.getElementById("toast");


let favorites =
    new Set();


/* =====================================
   TOAST
===================================== */

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2000);
}


/* =====================================
   DARK / LIGHT MODE
===================================== */

themeBtn.addEventListener(
    "click",
    () => {

        body.classList.toggle("dark");

        if (
            body.classList.contains("dark")
        ) {

            themeBtn.textContent = "☀";

            showToast(
                "Royal midnight mode activated"
            );

        } else {

            themeBtn.textContent = "☾";

            showToast(
                "Classic daylight mode activated"
            );

        }

    }
);


/* =====================================
   HERO BUTTONS
===================================== */

document
    .getElementById("exploreBtn")
    .addEventListener("click", () => {

        document
            .getElementById("collection")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


document
    .getElementById("heritageBtn")
    .addEventListener("click", () => {

        document
            .getElementById("heritage")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


/* =====================================
   FAVORITES
===================================== */

hearts.forEach(
    (heart, index) => {

        heart.addEventListener(
            "click",
            () => {

                const card =
                    cards[index];

                if (
                    favorites.has(card)
                ) {

                    favorites.delete(card);

                    heart.classList
                        .remove("active");

                    heart.textContent =
                        "♡";

                    showToast(
                        "Removed from favorites"
                    );

                } else {

                    favorites.add(card);

                    heart.classList
                        .add("active");

                    heart.textContent =
                        "♥";

                    showToast(
                        "Added to favorites"
                    );

                }

            }
        );

    }
);


/* =====================================
   SEARCH
===================================== */

const search =
    document.getElementById("search");

const count =
    document.getElementById("count");


search.addEventListener(
    "input",
    () => {

        const value =
            search.value
                .toLowerCase()
                .trim();

        let visible = 0;

        cards.forEach(card => {

            const name =
                card.dataset.name
                    .toLowerCase();

            if (
                name.includes(value)
            ) {

                card.classList
                    .remove("hidden");

                visible++;

            } else {

                card.classList
                    .add("hidden");

            }

        });

        count.textContent =
            `${visible} piece${visible === 1 ? "" : "s"} in the collection`;

    }
);


/* =====================================
   ALL BUTTON
===================================== */

document
    .getElementById("allBtn")
    .addEventListener(
        "click",
        () => {

            search.value = "";

            cards.forEach(card => {

                card.classList
                    .remove("hidden");

            });

            count.textContent =
                "4 pieces in the collection";

        }
    );


/* =====================================
   FAVORITES FILTER
===================================== */

document
    .getElementById("favoritesBtn")
    .addEventListener(
        "click",
        () => {

            let visible = 0;

            cards.forEach(card => {

                if (
                    favorites.has(card)
                ) {

                    card.classList
                        .remove("hidden");

                    visible++;

                } else {

                    card.classList
                        .add("hidden");

                }

            });

            count.textContent =
                `${visible} favorite${visible === 1 ? "" : "s"}`;

        }
    );


/* =====================================
   CARD DETAILS
===================================== */

const detailsButtons =
    document.querySelectorAll(
        ".details"
    );


detailsButtons.forEach(
    (button, index) => {

        button.addEventListener(
            "click",
            () => {

                const card =
                    cards[index];

                modalTitle.textContent =
                    card.dataset.name;

                modalText.textContent =
                    "A carefully crafted classical experience inspired by royal architecture, vintage interiors, timeless craftsmanship and elegant European design.";

                modalSymbol.textContent =
                    card.querySelector(
                        ".card-art"
                    ).textContent;

                modal.classList
                    .add("show");

            }
        );

    }
);


/* =====================================
   CLOSE MODAL
===================================== */

closeModal.addEventListener(
    "click",
    () => {

        modal.classList
            .remove("show");

    }
);


modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            modal.classList
                .remove("show");

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            modal.classList
                .remove("show");

        }

    }
);


/* =====================================
   CONTACT
===================================== */

document
    .getElementById("contactBtn")
    .addEventListener(
        "click",
        () => {

            showToast(
                "Welcome to Élan Royale ✦"
            );

        }
    );