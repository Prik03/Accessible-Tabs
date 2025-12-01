$(document).ready(function () {

    const $tabs = $('[role="tab"]');
    const $panels = $('[role="tabpanel"]');

    function activateTab(index) {
        $tabs.each(function (i) {
            const $tab = $(this);
            const panelId = $tab.attr("aria-controls");
            const $panel = $("#" + panelId);

            if (i === index) {
                $tab.attr({
                    "aria-selected": "true",
                    "tabindex": "0"
                }).focus();
                $panel.removeAttr("hidden");
            } else {
                $tab.attr({
                    "aria-selected": "false",
                    "tabindex": "-1"
                });
                $panel.attr("hidden", true);
            }
        });
    }

    $tabs.each(function (index) {
        const $tab = $(this);

        $tab.on("click", function () {
            activateTab(index);
        });

        $tab.on("keydown", function (e) {
            const key = e.key;
            let newIndex = index;

            if (key === "ArrowRight") newIndex = (index + 1) % $tabs.length;
            if (key === "ArrowLeft") newIndex = (index - 1 + $tabs.length) % $tabs.length;
            if (key === "Home") newIndex = 0;
            if (key === "End") newIndex = $tabs.length - 1;
            if (key === " " || key === "Enter") newIndex = index;

            activateTab(newIndex);
        });
    });
});
